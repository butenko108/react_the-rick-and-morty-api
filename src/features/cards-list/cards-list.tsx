import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';

import { CharactersQuery } from '__generated__/graphql';
import { EllipsisURL } from 'assets';
import { Card } from 'features';
import { GET_CHARACTERS } from 'shared/api';

export const CardsList = () => {
  const { loading, error, data } = useQuery<CharactersQuery>(GET_CHARACTERS, {
    variables: { pageNumber: 1 },
  });

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
