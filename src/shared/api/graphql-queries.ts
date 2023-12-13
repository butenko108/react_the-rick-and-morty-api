import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters($pageNumber: Int!) {
    characters(page: $pageNumber) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        location {
          id
          name
        }
        episode {
          id
          name
          air_date
        }
        image
      }
    }
  }
`;
