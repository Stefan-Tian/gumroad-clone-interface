import usersService from '@/services/users';
import { useMutation } from 'react-query';

const useVerifyEmailToken = () => {
  const verifyEmailToken = useMutation((token: string) =>
    usersService.verifyEmail(token)
  );

  return verifyEmailToken;
};

export default useVerifyEmailToken;
