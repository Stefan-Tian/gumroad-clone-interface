import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { useSidebar } from './sidebar-provider';

const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        'h-full py-4 hidden md:flex md:flex-col bg-white border-r-2 border-slate-100 w-[300px] flex-shrink-0',
        className
      )}
      animate={{
        width: animate ? (open ? '200px' : '62px') : '300px',
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default DesktopSidebar;
