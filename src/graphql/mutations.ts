/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame {
    createGame {
      id
      state_id
      joinable
      players
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $id: ID!
    $state_id: String
    $joinable: Boolean
    $players: [String]
  ) {
    updateGame(
      id: $id
      state_id: $state_id
      joinable: $joinable
      players: $players
    ) {
      id
      state_id
      joinable
      players
      __typename
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer($name: String!, $game_id: String!, $hand_id: String!) {
    createPlayer(name: $name, game_id: $game_id, hand_id: $hand_id) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $id: ID!
    $rank: Int
    $hand_id: String
    $has_passed: Boolean
  ) {
    updatePlayer(
      id: $id
      rank: $rank
      hand_id: $hand_id
      has_passed: $has_passed
    ) {
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
export const createState = /* GraphQL */ `
  mutation CreateState(
    $game_id: String!
    $active_player_id: String!
    $active_player_idx: Int!
  ) {
    createState(
      game_id: $game_id
      active_player_id: $active_player_id
      active_player_idx: $active_player_idx
    ) {
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
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $id: ID!
    $active_player_idx: Int
    $last_played_idx: Int
    $active_player_id: String
    $top_of_pile: [String]
    $pot_size: Int
    $active_pattern: String
    $revolution: Boolean
    $direction: Boolean
  ) {
    updateState(
      id: $id
      active_player_idx: $active_player_idx
      last_played_idx: $last_played_idx
      active_player_id: $active_player_id
      top_of_pile: $top_of_pile
      pot_size: $pot_size
      active_pattern: $active_pattern
      revolution: $revolution
      direction: $direction
    ) {
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
export const createHand = /* GraphQL */ `
  mutation CreateHand {
    createHand {
      id
      cards
      __typename
    }
  }
`;
export const updateHand = /* GraphQL */ `
  mutation UpdateHand($id: ID!, $cards: [String]!) {
    updateHand(id: $id, cards: $cards) {
      id
      cards
      __typename
    }
  }
`;
export const joinGame = /* GraphQL */ `
  mutation JoinGame($game_id: ID!, $player_name: String!) {
    joinGame(game_id: $game_id, player_name: $player_name) {
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
export const startGame = /* GraphQL */ `
  mutation StartGame($game_id: String!) {
    startGame(game_id: $game_id) {
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
export const playCards = /* GraphQL */ `
  mutation PlayCards(
    $game_id: String!
    $player_id: String!
    $cards: [String]!
    $discards: [String]!
  ) {
    playCards(
      game_id: $game_id
      player_id: $player_id
      cards: $cards
      discards: $discards
    ) {
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
export const tradeCards = /* GraphQL */ `
  mutation TradeCards(
    $id_from: ID!
    $id_to: ID!
    $cards_from: [String]!
    $cards_to: [String]
  ) {
    tradeCards(
      id_from: $id_from
      id_to: $id_to
      cards_from: $cards_from
      cards_to: $cards_to
    ) {
      id
      cards
      __typename
    }
  }
`;
