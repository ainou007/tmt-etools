import { listOfChecks } from '@/constants/checks';
import { MailCheck } from 'lucide-react';
import Check from './Check';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutValidator = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='container text-center text-muted-foreground flex items-center justify-center flex-col mt-8'>
        <MailCheck size={50} />
        <p className='text-2xl  font-semibold mb-3'>Email Validator</p>
        <p className='max-w-2xl mx-auto '>
          The Email Source Code Validator is a comprehensive tool designed to ensure the integrity, compliance, and quality of email source code. By validating email code against a
          specified list of standards,
        </p>
        <div className='grid grid-cols-3 gap-6 mt-5 w-full'>
          {listOfChecks.map((check, index) => (
            <Check key={index} title={check.title} description={check.description} />
          ))}
        </div>
        <Link to={'/email-validator'} className={cn(buttonVariants({ variant: 'outline' }), 'mt-5')}>
          New Check
        </Link>
      </div>
    </div>
  );
};

export default AboutValidator;
