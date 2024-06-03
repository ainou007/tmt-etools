import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

type TTextAreaProps<TFieldValue extends FieldValues> = {
  name: FieldPath<TFieldValue>;
  formControl: Control<TFieldValue, any>;
  label: string;
  placeholder: string;
};

import { Textarea } from '../ui/textarea';

const TextArea = <TFieldValue extends FieldValues>({
  formControl,
  label,
  name,
  placeholder,
}: TTextAreaProps<TFieldValue>) => {
  {
    return (
      <FormField
        control={formControl}
        name={name}
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <FormLabel> {label} </FormLabel>
            <FormControl>
              <Textarea
                className='resize-none'
                rows={15}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
};
export default TextArea;
