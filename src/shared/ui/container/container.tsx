import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  padding?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}

export const Container = ({ className, padding = false, children, fullWidth = true }: Props) => (
  <div className={cn('mx-auto w-full', { 'px-4 md:px-5': padding, 'max-w-[1267px]': fullWidth }, className)}>
    {children}
  </div>
);
