import { ReactNode } from 'react';

import { Spinner, SpinnerProps } from 'shared/ui';

interface Props extends SpinnerProps {
  loading: boolean;
  children: ReactNode;
}

export const LoadingContainer = ({ loading, children, className, color, size }: Props) => (
  <>
    {loading ? (
      <div className="absolute left-1/2 top-1/2">
        <Spinner className={className} color={color} size={size} />
      </div>
    ) : (
      <>{children}</>
    )}
  </>
);
