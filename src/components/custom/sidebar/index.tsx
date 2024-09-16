import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserProfile } from '@/services/user-profile/hooks';
import { useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { items } from './contant';
import SidebarBody from './sidebar-body';
import SidebarLink from './sidebar-link';
import SidebarProvider from './sidebar-provider';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { data } = useUserProfile();
  const avatarUrl = data?.avatarUrl;

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
            className="px-0 items-center"
            link={{
              label: 'Manu Arora',
              path: '#',
              icon: (
                <Avatar className="translate-x-[2px]">
                  <AvatarImage src={avatarUrl} />
                  <AvatarFallback>
                    <div className="flex items-center justify-center bg-slate-600 text-white">
                      <MdPerson />
                    </div>
                  </AvatarFallback>
                </Avatar>
              ),
            }}
          />
        </div>
      </SidebarBody>
    </SidebarProvider>
  );
};

export default Sidebar;
