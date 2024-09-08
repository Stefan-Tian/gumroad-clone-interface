import AuthFormContainer from '@/components/custom/auth-form-container';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { getErrorMessages } from '@/lib/utils';
import passwordResetsService from '@/services/password-resets';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});
type ForgotPasswordData = z.infer<typeof schema>;

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordData>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const {
    data,
    mutate: sendResetPasswordEmail,
    isLoading,
    error,
    isSuccess,
  } = useMutation(passwordResetsService.sendResetPasswordEmail);

  const onSubmit: SubmitHandler<ForgotPasswordData> = (data) => {
    sendResetPasswordEmail(data);
  };

  return (
    <AuthFormContainer title="Forgot password" error={getErrorMessages(error)}>
      {isSuccess ? (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          {data?.message}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <TextField label="Email" {...field} />}
            />
            <Button
              type="submit"
              className="mt-8 w-full"
              disabled={isLoading}
              loading={isLoading}
            >
              Send reset link
            </Button>
          </form>
        </Form>
      )}
    </AuthFormContainer>
  );
};

export default ForgotPassword;
