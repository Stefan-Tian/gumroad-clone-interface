import Dashboard from '@/components/custom/layout/dashboard';
import PrivateRoute from '@/components/custom/private-route';
import DashboardNewProduct from '@/pages/dashboard/new-product';
import DashboardUserProfile from '@/pages/dashboard/user-profile';
import ForgotPassword from '@/pages/forgot-password';
import Home from '@/pages/home';
import Login from '@/pages/login';
import ResetPassword from '@/pages/reset-password';
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
    path: AppRoute.Dashboard,
    element: <Dashboard />,
    children: [
      {
        path: AppRoute.DashboardUserProfile,
        element: <PrivateRoute element={<DashboardUserProfile />} />,
      },
      {
        path: AppRoute.DashboardNewProduct,
        element: <PrivateRoute element={<DashboardNewProduct />} />,
      },
    ],
  },
]);

export default browserRouter;
