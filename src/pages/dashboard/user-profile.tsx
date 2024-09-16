import { DashboardContextType } from '@/components/custom/layout/dashboard';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { TextareaField } from '@/components/ui/textarea-field';
import {
  useCreateUserProfile,
  useUpdateUserProfile,
  useUserProfile,
} from '@/services/user-profile/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdPerson } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  bio: z.string().optional(),
  avatar: z.instanceof(File).optional(),
});

type UserProfileData = z.infer<typeof schema>;

const UserProfile = () => {
  const { user } = useOutletContext<DashboardContextType>();
  const { data, isLoading, error } = useUserProfile();

  const form = useForm<UserProfileData>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        bio: data.bio || '',
      });
    }
  }, [data, form]);

  const createUserProfile = useCreateUserProfile();
  const updateUserProfile = useUpdateUserProfile();

  const onSubmit: SubmitHandler<UserProfileData> = (formData) => {
    if (error?.response?.status === 404) {
      createUserProfile.mutate({
        ...formData,
        userId: user?.id as string,
      });
    } else {
      updateUserProfile.mutate({
        ...formData,
        id: data?.id as string,
      });
    }
  };

  const shouldShowButtonLoading =
    createUserProfile.isLoading || updateUserProfile.isLoading;
  const shouldDisableSubmit = shouldShowButtonLoading || isLoading;

  return (
    <div className="w-full">
      <div className="text-2xl font-bold mb-8">Profile</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 flex flex-col items-center w-32 mb-6">
            <div className="flex items-center justify-center w-32 h-32 mb-4">
              {form.watch('avatar') ? (
                <img
                  src={URL.createObjectURL(form.watch('avatar') as File)}
                  alt="Temporary Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : data?.avatarUrl ? (
                <img
                  src={data.avatarUrl}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-300 rounded-full">
                  <MdPerson className="text-slate-600 w-16 h-16" />
                </div>
              )}
            </div>
            <input
              type="file"
              id="avatarUpload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    form.setValue('avatar', file);
                  };
                  reader.readAsDataURL(file);
                }
                e.target.value = '';
              }}
            />
            <label
              htmlFor="avatarUpload"
              className="cursor-pointer text-blue-700 hover:text-blue-900"
            >
              Change Avatar
            </label>
          </div>
          <div className="flex space-x-4 w-full mb-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <TextField label="First Name" {...field} className="flex-1" />
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <TextField label="Last Name" {...field} className="flex-1" />
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <TextareaField label="Bio" {...field} className="mb-10" />
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={shouldDisableSubmit}
            loading={shouldShowButtonLoading}
          >
            Save Profile
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserProfile;
