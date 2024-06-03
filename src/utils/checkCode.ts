import { TEmailError } from '@/hooks/useEmailValidation';

export const checkCode = (emailCodeSource: string) => {
  const code = `<img width="1" height="1" border="0" src="https://ntf.nl.okaidi.com/notifyMail/open.html?u=<%= targetData.uuid %>" alt="" />`;
  const codet = `&#x3C;img width=&#x22;1&#x22; height=&#x22;1&#x22; border=&#x22;0&#x22; src=&#x22;https://ntf.nl.okaidi.com/notifyMail/open.html?u=&#x3C;%= targetData.uuid %&#x3E;&#x22; alt=&#x22;&#x22; /&#x3E;`;

  const error: TEmailError = {
    title: 'Code',
    message: '',
  };

  if (emailCodeSource.includes(code)) {
    return null;
  }

  error.message = `<b>${codet}</b> is messing`;

  return error;
};
