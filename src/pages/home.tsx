import useLogout from '@/hooks/users/use-logout';
import { checkAuthenticated } from '@/lib/user';
import { AppRoute } from '@/router/constant';
import { Link } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = checkAuthenticated();
  const { logout } = useLogout();

  return (
    <div className="space-x-6">
      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <Link to={AppRoute.DashboardUserProfile}>Dashboard User Profile</Link>
        </>
      ) : (
        <>
          <Link to={AppRoute.Signup}>Signup</Link>
          <Link to={AppRoute.Login}>Login</Link>
        </>
      )}
    </div>
  );
};

export default Home;
