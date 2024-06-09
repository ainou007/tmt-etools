import Header from '@/components/header/Header';
import { CaseSensitive, RotateCcw } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';
import Output from '@/components/output/Output';

const TextTransform = () => {
  const [text, setText] = useState('');

  const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  const clearText = () => {
    if (text === '') return;
    setText('');
    toast('Text Cleard !', {
      duration: 1000,
    });
  };

  return (
    <>
      <Header title='Text Transform' icon={CaseSensitive} />
      <div className='space-y-3'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'>
            <Textarea value={text} onChange={changeTextHandler} className='resize-none' rows={15} placeholder='Text To Transform' />
          </div>
          <div className='col-span-6  flex flex-col gap-y-3 items-stretch'>
            <Output label='Uppercase' output={text.toUpperCase()} />
            <Output label='Lowercase' output={text.toLowerCase()} />
          </div>
        </div>
        <Button onClick={clearText}>
          <RotateCcw className='mb- size-3' /> Clear
        </Button>
      </div>
    </>
  );
};

export default TextTransform;
