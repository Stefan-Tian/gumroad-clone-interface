import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
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
  return (
    <Link
      to={link.path}
      className={cn(
        'flex items-center justify-start gap-4 group/sidebar py-2',
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
        className="text-neutral-100 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

export default SidebarLink;
