import { DashboardContextType } from '@/components/custom/layout/dashboard';
import { useOutletContext } from 'react-router-dom';

const DashboardUserProfile = () => {
  const { user } = useOutletContext<DashboardContextType>();

  return <div className="text-white">Welcome, {user?.username}</div>;
};

export default DashboardUserProfile;
