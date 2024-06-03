import { useCopyToClipboard } from '@uidotdev/usehooks';
import { useState } from 'react';
import { toast } from 'sonner';

const useOutput = (output: string) => {
  const timeOut = 1000;
  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  let timer: ReturnType<typeof setTimeout> = setTimeout(() => {});

  const copyTextHandler = () => {
    clearTimeout(timer);
    if (output === '') return;
    copyToClipboard(output);
    setIsCopied(true);
    toast('Text Copied', {
      duration: timeOut,
    });

    timer = setTimeout(() => {
      setIsCopied(false);
    }, timeOut);
  };

  return { isCopied, copyTextHandler };
};

export default useOutput;
