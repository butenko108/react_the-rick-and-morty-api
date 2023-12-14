import { useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import cn from 'classnames';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CharacterByIdQuery } from '__generated__/graphql';
import { EllipsisURL } from 'assets';
import { LoadingContainer, TextBlock } from 'features';
import { GET_CHARACTER_BY_ID } from 'shared/api';
import { ROUTES } from 'shared/constants';
import { Container, Typography } from 'shared/ui';

export const CharacterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const options = { variables: { characterId: location.state?.id } };
  const { loading, data } = useQuery<CharacterByIdQuery>(GET_CHARACTER_BY_ID, options);
  const card = data?.character;
  const allNameEpisodes = card?.episode?.map(episode => episode?.name).join(', ');

  useEffect(() => {
    if (!location.state?.id) {
      navigate(ROUTES.notFoundPage, { replace: true });
    }
  }, [location.state?.id, navigate]);

  return (
    <LoadingContainer loading={loading} size="l">
      <Container padding className="py-6 md:pt-10 lg:pt-20">
        <div className="rounded-[9px] bg-dark-elf lg:flex">
          {card && card.image && card.name && (
            <img
              src={card.image}
              alt={card.name}
              className="w-full rounded-t-[9px] object-cover object-center md:max-h-[572px] lg:min-h-[572px] lg:max-w-[595px] lg:rounded-s-[9px] lg:rounded-tr-none xl:max-h-none"
            />
          )}

          <div className="relative w-full px-4 py-3 pr-4 lg:pl-[41px]">
            <Typography as="h2" variant="h2" className="mb-[1px] text-white-smoke">
              {card?.name}
            </Typography>

            <div className="mb-3 flex items-center gap-[7px]">
              <div
                className={cn('h-[9px] w-[9px] rounded-[5px]', {
                  'bg-verdant-fields': card?.status === 'Alive',
                  'bg-poinciana': card?.status === 'Dead',
                  'bg-mortar-grey': card?.status === 'unknown',
                })}
              />

              <Typography variant="p2" className="capitalize text-white">
                {card?.status} {card?.species && `- ${card?.species}`}
              </Typography>
            </div>

            <TextBlock description="Last known location:" text={card?.location?.name} className="mb-[14px]" />
            <TextBlock description="First seen in:" text={card?.episode[0]?.name} className="mb-[33px]" />
            <TextBlock description="All episodes which this character appeared in:" text={allNameEpisodes} />

            <Button
              variant="contained"
              color="white"
              className="!absolute -bottom-7 -right-7 !hidden h-14 !min-w-[56px] !max-w-[56px] !rounded-full !p-0 !shadow-button  md:!flex"
            >
              <img src={EllipsisURL} alt="Ellipsis" />
            </Button>
          </div>
        </div>
      </Container>
    </LoadingContainer>
  );
};
