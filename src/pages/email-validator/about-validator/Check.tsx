import { Check as CheckIcon } from 'lucide-react';

const Check = ({ title, description }: { title: string; description: { label: string; description: string }[] }) => {
  return (
    <div className='shadow-custom p-5 rounded-md text-left'>
      <p className='font-semibold text-primary text-lg mb-2'>{title}</p>

      <ul className="className='text-muted-foreground '">
        {description.map((item, index) => {
          return (
            <li className='text-sm mb-5 flex items-start gap-2 ' key={index}>
              <div className='w-5'>
                <CheckIcon size={20} />
              </div>
              <p>
                <b>{item.label} : </b> {item.description}
              </p>
            </li>
          );
        })}{' '}
      </ul>
    </div>
  );
};

export default Check;
