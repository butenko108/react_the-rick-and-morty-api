import { TextBlock } from 'features';
import { Creature } from 'shared/types';
import { Typography } from 'shared/ui';

interface Props {
  card: Creature;
}

export const Card = ({ card }: Props) => (
  <div className="cursor-pointer rounded-[9px] bg-dark-elf shadow-card duration-300 hover:bg-night-black md:flex">
    <img
      src={card.image}
      alt={card.name}
      className="max-h-[220px] w-full rounded-[9px] object-cover object-center sm:max-h-[220px] md:max-h-none md:max-w-[349px] lg:max-w-[229px]"
    />

    <div className="px-[14px] py-3">
      <Typography as="h2" variant="h2" className="mb-[1px] text-white-smoke">
        {card.name}
      </Typography>

      <div className="mb-4 flex items-center gap-[7px]">
        <div className="h-[9px] w-[9px] rounded-[5px] bg-mortar-grey" />

        <Typography variant="p2" className="text-white">
          {card.isAlive} - {card.type}
        </Typography>
      </div>

      <TextBlock description="Last known location:" text={card.lastLocation} className="mb-[14px]" />
      <TextBlock description="First seen in:" text={card.firstSeen} />
    </div>
  </div>
);
