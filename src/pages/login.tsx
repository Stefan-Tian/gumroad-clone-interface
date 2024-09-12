import AuthFormContainer from '@/components/custom/auth-form-container';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { getErrorMessages } from '@/lib/utils';
import { AppRoute } from '@/router/constant';
import { useLogin } from '@/services/user/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string(),
});
type LoginData = z.infer<typeof schema>;

const fields: (keyof LoginData)[] = ['email', 'password'];

const Login = () => {
  const form = useForm<LoginData>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useLogin();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    login.mutate(data);
  };

  return (
    <AuthFormContainer
      title="Login to your account"
      link={AppRoute.Signup}
      linkText="Don't have an account? Sign up"
      error={getErrorMessages(login.error)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <div className="space-y-2 mb-10">
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
          <Button type="submit" loading={login.isLoading} className="w-full">
            Login
          </Button>
          <Link
            to={AppRoute.ForgotPassword}
            className="absolute right-0 bottom-14 text-sm text-slate-500"
          >
            Forgot password?
          </Link>
        </form>
      </Form>
    </AuthFormContainer>
  );
};

export default Login;
