import * as Slot from '@rn-primitives/slot';
import type { SlottableTextProps, TextRef } from '@rn-primitives/types';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text as RNText } from 'react-native';
import { cn } from '~/lib/utils';

const textVariants = cva('web:select-text', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    variant: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      destructive: 'text-destructive',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    align: 'left',
    variant: 'default',
  },
});

export interface TextProps
  extends SlottableTextProps,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<TextRef, TextProps>(
  (
    { className, size, weight, align, variant, asChild = false, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({ size, weight, align, variant }),
          className,
        )}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';

export { Text, textVariants };
