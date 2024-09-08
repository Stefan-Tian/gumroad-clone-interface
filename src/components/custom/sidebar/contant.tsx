import { MdHome, MdInventory2 } from 'react-icons/md';

export const items = [
  {
    label: 'Home',
    icon: <MdHome className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
    path: '/',
  },
  {
    label: 'Products',
    icon: <MdInventory2 className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
    path: '/products',
  },
];
