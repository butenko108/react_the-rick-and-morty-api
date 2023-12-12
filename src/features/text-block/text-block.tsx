import { Typography } from 'shared/ui';

interface Props {
  description: string;
  text: string;
  className?: string;
}

export const TextBlock = ({ description, text, className }: Props) => (
  <div className={className}>
    <Typography variant="p2" className="capitalize text-mortar-grey">
      {description}
    </Typography>

    <Typography variant="p1" className="text-white-smoke">
      {text}
    </Typography>
  </div>
);
