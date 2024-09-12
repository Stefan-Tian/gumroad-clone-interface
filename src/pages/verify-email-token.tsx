import AuthFormContainer from '@/components/custom/auth-form-container';
import { getErrorMessages } from '@/lib/utils';
import { useVerifyEmailToken } from '@/services/users/hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VerifyEmailToken = () => {
  const verifyEmailToken = useVerifyEmailToken();
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      verifyEmailToken.mutate(token);
    }
  }, [token]);

  return (
    <AuthFormContainer
      title="Verify Email Token"
      error={getErrorMessages(verifyEmailToken.error)}
    >
      {verifyEmailToken.isLoading ? (
        <div className="text-slate-500">Loading...</div>
      ) : verifyEmailToken.isSuccess ? (
        <div className="text-gray-600">{verifyEmailToken.data?.message}</div>
      ) : (
        <div className="text-red-500">Something went wrong</div>
      )}
    </AuthFormContainer>
  );
};

export default VerifyEmailToken;
