import Button from '@mui/material/Button';

import { CharactersQuery } from '__generated__/graphql';
import { EllipsisURL } from 'assets';
import { Card } from 'features';

interface Props {
  data?: CharactersQuery;
}

export const CardsList = ({ data }: Props) => {
  return (
    <ul className="relative mb-[22px] grid gap-[27px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      {data?.characters?.results?.map(character => (
        <li key={character?.id}>
          <Card card={character} />
        </li>
      ))}

      <Button
        variant="contained"
        color="white"
        className="!absolute -bottom-7 -right-7 !hidden h-14 !min-w-[56px] !max-w-[56px] !rounded-full !p-0 !shadow-button  md:!flex"
      >
        <img src={EllipsisURL} alt="Ellipsis" />
      </Button>
    </ul>
  );
};
