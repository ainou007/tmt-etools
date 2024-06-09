import { brandLogoCheck } from '@/utils/brandLogoCheck';
import { checkCondition } from '@/utils/checkCondition';
import { checkIncludes } from '@/utils/checkIncludes';
import { checkLinks } from '@/utils/checkLinks';
import { checkNotifyMailCode } from '@/utils/checkNotifyMailCode';
import { footerHeaderCheck } from '@/utils/footerHeaderCheck';
import { getUncodedChars } from '@/utils/getUncodedChars';
import { hostedImages } from '@/utils/hostedImages';
import { phValidation } from '@/utils/phValidation';
import { useState } from 'react';

export type TEmailError = {
  title: string;
  message: string;
};

export type unCodedChar = {
  name: string;
  value: string;
  code: string;
  howMany: number;
};

const useEmailValidation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<(TEmailError | null)[]>([]);

  const checkCharPromise = (email: string, type: string, lang: string, brand: string) => {
    return new Promise(() => {
      setIsLoading(true);
      setTimeout(() => {
        setErrors((prevErrors) => [...prevErrors, getUncodedChars(email)]);
        setErrors((prevErrors) => [...prevErrors, phValidation(email, type)]);
        setErrors((prevErrors) => [...prevErrors, footerHeaderCheck(email)]);
        setErrors((prevErrors) => [...prevErrors, brandLogoCheck(email, lang, brand)]);
        setErrors((prevErrors) => [...prevErrors, checkCondition(email, lang, brand)]);
        setErrors((prevErrors) => [...prevErrors, checkLinks(email, lang, type)]);
        setErrors((prevErrors) => [...prevErrors, checkIncludes(email, lang)]);
        setErrors((prevErrors) => [...prevErrors, checkNotifyMailCode(email)]);
        setErrors((prevErrors) => [...prevErrors, hostedImages(email)]);

        setIsLoading(false);
      }, 500);
    });
  };
  const check = async (email: string, type: string, lang: string, brand: string) => {
    setErrors([]);
    await checkCharPromise(email, type, lang, brand);
  };

  return {
    check,
    isLoading,
    errors,
  };
};

export default useEmailValidation;
