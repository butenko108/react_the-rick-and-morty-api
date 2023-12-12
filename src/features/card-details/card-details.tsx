import { CREATURES } from 'shared/constants';
import { Container } from 'shared/ui';

export const CardDetails = () => {
  const creature = CREATURES[0];

  return (
    <Container padding className="mb-20 pt-20">
      <img src={creature.image} alt={creature.name} />

      <div>ss</div>
    </Container>
  );
};
