import cn from 'classnames';
import { ReactNode } from 'react';

import { Spinner, SpinnerProps, Typography } from 'shared/ui';

interface Props extends SpinnerProps {
  loading: boolean;
  children: ReactNode;
  divClassName?: string;
  fullHeight?: boolean;
  error?: boolean;
}

export const LoadingErrorContainer = ({
  loading,
  children,
  className,
  color,
  size,
  divClassName,
  fullHeight = true,
  error = false,
}: Props) => (
  <>
    {loading ? (
      <div className={cn('flex items-center justify-center', { 'h-screen': fullHeight }, divClassName)}>
        <Spinner className={className} color={color} size={size} />
      </div>
    ) : error ? (
      <Typography as="h2" variant="h2" className="flex h-screen items-center justify-center text-white-smoke">
        Ops! Something went wrong... Please, try reload the page.
      </Typography>
    ) : (
      <>{children}</>
    )}
  </>
);
