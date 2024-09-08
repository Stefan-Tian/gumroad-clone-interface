import useCurrentUser from '@/hooks/users/user-current-user';
import { cn } from '@/lib/utils';
import { User } from '@/services/users/types';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

export interface DashboardContextType {
  user: User | null;
}

const Dashboard = () => {
  const { user } = useCurrentUser();

  return (
    <div
      className={cn(
        'rounded-md flex flex-col md:flex-row bg-neutral-800 w-full flex-1 max-w-7xl mx-auto overflow-hidden border border-neutral-700',
        'h-screen'
      )}
    >
      <Sidebar />
      <div className="flex flex-1">
        <Outlet context={{ user }} />
      </div>
    </div>
  );
};

export default Dashboard;
