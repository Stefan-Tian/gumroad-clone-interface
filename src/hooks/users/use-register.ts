import { AppRoute } from '@/router/constant';
import usersService from '@/services/users';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: usersService.register,
    onSuccess: (response) => {
      localStorage.setItem('token', response.jwt);
      navigate(AppRoute.VerifyEmail);
    },
  });

  return register;
};

export default useRegister;
