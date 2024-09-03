import PrivateRoute from '@/components/custom/private-route';
import PublicRoute from '@/components/custom/public-route';
import ForgotPassword from '@/pages/forgot-password';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import VerifyEmail from '@/pages/verify-email';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoute } from './constant';

const browserRouter = createBrowserRouter([
  {
    path: AppRoute.Home,
    element: <Home />,
  },
  {
    path: AppRoute.Signup,
    element: <PublicRoute element={<Signup />} />,
  },
  {
    path: AppRoute.Login,
    element: <PublicRoute element={<Login />} />,
  },
  {
    path: AppRoute.ForgotPassword,
    element: <PublicRoute element={<ForgotPassword />} />,
  },
  {
    path: AppRoute.VerifyEmail,
    element: <PrivateRoute element={<VerifyEmail />} />,
  },
]);

export default browserRouter;
