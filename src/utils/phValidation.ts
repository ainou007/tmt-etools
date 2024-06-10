import { trimAll } from './trimAll';
import { TEmailError } from '@/hooks/useEmailValidation';

export const phValidation = (email: string, type: string) => {
  const error: TEmailError = {
    title: 'PH',
    message: '',
  };
  //

  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(email, 'text/html');

  const title = trimAll(parsedDocument.title).toLowerCase();
  // const firstSpan = parsedDocument.getElementsByTagName('span');

  const ph = trimAll(parsedDocument.getElementsByTagName('span')[0].innerText).toLowerCase();

  // SQL: Le PH doit etre "PH"

  if (type === 'sql') {
    if (ph === '' || title === '') {
      error.message += 'The <b>Title</b> or <b>ph section</b> is <b>empty</b> must be equal <b>"PH"</b>';
      return error;
    }
    if (ph !== 'ph' || title !== 'ph') {
      error.message += 'The <b>Title</b> or <b>ph section</b>  must be equal <b>"PH"</b>';
      return error;
    }
    return null;
  } else {
    if (ph === '' || title === '') {
      error.message += 'The <b>Title</b> or <b>ph section</b> is <b>empty</b> </b>';
      return error;
    }
    if (ph == 'ph' || title == 'ph') {
      error.message += 'The <b>Title</b> or <b>PH Section</b> must be different from <b>"PH"</b>';

      return error;
    }

    if (ph !== title) {
      error.message += 'The <b>Title</b> must be equal to the <b>PH Section</b>.';
      return error;
    }

    return null;
  }
};
