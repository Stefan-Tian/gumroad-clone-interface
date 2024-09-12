import AuthFormContainer from '@/components/custom/auth-form-container';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { getErrorMessages } from '@/lib/utils';
import { AppRoute } from '@/router/constant';
import { useRegister } from '@/services/user/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type SignupData = z.infer<typeof schema>;

const fields: (keyof SignupData)[] = ['username', 'email', 'password'];

const Signup = () => {
  const form = useForm<SignupData>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const register = useRegister();

  const onSubmit: SubmitHandler<SignupData> = (data) => {
    register.mutate(data);
  };

  return (
    <AuthFormContainer
      title="Signup for an account"
      link={AppRoute.Login}
      linkText="Already have an account? Login"
      error={getErrorMessages(register.error)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 mb-8">
            {fields.map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                  <TextField label={fieldName} {...field} />
                )}
              />
            ))}
          </div>
          <Button type="submit" loading={register.isLoading} className="w-full">
            Confirm
          </Button>
        </form>
      </Form>
    </AuthFormContainer>
  );
};

export default Signup;
