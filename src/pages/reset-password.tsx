import AuthFormContainer from '@/components/custom/auth-form-container';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { getErrorMessages } from '@/lib/utils';
import { AppRoute } from '@/router/constant';
import {
  useResetPassword,
  useVerifyResetPasswordToken,
} from '@/services/password-resets/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';

const schema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type ResetPasswordData = z.infer<typeof schema>;

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const form = useForm<ResetPasswordData>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const verifyResetPasswordToken = useVerifyResetPasswordToken();
  const resetPassword = useResetPassword();

  useEffect(() => {
    if (token) {
      verifyResetPasswordToken.mutate({ token });
    } else {
      navigate(AppRoute.Home);
    }
  }, [token]);

  const onSubmit: SubmitHandler<ResetPasswordData> = (data) => {
    if (!token) return;
    resetPassword.mutate({ token, password: data.password });
  };

  if (token && verifyResetPasswordToken.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <AuthFormContainer
      title="Reset Password"
      error={
        getErrorMessages(verifyResetPasswordToken.error) ||
        getErrorMessages(resetPassword.error)
      }
    >
      {resetPassword.isSuccess ? (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          {resetPassword.data?.message}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <TextField label="Password" {...field} />
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <TextField label="Confirm Password" {...field} />
                )}
              />
            </div>
            <Button
              type="submit"
              className="mt-8 w-full"
              disabled={resetPassword.isLoading}
              loading={resetPassword.isLoading}
            >
              Reset Password
            </Button>
          </form>
        </Form>
      )}
    </AuthFormContainer>
  );
};

export default ResetPassword;
