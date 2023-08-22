/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updatedHand = /* GraphQL */ `
  subscription UpdatedHand($id: ID!) {
    updatedHand(id: $id) {
      id
      cards
      __typename
    }
  }
`;
export const updatedState = /* GraphQL */ `
  subscription UpdatedState($game_id: ID!) {
    updatedState(game_id: $game_id) {
      id
      game_id
      active_player_idx
      active_player_id
      last_played_idx
      top_of_pile
      pot_size
      revolution
      direction
      active_pattern
      __typename
    }
  }
`;
export const updatedPlayer = /* GraphQL */ `
  subscription UpdatedPlayer($id: ID!) {
    updatedPlayer(id: $id) {
      id
      name
      game_id
      hand_id
      rank
      has_passed
      __typename
    }
  }
`;
