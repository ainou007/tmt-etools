import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';

const ValidEmail = ({ editSettings }: { editSettings: () => void }) => {
  return (
    <div className='flex gap-1 flex-col items-center justify-center text-green-700 text-center mt-36 '>
      <MailCheck size={35} />
      <p className='font-semibold'>Email is valid</p>
      <p className='max-w-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button onClick={editSettings}>New Test</Button>
    </div>
  );
};

export default ValidEmail;
