import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, LinkProps, matchPath, useLocation } from 'react-router-dom';
import { useSidebar } from './sidebar-provider';

interface Links {
  label: string;
  path: string;
  icon: React.JSX.Element | React.ReactNode;
}

const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  const location = useLocation();
  const isActive = matchPath({ path: link.path, end: true }, location.pathname);

  return (
    <Link
      to={link.path}
      className={cn(
        'flex items-center justify-start gap-4 group/sidebar text-slate-600 rounded-md px-3 py-3 mx-2',
        isActive ? 'bg-slate-700 text-white' : '',
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn(
          'text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0',
          isActive ? 'text-white' : 'text-slate-700'
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

export default SidebarLink;
