import { TEmailError } from '@/hooks/useEmailValidation';
import ErrorItem from './Error';
import { Button } from '@/components/ui/button';
type TErrorsListProps = {
  errors: (TEmailError | null)[];
  editSettings: () => void;
};
const ErrorsList = ({ errors, editSettings }: TErrorsListProps) => {
  return (
    <div>
      <div className='grid gap-2 grid-cols-3'>
        {errors.map((error, index) => {
          if (error) return <ErrorItem title={error.title} message={error.message} key={index} />;
        })}
      </div>
      <Button className='mt-3' onClick={editSettings}>
        New Test
      </Button>
    </div>
  );
};

export default ErrorsList;
