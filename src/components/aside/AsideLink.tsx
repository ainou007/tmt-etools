import { cn } from '@/lib/utils';
import { TNavLink } from '@/types';
import { NavLink } from 'react-router-dom';

const AsideLink = ({ label, route, icon: Icon, isFullAside }: TNavLink & { isFullAside: boolean }) => {
  const className = ` text-sm flex gap-2 ${
    !isFullAside && 'items-center justify-center'
  } p-1.5 rounded-md font-light transition-all ease-in-out duration-300 hover:bg-primary hover:text-white hover:font-normal`;

  return (
    <NavLink to={route} className={({ isActive }) => (isActive ? cn(className + ' bg-primary text-primary-foreground font-normal') : cn(className))}>
      <Icon size={isFullAside ? 16 : 16} /> {isFullAside && label}
    </NavLink>
  );
};

export default AsideLink;
