import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from './form';
import { Input, InputProps } from './input';

interface TextFieldProps extends InputProps {
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, className, inputClassName, labelClassName, ...props }, ref) => {
    const { error } = useFormField();

    return (
      <FormItem className={className}>
        {label && (
          <FormLabel
            className={cn(
              'font-normal text-label-md text-neutral-900',
              labelClassName
            )}
          >
            {label}
          </FormLabel>
        )}
        <FormControl>
          <Input
            {...props}
            ref={ref}
            className={cn({ 'border-destructive': error }, inputClassName)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

TextField.displayName = 'TextField';

export { TextField };
