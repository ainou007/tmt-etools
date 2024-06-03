import { TEmailError } from '@/hooks/useEmailValidation';
import { trimAll } from './trimAll';

export const checkIncludes = (emailCodeSource: string, lang: string) => {
  const error: TEmailError = {
    title: 'Includes',
    message: '',
  };
  const condiLangs = ['frFR', 'frBE', 'nlBE', 'siSI', 'esES', 'fr'];

  const condiSetting = `<% if ( recipient.idEntiteJuridique == "IDK" ){%>
    <%@ include view='idgSettingIDK' %>
    <%} else{%>
    <%@ include view='idgSettingOKA' %>
    <%}%>`;
  //   const setting = '';

  const condiMirorPage = `<% if ( recipient.idEntiteJuridique == "IDK" ){%>
    <% if ( document.mode != 'mirror' && document.mode != 'forward' ) { %>
    <a href="<%@ include view='MirrorPageUrl' %>" _label="Page miroir" _type="mirrorPage" style="color:#969696;"> <%=LanguesDatas[CodeLangue].MirrorPageTxt %> </a>
    <% } %>
    <%} else{%>
    <%@ include view='idgMirrorUnsubOKA' %>
    <%}%>`;
  //   const mirorPage = '';

  const condiMl = `<% if ( recipient.idEntiteJuridique == "IDK" ){%>
    <%@ include view='idgCNILIDK1'%>
    <%} else{%>
    <%@ include view='idgMentionsLegalesOKA' %>
    <%}%>`;
  //   const ml = '';

  if (condiLangs.includes(lang)) {
    if (
      !trimAll(emailCodeSource).includes(trimAll(condiSetting)) ||
      !trimAll(emailCodeSource).includes(trimAll(condiMirorPage)) ||
      !trimAll(emailCodeSource).includes(trimAll(condiMl))
    ) {
      error.message += `<p>Please check the <b>conditions</b></p>`;
    }
  } else {
    if (
      trimAll(emailCodeSource).includes(trimAll(condiSetting)) ||
      trimAll(emailCodeSource).includes(trimAll(condiMirorPage)) ||
      trimAll(emailCodeSource).includes(trimAll(condiMl))
    ) {
      error.message += `<p>Please check the <b>conditions</b></p>`;
    }
  }

  if (error.message === '') {
    return null;
  }

  return error;
};
