import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import { CardsList, Pagination } from 'features';
import { Container, Typography } from 'shared/ui';

export const Main = () => {
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

      <CardsList />
      <Pagination />
    </Container>
  );
};
