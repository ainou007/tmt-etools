import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type THeaderProps = {
  title: string;
  children?: ReactNode;
  icon: LucideIcon;
};
const Header = ({ title, icon: Icon, children }: THeaderProps) => {
  return (
    <div className='shadow-custom rounded-lg mb-5 min-h-28 overflow-hidden flex relative '>
      <div className='bg-primary w-24 text-white p-5 flex items-center justify-center'>
        <Icon size={34} />
      </div>
      <div className='p-3 flex items-center '>
        <h2 className='text-2xl font-semibold text-gray-600'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Header;
