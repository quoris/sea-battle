import { SHOOT, GENERATE_BATTLEFIELD } from './types'

export function makeShoot(squareId: number) {
  return {
    type: SHOOT,
    squareId: squareId
  }
}

export function generateBattlefield() {
  return {
    type: GENERATE_BATTLEFIELD
  }
}