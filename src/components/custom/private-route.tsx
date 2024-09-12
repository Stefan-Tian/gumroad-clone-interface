import { checkAuthenticated } from '@/lib/user';
import { AppRoute } from '@/router/constant';
import { useCurrentUser } from '@/services/user/hooks';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = checkAuthenticated();
  const { user, isLoading } = useCurrentUser();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.warn(user);
  if (!user?.emailVerified && location.pathname !== AppRoute.VerifyEmail) {
    return <Navigate to={AppRoute.VerifyEmail} />;
  }

  return element;
};

export default PrivateRoute;
