import { TEmailError } from '@/hooks/useEmailValidation';

export const hostedImages = (emailCodeSource: string) => {
  const error: TEmailError = { title: 'Hosted Images', message: '' };
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(emailCodeSource, 'text/html');

  const images = Array.from(parsedDocument.getElementsByTagName('img'));
  const srcList = images.map((image) => image.src);

  console.log(srcList);

  let incorrectSrc = srcList.find(
    (s) => (!s.startsWith('http://t.nl.okaidi.com/') && !s.startsWith('https://t.nl.okaidi.com/') && !s.startsWith('https://ntf.nl.okaidi.com/')) || s === null
  );
  console.log(incorrectSrc);

  if (incorrectSrc) {
    error.message = `<p>Found a local image </p>`;
  }

  if (error.message) {
    return error;
  }
  return null;
};
