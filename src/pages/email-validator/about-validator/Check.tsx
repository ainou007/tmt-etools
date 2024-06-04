import { Check as CheckIcon } from 'lucide-react';

const Check = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className='shadow-custom p-5 rounded-md text-left'>
      <p className='font-semibold text-primary text-lg mb-2 flex items-center gap-2'>
        {' '}
        <CheckIcon size={20} />
        {title}
      </p>

      <p>{description}</p>
    </div>
  );
};

export default Check;
