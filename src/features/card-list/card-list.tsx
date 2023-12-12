import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import { EllipsisURL } from 'assets';
import { Card, Pagination } from 'features';
import { CREATURES } from 'shared/constants';
import { Container, Typography } from 'shared/ui';

export const CardList = () => {
  return (
    <Container padding>
      <div className="mb-5">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="white" className="h-[57px] !min-w-[143px] !max-w-[143px]">
            <Typography variant="p3" className="uppercase tracking-[0.5px] text-night-sky">
              Filter
            </Typography>
          </Button>
        </Stack>
      </div>

      <ul className="relative mb-[22px] grid gap-[27px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {CREATURES.map((creature, index) => (
          <li key={index}>
            <Card card={creature} />
          </li>
        ))}

        <Button
          variant="contained"
          color="white"
          className="!absolute -bottom-7 -right-7 h-14 !min-w-[56px] !max-w-[56px] !rounded-full !p-0 !shadow-button"
        >
          <img src={EllipsisURL} alt="Ellipsis" />
        </Button>
      </ul>

      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </Container>
  );
};
