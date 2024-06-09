import { Settings } from 'lucide-react';
import Logo from '../Logo';
import navLinks from '@/constants/navLink';
import { Separator } from '../ui/separator';
import AsideLink from './AsideLink';
import SecondLogo from '../SecondLogo';

type TAsideProps = {
  isFullAside: boolean;
};

const Aside = ({ isFullAside }: TAsideProps) => {
  return (
    <div className='border-r'>
      <div className='h-16 flex items-center justify-center'>{isFullAside ? <Logo /> : <SecondLogo />}</div>
      <Separator />
      <div className='h-[calc(100vh-65px)] flex flex-col justify-between p-2 '>
        <div className='flex flex-col gap-2'>
          <ul className='flex gap-1 flex-col'>
            {navLinks.map((navLink, index) => {
              return <AsideLink key={index} isFullAside={isFullAside} {...navLink} />;
            })}
            <li></li>
          </ul>
        </div>
        {/* <AsideLink isFullAside={isFullAside} label='Settings' route='settings' icon={Settings} /> */}
      </div>
    </div>
  );
};

export default Aside;
