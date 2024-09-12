import { cn } from '@/lib/utils';
import { useCurrentUser } from '@/services/user/hooks';
import { User } from '@/services/user/types';
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
        'rounded-md flex flex-col md:flex-row bg-white w-full flex-1 mx-auto overflow-hidden border border-slate-200',
        'h-screen'
      )}
    >
      <Sidebar />
      <div className="flex flex-1 pt-12 justify-center mx-auto max-w-screen-lg md:px-6 px-4">
        <Outlet context={{ user }} />
      </div>
    </div>
  );
};

export default Dashboard;
