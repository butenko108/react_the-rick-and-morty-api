import { TextBlock } from 'features';
import { CREATURES } from 'shared/constants';
import { Container, Typography } from 'shared/ui';

export const CardDetails = () => {
  const creature = {
    ...CREATURES[0],
    otherInfo:
      'The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting and promoting contemporary culture from the Arab world and beyond in London. Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to championing creative and critical voices that are often underrepresented. ',
  };

  return (
    <Container padding className="py-6 md:pt-10 lg:pt-20">
      <div className="rounded-[9px] bg-dark-elf lg:flex">
        <img
          src={creature.image}
          alt={creature.name}
          className="w-full rounded-t-[9px] object-cover object-center md:max-h-[572px] lg:min-h-[572px] lg:max-w-[595px] lg:rounded-s-[9px] lg:rounded-tr-none xl:max-h-none"
        />

        <div className="w-full px-4 py-3 pr-4 lg:pl-[41px]">
          <Typography as="h2" variant="h2" className="mb-[1px] text-white-smoke">
            {creature.name}
          </Typography>

          <div className="mb-3 flex items-center gap-[7px]">
            <div className="h-[9px] w-[9px] rounded-[5px] bg-mortar-grey" />

            <Typography variant="p2" className="text-white">
              {creature.isAlive} - {creature.type}
            </Typography>
          </div>

          <TextBlock description="Last known location:" text={creature.lastLocation} className="mb-[14px]" />
          <TextBlock description="First seen in:" text={creature.firstSeen} className="mb-[33px]" />
          <TextBlock description="Other Info" text={creature.otherInfo} />
        </div>
      </div>
    </Container>
  );
};
