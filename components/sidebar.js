import { useSession } from 'next-auth/client';
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon } from '@heroicons/react/solid';
import SidebarRow from './sidebarRow';

function Sidebar() {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={UserIcon} title="Friends"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups"/>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketlace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Events"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  )
}

export default Sidebar
