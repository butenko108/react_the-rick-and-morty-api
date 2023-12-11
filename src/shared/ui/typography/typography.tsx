import cn from 'classnames';
import { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'p1' | 'p2' | 'p3' | 'label';

type Props = HTMLAttributes<ElementType> & {
  className?: string;
  as?: ElementType;
  variant?: TypographyVariant;
  children?: ReactNode;
};

export const Typography = ({ className, as: Component = 'p', variant = 'p1', children, ...props }: Props) => (
  <Component
    {...props}
    className={cn(
      'font-roboto',

      // { 'text-[32px] font-bold leading-10': variant === 'h1' },
      { 'text-[27px] font-extrabold leading-[30px]': variant === 'h2' },

      { 'text-lg leading-[30px]': variant === 'p1' },
      { 'text-base font-medium leading-[26px]': variant === 'p2' },
      { 'text-base leading-[24px]': variant === 'p3' },
      className,
    )}
  >
    {children}
  </Component>
);
