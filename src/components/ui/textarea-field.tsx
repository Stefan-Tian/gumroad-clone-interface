import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from './form';
import { Textarea, TextareaProps } from './textarea';

interface TextareaFieldProps extends TextareaProps {
  label?: string;
  textareaClassName?: string;
  labelClassName?: string;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, className, textareaClassName, labelClassName, ...props }, ref) => {
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
          <Textarea
            {...props}
            ref={ref}
            className={cn({ 'border-destructive': error }, textareaClassName)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

TextareaField.displayName = 'TextareaField';

export { TextareaField };
