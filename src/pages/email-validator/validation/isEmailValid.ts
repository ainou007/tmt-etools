import { TEmailError } from '@/hooks/useEmailValidation';

export const isEmailValid = (errors: (TEmailError | null)[]): boolean => {
  let count = 0;
  errors.forEach((err) => {
    if (err == null) {
      count++;
    }
  });

  if (count === errors.length) {
    return true;
  }
  return false;
};
