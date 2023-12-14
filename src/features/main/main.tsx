import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import { CharactersQuery } from '__generated__/graphql';
import { CardsList, Pagination } from 'features';
import { GET_CHARACTERS } from 'shared/api';
import { Container, Typography } from 'shared/ui';

export const Main = () => {
  const { loading, error, data, fetchMore } = useQuery<CharactersQuery>(GET_CHARACTERS, {
    variables: { pageNumber: 1 },
  });

  return (
    <Container padding className="py-6">
      <div className="mb-5">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="white" className="h-[57px] !min-w-[143px] !max-w-[143px]">
            <Typography variant="p3" className="uppercase tracking-[0.5px] text-night-sky">
              Filter
            </Typography>
          </Button>
        </Stack>
      </div>

      <CardsList data={data} />
      <Pagination total={data?.characters?.info?.pages} fetchMore={fetchMore} />
    </Container>
  );
};
