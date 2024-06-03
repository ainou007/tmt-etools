export type Tlang = {
  lang: string;
  link: string;
};
type TEmailTypes = {
  langs: Tlang[];
  sqls: Tlang[];
};

export const emailTypes: TEmailTypes = {
  langs: [
    { lang: 'frFR', link: 'https://www.okaidi.fr' },
    { lang: 'itIT', link: 'https://www.okaidi.it' },
    { lang: 'frBE', link: 'https://fr.okaidi.be' },
    { lang: 'nlBE', link: 'https://nl.okaidi.be' },
    { lang: 'esES', link: 'https://www.okaidi.es' },
    { lang: 'caES', link: 'https://ca.okaidi.es' },
    { lang: 'ptPT', link: 'https://www.okaidi.fr/okaidi-fr-landing-magasins-portugal' },
    { lang: 'deDE', link: 'https://www.okaidi.de' },
    { lang: 'deCH', link: 'https://de.okaidi.ch' },
    { lang: 'frCH', link: 'https://fr.okaidi.ch' },
    { lang: 'plPL', link: 'https://www.okaidi.pl' },
    { lang: 'siSI', link: 'https://www.okaidi.si' },
    { lang: 'hrHR', link: 'https://catalog.okaidi.com' },
    { lang: 'roRO', link: 'https://www.okaidi.ro' },
  ],
  sqls: [
    { lang: 'fr', link: '' },
    { lang: 'en', link: '' },
  ],
};
