import Signup from '@/pages/signup';
import { createBrowserRouter, Link } from 'react-router-dom';
import { AppRoute } from './constant';

const browserRouter = createBrowserRouter([
  {
    path: AppRoute.Home,
    element: (
      <div>
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
    element: <div>login</div>,
  },
]);

export default browserRouter;
