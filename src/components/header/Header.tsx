import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type THeaderProps = {
  title: string;
  children: ReactNode;
  icon: LucideIcon;
};
const Header = ({ title, icon: Icon, children }: THeaderProps) => {
  return (
    <div className='shadow-custom rounded-lg mb-5 min-h-28 overflow-hidden  flex '>
      <div className='bg-primary w-16 text-white p-5 flex items-center justify-center'>
        <Icon size={30} />
      </div>
      <div className='p-3'>
        <h2 className='text-2xl font-semibold text-gray-600'>{title}</h2>
        <p className='text-muted-foreground text-sm '>{children}</p>
      </div>
      {/* <div className='flex items-center gap-3 mb-3'>
        <div className='size-10 rounded-lg bg-slate-100 flex items-center justify-center'>
          <Icon size={22} />
        </div>
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <div className='text-muted-foreground'>{children}</div> */}
    </div>
  );
};

export default Header;
