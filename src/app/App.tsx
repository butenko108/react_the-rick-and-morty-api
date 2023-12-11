import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

import { MaterialUIProvider } from './providers';
import { EllipsisURL } from '../assets';
import { Card } from '../features';
import { Creature } from '../shared/types';
import { Container } from '../shared/ui/container/container';

const creatures: Creature[] = [
  {
    name: 'Aqua Rick',
    isAlive: 'Unknown',
    type: 'Humanoid',
    lastLocation: 'Citadel of Ricks',
    firstSeen: 'Close Rick-counters of the Rick Kind',
    image: 'https://4.img-dpreview.com/files/p/E~C667x0S5333x4000T1200x900~articles/3925134721/0266554465.jpeg',
  },
  {
    name: 'Aqua Rick',
    isAlive: 'Unknown',
    type: 'Humanoid',
    lastLocation: 'Citadel of Ricks',
    firstSeen: 'Close Rick-counters of the Rick Kind',
    image: 'https://4.img-dpreview.com/files/p/E~C667x0S5333x4000T1200x900~articles/3925134721/0266554465.jpeg',
  },
  {
    name: 'Aqua Rick',
    isAlive: 'Unknown',
    type: 'Humanoid',
    lastLocation: 'Citadel of Ricks',
    firstSeen: 'Close Rick-counters of the Rick Kind',
    image: 'https://4.img-dpreview.com/files/p/E~C667x0S5333x4000T1200x900~articles/3925134721/0266554465.jpeg',
  },
];

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

          <ul className="grid gap-[27px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {creatures.map((creature, index) => (
              <li key={index}>
                <Card card={creature} />
              </li>
            ))}
          </ul>

          <Button
            variant="contained"
            color="white"
            className="!shadow-button !h-14 !min-w-[56px] !max-w-[56px] !rounded-full !p-0"
          >
            <img src={EllipsisURL} alt="Ellipsis" />
          </Button>
        </Container>
      </main>
    </MaterialUIProvider>
  );
}

export default App;
