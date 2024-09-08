import AuthFormContainer from '@/components/custom/auth-form-container';
import { Button } from '@/components/ui/button';
import { useResendEmailVerification } from '@/services/users/hooks';
import { useEffect } from 'react';

const VerifyEmail = () => {
  const { resendEmailVerification, countdown } = useResendEmailVerification();

  useEffect(() => {
    resendEmailVerification.mutate();
  }, []);

  return (
    <AuthFormContainer title="Verify your email">
      <p className="text-md text-gray-500 mb-6">
        Please check your email for a verification link.
      </p>
      <Button
        disabled={countdown !== 0}
        onClick={() => resendEmailVerification.mutate()}
      >
        Resend email {countdown > 0 && <>{countdown}s</>}
      </Button>
    </AuthFormContainer>
  );
};

export default VerifyEmail;
