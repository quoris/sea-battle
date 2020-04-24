export interface FieldState {
  currentFieldState: string[],
  hits: number
}

export const SHOOT = "SHOOT";

interface shootAction {
  type: typeof SHOOT,
  squareId: number
}

export const GENERATE_BATTLEFIELD = "GENERATE_BATTLEFIELD";

interface generateBattlefieldAction {
  type: typeof GENERATE_BATTLEFIELD
}

export type gameAction = shootAction | generateBattlefieldAction