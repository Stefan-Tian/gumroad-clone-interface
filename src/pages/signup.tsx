import AuthFormContainer from '@/components/custom/auth-form-container';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { AppRoute } from '@/router/constant';
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
  });

  const onSubmit: SubmitHandler<SignupData> = (data) => {
    console.log(data);
  };

  return (
    <AuthFormContainer
      title="Signup for an account"
      link={AppRoute.Login}
      linkText="Already have an account? Login"
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

export default Signup;
