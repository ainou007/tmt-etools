import { TEmailError } from '@/hooks/useEmailValidation';
import { trimAll } from './trimAll';
import { Tlang, emailTypes } from '@/constants/emailTypes';

export const checkLinks = (emailCodeSource: string, lang: string, type: string) => {
  const error: TEmailError = { title: 'Links', message: '' };

  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(emailCodeSource, 'text/html');

  // Obtenir la list des balise "a" except qu'a l`attribute "_type"
  const links = Array.from(parsedDocument.getElementsByTagName('a')).filter((link) => link.getAttribute('_type') === null);

  const hrefs = links.map((link) => link.getAttribute('href'));
  const targets = links.map((link) => link.getAttribute('target'));

  if (targets.includes(null)) {
    error.message += `<p>Found a link messing  a <b>target</b> attribute</p>`;
  }
  if (targets.includes('')) {
    error.message += `<p>Found a link messing  a <b>target value</b>, please add <b>"_blank"</b> </p>`;
  }

  targets.forEach((target) => {
    if (target && trimAll(target) !== '_blank' && trimAll(target) !== '') {
      error.message += `<p>please replace ${target} with  <b>"_blank"</b></p>`;
    }
  });

  if (type === 'sql') {
    //
    if (hrefs.includes(null)) {
      error.message += `<p>Found a link messing  a <b>href</b> attribute</p>`;
    }
    hrefs.forEach((href) => {
      if (href && trimAll(href) !== '') {
        error.message += `<p>Please remove this href value <b>href="${href}"</b></p>`;
      }
    });
  } else {
    const langInfo: Tlang | undefined = emailTypes.langs.find((item) => item.lang === lang);

    if (hrefs.includes(null)) {
      error.message += `<p>Found a link messing  a <b>href</b> attribute</p>`;
    }

    if (hrefs.includes('')) {
      error.message += `<p>Found an empty <b>href</b> </p>`;
    }
    let inccorectLink;

    if (lang == 'frFR') {
      inccorectLink = hrefs.find((item) => {
        return !item?.startsWith(langInfo?.link as string) && !item?.startsWith('https://www.idkids.fr') && item != '';
      });

      if (!inccorectLink) {
        inccorectLink = hrefs.find((item) => {
          return item?.includes('https://www.okaidi.fr/okaidi-fr-landing-magasins-portugal') && item != '';
        });
      }
    } else {
      inccorectLink = hrefs.find((item) => {
        return !item?.startsWith(langInfo?.link as string) && item != '';
      });
    }

    if (inccorectLink) {
      error.message += `<p>Found an inccorect link  <b>href="${inccorectLink}"</b></p>`;
    }
  }

  if (error.message === '') {
    return null;
  }
  return error;
};
