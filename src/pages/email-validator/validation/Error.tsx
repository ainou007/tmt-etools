import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

type TErrorItemProps = { title: string; message: string };
const ErrorItem = ({ title, message }: TErrorItemProps) => {
  return (
    <Alert variant='destructive' className='h-full'>
      <ShieldAlert className='size-5 mt-1' />
      <AlertTitle className='text-xl mb-1.5'> {title} </AlertTitle>
      <AlertDescription className='text-base '>
        <div
          className='Container'
          dangerouslySetInnerHTML={{
            __html: message,
          }}></div>{' '}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorItem;
