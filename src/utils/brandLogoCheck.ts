import { TEmailError } from '@/hooks/useEmailValidation';
import { isFrance } from './isFrance';

export const brandLogoCheck = (codeSource: string, lang: string, brand: string) => {
  const okfr = 'http://t.nl.okaidi.com/res/img/FCCC536464FD483E692D0F594F8BC119.png';
  const ok = 'http://t.nl.okaidi.com/res/img/F261F16E4DBB792EFD8CDE05D5C2CE5D.png';
  const obfr = 'http://t.nl.okaidi.com/res/img/97B4AD920446413D97A33455951F7791.png';
  const ob = 'http://t.nl.okaidi.com/res/img/FBE71AF62386030511435AE9579DDBCC.png';

  const error: TEmailError = {
    title: 'Brand Logo',
    message: '',
  };

  if (brand === 'ok') {
    // frFR pour les emails de france, fr pour les sql  de france
    if (isFrance(lang)) {
      if (codeSource.includes(ob) || codeSource.includes(obfr) || codeSource.includes(ok)) {
        error.message += '<p> Must use <b>Ok</b> Logo with <b>*</b> </p>';
      }
    } else {
      if (codeSource.includes(ob) || codeSource.includes(obfr) || codeSource.includes(okfr)) {
        error.message += '<p> Must use <b>Ok</b> Logo without <b>*</b> </p>';
      }
    }
  }

  if (brand === 'ob') {
    if (isFrance(lang)) {
      if (codeSource.includes(ok) || codeSource.includes(okfr) || codeSource.includes(ob)) {
        error.message += '<p> Must use <b>OB</b> Logo with <b>*</b> </p>';
      }
    } else {
      if (codeSource.includes(ok) || codeSource.includes(okfr) || codeSource.includes(obfr)) {
        error.message += '<p> Must use <b>OB</b> Logo without <b>*</b> </p>';
      }
    }
  }

  if (error.message === '') {
    return null;
  }
  return error;
};
