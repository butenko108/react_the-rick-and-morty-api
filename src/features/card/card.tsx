import cn from 'classnames';
import { Link } from 'react-router-dom';

import { TextBlock } from 'features';
import { Typography } from 'shared/ui';
import { replaceSpacesWithDashes } from 'shared/utils';

interface Props {
  card: {
    __typename?: 'Character';
    id?: string | null;
    name?: string | null;
    status?: string | null;
    species?: string | null;
    image?: string | null;
    location?: { __typename?: 'Location'; id?: string | null; name?: string | null } | null;
    episode: Array<{
      __typename?: 'Episode';
      id?: string | null;
      name?: string | null;
      air_date?: string | null;
    } | null>;
  } | null;
}

export const Card = ({ card }: Props) => (
  <Link
    to={replaceSpacesWithDashes(card?.name || '')}
    state={{ id: card?.id }}
    className="block h-full cursor-pointer rounded-[9px] bg-dark-elf shadow-card duration-300 hover:bg-night-black md:flex"
  >
    {card && card.image && card.name && (
      <img
        src={card.image}
        alt={card.name}
        className="max-h-[220px] w-full rounded-t-[9px] object-cover object-center sm:max-h-[220px] md:max-h-none md:max-w-[349px] md:rounded-s-[9px] md:rounded-tr-none lg:max-w-[229px]"
      />
    )}

    <div className="px-[14px] py-3">
      <Typography as="h2" variant="h2" className="mb-[1px] text-white-smoke">
        {card?.name}
      </Typography>

      <div className="mb-3 flex items-center gap-[7px]">
        <div
          className={cn('h-[9px] w-[9px] rounded-[5px]', {
            'bg-verdant-fields': card?.status === 'Alive',
            'bg-poinciana': card?.status === 'Dead',
            'bg-mortar-grey': card?.status === 'unknown',
          })}
        />

        <Typography variant="p2" className="capitalize text-white">
          {card?.status} {card?.species && `- ${card?.species}`}
        </Typography>
      </div>

      <TextBlock description="Last known location:" text={card?.location?.name} className="mb-[14px]" />
      <TextBlock description="First seen in:" text={card?.episode[0]?.name} />
    </div>
  </Link>
);
