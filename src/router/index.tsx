import Login from '@/pages/login';
import Signup from '@/pages/signup';
import { createBrowserRouter, Link } from 'react-router-dom';
import { AppRoute } from './constant';

const browserRouter = createBrowserRouter([
  {
    path: AppRoute.Home,
    element: (
      <div className="space-x-6">
        <Link to={AppRoute.Signup}>Signup</Link>
        <Link to={AppRoute.Login}>Login</Link>
      </div>
    ),
  },
  {
    path: AppRoute.Signup,
    element: <Signup />,
  },
  {
    path: AppRoute.Login,
    element: <Login />,
  },
]);

export default browserRouter;
