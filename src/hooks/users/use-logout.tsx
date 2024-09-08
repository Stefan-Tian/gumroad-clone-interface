import { AppRoute } from '@/router/constant';
import { userQueryKeys } from '@/services/users';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.invalidateQueries(userQueryKeys.getUser);
    navigate(AppRoute.Home);
  };

  return { logout };
};

export default useLogout;
