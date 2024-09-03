import { checkAuthenticated } from '@/lib/user';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = checkAuthenticated();
  return !isAuthenticated ? element : <Navigate to="/" />;
};

export default PublicRoute;
