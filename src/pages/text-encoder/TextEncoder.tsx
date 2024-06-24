import Header from '@/components/header/Header';
import { Binary, RotateCcw } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ChangeEvent, useEffect, useState } from 'react';
import { Char, characters } from '@/constants/chars';
import { toHex } from '@/lib/utils';
import { toast } from 'sonner';
import Output from '@/components/output/Output';
import { useCopyToClipboard } from '@uidotdev/usehooks';

const TextEncoder = () => {
  const [text, setText] = useState('');
  const [, copyToClipboard] = useCopyToClipboard();

  const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  useEffect(() => {
    copyToClipboard(convertText());
  }, [text]);

  const clearText = () => {
    if (text === '') return;
    setText('');
    toast('Text Cleard !', {
      duration: 1000,
    });
  };

  const convertText = (): string => {
    const textArray = text.split('');
    let newArr = textArray
      .map((char: string) => {
        return characters.find((item: Char) => item.name === toHex(char))?.code || char;
      })
      .join('');
    return newArr;
  };

  return (
    <>
      <Header title='Text Encoder' icon={Binary} />
      <div className='space-y-3'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'>
            <Textarea value={text} onChange={changeTextHandler} className='resize-none' rows={15} placeholder='Text To Encod' />
          </div>
          <div className='col-span-6  flex flex-col gap-y-3 items-stretch'>
            <Output label='Coded Text' output={convertText()} />
          </div>
        </div>
        <Button onClick={clearText}>
          <RotateCcw className='mb- size-3' /> Clear
        </Button>
      </div>
    </>
  );
};

export default TextEncoder;
