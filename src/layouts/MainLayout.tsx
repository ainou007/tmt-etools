import Aside from '@/components/aside/Aside';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronsRight } from 'lucide-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isFullAside, setIsFullAside] = useState(false);
  const toggleAside = () => {
    setIsFullAside(!isFullAside);
  };
  return (
    <>
      <div className='flex h-screen'>
        <aside className={`relative ${isFullAside ? 'w-[220px]' : 'w-[60px]'} `}>
          <button onClick={toggleAside} className='border-r bg-white size-6 flex items-center justify-center z-10 absolute -right-3 top-2   rounded-full'>
            <ChevronsRight size={18} className={`transition-all ease-in-out duration-500  rounded-full  ${isFullAside ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          <Aside isFullAside={isFullAside} />
        </aside>
        <main className={`${isFullAside ? 'w-[calc(100%-220px)]' : 'w-[calc(100%-60px)]'} h-screen max-h-screen`}>
          <ScrollArea className='h-screen'>
            <div className='p-5 h-full'>
              <Outlet />
            </div>
          </ScrollArea>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
