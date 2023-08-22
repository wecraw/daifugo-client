/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Game = {
  __typename: "Game",
  id: string,
  state_id: string,
  joinable: boolean,
  // player_count: Int!
  players: Array< string | null >,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  game_id: string,
  hand_id?: string | null,
  rank?: number | null,
  has_passed?: boolean | null,
};

export type GameState = {
  __typename: "GameState",
  id: string,
  game_id: string,
  active_player_idx: number,
  active_player_id: string,
  last_played_idx: number,
  top_of_pile: Array< string | null >,
  pot_size: number,
  revolution: boolean,
  direction: boolean,
  active_pattern?: string | null,
};

export type Hand = {
  __typename: "Hand",
  id: string,
  cards: Array< string | null >,
};

export type CreateGameMutation = {
  // pure insert mutations
  createGame?:  {
    __typename: "Game",
    id: string,
    state_id: string,
    joinable: boolean,
    // player_count: Int!
    players: Array< string | null >,
  } | null,
};

export type UpdateGameMutationVariables = {
  id: string,
  state_id?: string | null,
  joinable?: boolean | null,
  players?: Array< string | null > | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    state_id: string,
    joinable: boolean,
    // player_count: Int!
    players: Array< string | null >,
  } | null,
};

export type CreatePlayerMutationVariables = {
  name: string,
  game_id: string,
  hand_id: string,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    game_id: string,
    hand_id?: string | null,
    rank?: number | null,
    has_passed?: boolean | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  id: string,
  rank?: number | null,
  hand_id?: string | null,
  has_passed?: boolean | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    game_id: string,
    hand_id?: string | null,
    rank?: number | null,
    has_passed?: boolean | null,
  } | null,
};

export type CreateStateMutationVariables = {
  game_id: string,
  active_player_id: string,
  active_player_idx: number,
};

export type CreateStateMutation = {
  createState?:  {
    __typename: "GameState",
    id: string,
    game_id: string,
    active_player_idx: number,
    active_player_id: string,
    last_played_idx: number,
    top_of_pile: Array< string | null >,
    pot_size: number,
    revolution: boolean,
    direction: boolean,
    active_pattern?: string | null,
  } | null,
};

export type UpdateStateMutationVariables = {
  id: string,
  active_player_idx?: number | null,
  last_played_idx?: number | null,
  active_player_id?: string | null,
  top_of_pile?: Array< string | null > | null,
  pot_size?: number | null,
  active_pattern?: string | null,
  revolution?: boolean | null,
  direction?: boolean | null,
};

export type UpdateStateMutation = {
  updateState?:  {
    __typename: "GameState",
    id: string,
    game_id: string,
    active_player_idx: number,
    active_player_id: string,
    last_played_idx: number,
    top_of_pile: Array< string | null >,
    pot_size: number,
    revolution: boolean,
    direction: boolean,
    active_pattern?: string | null,
  } | null,
};

export type CreateHandMutation = {
  createHand?:  {
    __typename: "Hand",
    id: string,
    cards: Array< string | null >,
  } | null,
};

export type UpdateHandMutationVariables = {
  id: string,
  cards: Array< string | null >,
};

export type UpdateHandMutation = {
  updateHand?:  {
    __typename: "Hand",
    id: string,
    cards: Array< string | null >,
  } | null,
};

export type JoinGameMutationVariables = {
  game_id: string,
  player_name: string,
};

export type JoinGameMutation = {
  // # composite lambda endpoints that call multiple mutations
  joinGame?:  {
    __typename: "Player",
    id: string,
    name: string,
    game_id: string,
    hand_id?: string | null,
    rank?: number | null,
    has_passed?: boolean | null,
  } | null,
};

export type StartGameMutationVariables = {
  game_id: string,
};

export type StartGameMutation = {
  startGame?:  {
    __typename: "GameState",
    id: string,
    game_id: string,
    active_player_idx: number,
    active_player_id: string,
    last_played_idx: number,
    top_of_pile: Array< string | null >,
    pot_size: number,
    revolution: boolean,
    direction: boolean,
    active_pattern?: string | null,
  } | null,
};

export type PlayCardsMutationVariables = {
  game_id: string,
  player_id: string,
  cards: Array< string | null >,
  discards: Array< string | null >,
};

export type PlayCardsMutation = {
  playCards?:  {
    __typename: "GameState",
    id: string,
    game_id: string,
    active_player_idx: number,
    active_player_id: string,
    last_played_idx: number,
    top_of_pile: Array< string | null >,
    pot_size: number,
    revolution: boolean,
    direction: boolean,
    active_pattern?: string | null,
  } | null,
};

export type TradeCardsMutationVariables = {
  id_from: string,
  id_to: string,
  cards_from: Array< string | null >,
  cards_to?: Array< string | null > | null,
};

export type TradeCardsMutation = {
  tradeCards?:  Array< {
    __typename: "Hand",
    id: string,
    cards: Array< string | null >,
  } | null > | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    state_id: string,
    joinable: boolean,
    // player_count: Int!
    players: Array< string | null >,
  } | null,
};

export type UpdatedHandSubscriptionVariables = {
  id: string,
};

export type UpdatedHandSubscription = {
  updatedHand?:  {
    __typename: "Hand",
    id: string,
    cards: Array< string | null >,
  } | null,
};

export type UpdatedStateSubscriptionVariables = {
  game_id: string,
};

export type UpdatedStateSubscription = {
  updatedState?:  {
    __typename: "GameState",
    id: string,
    game_id: string,
    active_player_idx: number,
    active_player_id: string,
    last_played_idx: number,
    top_of_pile: Array< string | null >,
    pot_size: number,
    revolution: boolean,
    direction: boolean,
    active_pattern?: string | null,
  } | null,
};

export type UpdatedPlayerSubscriptionVariables = {
  id: string,
};

export type UpdatedPlayerSubscription = {
  updatedPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    game_id: string,
    hand_id?: string | null,
    rank?: number | null,
    has_passed?: boolean | null,
  } | null,
};
