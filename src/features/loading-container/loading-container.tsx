import cn from 'classnames';
import { ReactNode } from 'react';

import { Spinner, SpinnerProps } from 'shared/ui';

interface Props extends SpinnerProps {
  loading: boolean;
  children: ReactNode;
  divClassName?: string;
  fullHeight?: boolean;
}

export const LoadingContainer = ({
  loading,
  children,
  className,
  color,
  size,
  divClassName,
  fullHeight = true,
}: Props) => (
  <>
    {loading ? (
      <div className={cn('flex items-center justify-center', { 'h-screen': fullHeight }, divClassName)}>
        <Spinner className={className} color={color} size={size} />
      </div>
    ) : (
      <>{children}</>
    )}
  </>
);
