import { TEmailError } from '@/hooks/useEmailValidation';
import { isFrance } from './isFrance';

export const checkCondition = (codeSource: string, lang: string, brand: string) => {
  const conditionOK = '*Oka&iuml;di la bonne id&eacute;e, la bonne identit&eacute;.';
  const conditionOB = "*Oba&iuml;bi, la plus belle id&eacute;e d'amour.";
  const error: TEmailError = {
    title: 'Condition',
    message: '',
  };

  if (isFrance(lang)) {
    if (brand === 'ok') {
      if (!codeSource.includes(conditionOK)) {
        error.message += `<p>Condition <b>"${conditionOK}"</b> is missing </p>`;
      }
    } else {
      if (!codeSource.includes(conditionOB)) {
        error.message += `<p>Condition <b>"${conditionOB}"</b> is missing </p>`;
      }
    }
  } else {
    if (brand === 'ok') {
      if (codeSource.includes(conditionOK)) {
        error.message += `<p> Please remove <b>"${conditionOK}"</b> </p>`;
      }
    } else {
      if (codeSource.includes(conditionOB)) {
        error.message += `<p> Please remove  <b>"${conditionOB}"</b> </p>`;
      }
    }
  }

  if (error.message === '') {
    return null;
  }

  return error;
};
