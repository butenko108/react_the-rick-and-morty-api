import cn from 'classnames';

import { Typography } from 'shared/ui';

interface Props {
  description: string;
  text?: string | null;
  className?: string;
}

export const TextBlock = ({ description, text, className }: Props) => (
  <div className={className}>
    <Typography variant="p2" className="text-mortar-grey">
      {description}
    </Typography>

    {text && (
      <Typography variant="p1" className={cn('text-white-smoke', { capitalize: text === 'unknown' })}>
        {text}
      </Typography>
    )}
  </div>
);
