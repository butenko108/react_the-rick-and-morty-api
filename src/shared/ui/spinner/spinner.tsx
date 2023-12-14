import { ColorRing } from 'react-loader-spinner';

export interface SpinnerProps {
  className?: string;
  loading?: boolean;
  size?: 's' | 'm' | 'l';
  color?: string;
}

const sizes = {
  s: '24',
  m: '48',
  l: '72',
};

export const Spinner = ({ className, loading = true, size = 'm', color = '#0096AE' }: SpinnerProps) => (
  <ColorRing
    wrapperClass={className}
    visible={loading}
    height={sizes[size]}
    width={sizes[size]}
    ariaLabel="loading"
    colors={[color, color, color, color, color]}
  />
);
