import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tlang } from '@/constants/emailTypes';

type TTextAreaProps<TFieldValue extends FieldValues> = {
  name: FieldPath<TFieldValue>;
  formControl: Control<TFieldValue, any>;
  label: string;
  placeholder: string;
  data: Tlang[];
};
const SelectBox = <TFieldValue extends FieldValues>({ formControl, label, name, placeholder, data }: TTextAreaProps<TFieldValue>) => {
  {
    return (
      <FormField
        control={formControl}
        name={name}
        render={({ field }) => (
          <FormItem className='w-64 max-w-full z-50'>
            <FormLabel> {label} </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data.map((item) => (
                  <SelectItem key={item.lang} value={item.lang}>
                    {item.lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
};
export default SelectBox;
