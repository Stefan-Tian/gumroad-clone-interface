import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { useSidebar } from './sidebar-provider';

const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        'h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-primary w-full',
        className
      )}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <MdMenu className="text-neutral-200" onClick={() => setOpen(!open)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn(
              'fixed h-full w-full inset-0 bg-slate-200 p-10 z-[100] flex flex-col justify-between',
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-100"
              onClick={() => setOpen(!open)}
            >
              <MdClose />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSidebar;
