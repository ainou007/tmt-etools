import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { toSnackCass } from '@/utils/toSnakCass';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type TTextAreaProps<TFieldValue extends FieldValues> = {
  name: FieldPath<TFieldValue>;
  formControl: Control<TFieldValue, any>;
  label: string;
  inputs: string[];
  onTypeChange?: () => void;
};
const RadioButtonGroup = <TFieldValue extends FieldValues>({
  formControl,
  label,
  name,
  inputs,
  onTypeChange,
}: TTextAreaProps<TFieldValue>) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel> {label} </FormLabel>
          <FormControl onChange={onTypeChange}>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className='flex flex-row items-center gap-6'>
              {inputs.map((input) => {
                return (
                  <FormItem key={input} className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value={toSnackCass(input)} />
                    </FormControl>
                    <FormLabel className='font-normal'>{input}</FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default RadioButtonGroup;
