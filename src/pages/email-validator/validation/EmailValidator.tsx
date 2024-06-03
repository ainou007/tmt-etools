import { Button } from '@/components/ui/button';
import { Eraser, MailCheck } from 'lucide-react';
import { useState } from 'react';
import Checking from './Checking';
import ValidEmail from './ValidEmail';
import ErrorsList from './ErrorsList';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormSchema } from './settingsFormSchema';
import { emailTypes } from '@/constants/emailTypes';
import useEmailValidation from '@/hooks/useEmailValidation';
import { isEmailValid } from './isEmailValid';
import Header from '@/components/header/Header';
import { Link } from 'react-router-dom';
import TextArea from '@/components/form/TextArea';
import RadioButtonGroup from '@/components/form/RadioButtonGroup';
import SelectBox from '@/components/form/SelectBox';

const EmailValidator = () => {
  const [isCheckStart, setIsCheckStart] = useState(false);
  const { isLoading, errors, check } = useEmailValidation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code_source: '',
      type: 'montage_full',
      lang: 'frFR',
      brand: 'ok',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setIsCheckStart(true);
    check(data.code_source, data.type, data.lang, data.brand);
  };
  const clicked = () => {
    // console.log(form.getValues());
  };

  const onTypeChange = () => {
    form.setValue('lang', '');
  };

  //
  const resetSettings = () => {
    setIsCheckStart(false);
    form.reset();
  };
  const editSettings = () => {
    setIsCheckStart(false);
    // form.reset();
  };

  const redner = () => {
    if (isCheckStart) {
      if (isLoading) {
        return <Checking />;
      } else {
        if (isEmailValid(errors)) {
          return <ValidEmail editSettings={editSettings} />;
        } else {
          return <ErrorsList editSettings={editSettings} errors={errors} />;
        }
      }
    } else {
      return (
        <div className='space-y-3'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <TextArea name='code_source' placeholder='Code source' formControl={form.control} label='Enter Code Source' />
              <RadioButtonGroup name='type' formControl={form.control} label='Email Type' onTypeChange={onTypeChange} inputs={['sql', 'montage full']} />
              <RadioButtonGroup name='brand' formControl={form.control} label='Email Brand<' inputs={['ok', 'ob']} />
              <SelectBox
                data={form.getValues('type') === 'sql' ? emailTypes.sqls : emailTypes.langs}
                formControl={form.control}
                label='Email Lang'
                name='lang'
                placeholder={form.getValues('type') === 'sql' ? 'Slelect SQL Lang' : 'Slelect Email Lang'}
              />

              <div className='flex gap-2'>
                <Button onClick={clicked} type='submit'>
                  <MailCheck className='mb- size-3' /> Start Validation
                </Button>
                <Button variant={'outline'} onClick={resetSettings}>
                  <Eraser className='mb- size-3' /> Clear Settings
                </Button>
              </div>
            </form>
          </Form>
        </div>
      );
    }
  };

  return (
    <>
      <Header title='Email Validator' icon={MailCheck}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti nemo mollitia vitae eos,{' '}
        <Link className='font-semibold' to={'about'}>
          about ...
        </Link>
      </Header>
      <div className='space-y-3 '>{redner()}</div>{' '}
    </>
  );
};

export default EmailValidator;
