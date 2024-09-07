import PrivateRoute from '@/components/custom/private-route';
import ForgotPassword from '@/pages/forgot-password';
import Home from '@/pages/home';
import Login from '@/pages/login';
import ResetPassword from '@/pages/reset-password';
import SettingsUserProfile from '@/pages/settings/user-profile';
import Signup from '@/pages/signup';
import VerifyEmail from '@/pages/verify-email';
import VerifyEmailToken from '@/pages/verify-email-token';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoute } from './constant';

const browserRouter = createBrowserRouter([
  {
    path: AppRoute.Home,
    element: <Home />,
  },
  {
    path: AppRoute.Signup,
    element: <Signup />,
  },
  {
    path: AppRoute.Login,
    element: <Login />,
  },
  {
    path: AppRoute.ForgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: AppRoute.ResetPassword,
    element: <ResetPassword />,
  },
  {
    path: AppRoute.VerifyEmail,
    element: <PrivateRoute element={<VerifyEmail />} />,
  },
  {
    path: AppRoute.VerifyEmailToken,
    element: <VerifyEmailToken />,
  },
  {
    path: AppRoute.SettingsUserProfile,
    element: <PrivateRoute element={<SettingsUserProfile />} />,
  },
]);

export default browserRouter;
