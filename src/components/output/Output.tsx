import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { memo } from 'react';
import useOutput from './useOutput';

type TOutputProps = {
  output: string;
  label: string;
};

const Output = memo(({ output, label }: TOutputProps) => {
  const { isCopied, copyTextHandler } = useOutput(output);
  return (
    <div className='h-full relative' onClick={copyTextHandler}>
      <Button onClick={copyTextHandler} className='absolute right-1 top-1 z-50 text-xs' variant={'outline'} size={'xs'}>
        {isCopied ? (
          <>
            <Check className='size-3' /> Copied
          </>
        ) : (
          <>
            <Copy className='size-3' /> Copy
          </>
        )}
      </Button>
      <Alert className='h-full'>
        <AlertTitle className='select-none mb-2 text-primary'> {label} </AlertTitle>
        <AlertDescription className='font-semibold mt-5 '>{output}</AlertDescription>
      </Alert>
    </div>
  );
});

export default Output;
