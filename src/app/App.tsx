import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import { MaterialUIProvider } from './providers';
import { EllipsisURL } from '../assets';
import { Card } from '../features';
import { CREATURES } from '../shared/constants';
import { Container } from '../shared/ui/container/container';

function App() {
  return (
    <MaterialUIProvider>
      <main className="min-h-screen bg-night-sky py-10">
        <Container padding>
          <div className="mb-5">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="white">
                Filters
              </Button>
            </Stack>
          </div>

          <ul className="relative grid gap-[27px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {CREATURES.map((creature, index) => (
              <li key={index}>
                <Card card={creature} />
              </li>
            ))}

            <Button
              variant="contained"
              color="white"
              className="!shadow-button !absolute -bottom-7 -right-7 !h-14 !min-w-[56px] !max-w-[56px] !rounded-full !p-0"
            >
              <img src={EllipsisURL} alt="Ellipsis" />
            </Button>
          </ul>
        </Container>
      </main>
    </MaterialUIProvider>
  );
}

export default App;
