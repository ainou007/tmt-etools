import isStringValidHtml from '@/utils/isStringValidHtml';
import { z } from 'zod';

export const FormSchema = z.object({
  type: z.enum(['sql', 'montage_full'], { message: 'please select a type' }),
  code_source: z
    .string()
    .min(1, { message: 'Please enter the code source' })
    .refine((code_source) => isStringValidHtml(code_source), {
      message: 'Please enter a valid html ',
    }),

  lang: z.string().min(1, { message: 'Please select a lang' }),
  brand: z.enum(['ok', 'ob'], { message: 'Pleas select a brand' }),
});
