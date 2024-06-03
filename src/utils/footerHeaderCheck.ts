import { TEmailError } from '@/hooks/useEmailValidation';

export const footerHeaderCheck = (email_code_source: string) => {
  const footer = "<%@ include view='idgFooterOK2023' %>";
  const header = "<%@ include view='idgHeaderLogoOKA2023' %>";

  const error: TEmailError = {
    title: 'Footer & Header',
    message: '',
  };

  if (!email_code_source.includes(footer)) {
    error.message += '<p><b>footer</b> is missing or not the right one</p>';
  }
  if (!email_code_source.includes(header)) {
    error.message += '<p><b>header</b> is missing or not the right one</p>';
  }

  if (error.message !== '') {
    return error;
  }

  return null;
};
