import { useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { items } from './contant';
import SidebarBody from './sidebar-body';
import SidebarLink from './sidebar-link';
import SidebarProvider from './sidebar-provider';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate>
      <SidebarBody className="justify-between gap-10">
        <div className="mt-8 flex flex-col gap-6">
          {items.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
        <div>
          <SidebarLink
            link={{
              label: 'Manu Arora',
              path: '#',
              icon: (
                <MdPerson className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </SidebarProvider>
  );
};

export default Sidebar;
