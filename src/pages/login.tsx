import AuthFormContainer from '@/components/custom/auth-form-container';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { AppRoute } from '@/router/constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
  };

  return (
    <AuthFormContainer
      title="Login to your account"
      link={AppRoute.Signup}
      linkText="Don't have an account? Sign up"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="gap-4 mb-8">
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
        </form>
      </Form>
    </AuthFormContainer>
  );
};

export default Login;
