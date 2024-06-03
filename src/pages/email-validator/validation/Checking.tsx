import { LoaderCircle } from 'lucide-react';

const Checking = () => {
  return (
    <div className='flex items-center justify-center mt-36 flex-col gap-3'>
      <LoaderCircle size={35} className='animate-spin' />
      <h2 className='text-xl text-muted-foreground select-none'>Validation in progresse please wait ....</h2>
    </div>
  );
};

export default Checking;
