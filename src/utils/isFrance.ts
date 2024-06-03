export const isFrance = (lang: string): boolean => {
  if (lang == 'frFR' || lang === 'fr') {
    return true;
  }
  return false;
};
