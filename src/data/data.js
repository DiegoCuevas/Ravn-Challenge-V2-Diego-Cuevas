import { gql } from "@apollo/client";


export const GETALLPEOPLE = gql`
  query customQuery($after: String) {
    allPeople(first: 5, after: $after) {
      totalCount
      edges {
        node {
          id
          name
          species {
            name
          }
          homeworld {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GETPERSON = gql`
  query info($id: ID!) {
    person(id: $id) {
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;

