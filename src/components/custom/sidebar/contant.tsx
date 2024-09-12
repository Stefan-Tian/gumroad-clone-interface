import { AppRoute } from '@/router/constant';
import { FaArchive, FaHome } from 'react-icons/fa';

export const items = [
  {
    label: 'Home',
    icon: <FaHome className="h-5 w-5 flex-shrink-0" />,
    path: '/',
  },
  {
    label: 'Products',
    icon: <FaArchive className="h-5 w-5 flex-shrink-0" />,
    path: AppRoute.DashboardNewProduct,
  },
];
