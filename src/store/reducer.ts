import {
  SHOOT,
  gameAction,
  FieldState,
  GENERATE_BATTLEFIELD 
} from './types';

import { 
  SHIP_PART,
  shipsPlacement, 
  generateBattlefield
} from '../generateBattlefield'

const initialState: FieldState = {
  currentFieldState: new Array(100).fill(null) as Array<string>,
  hits: 20
}

export default function shootReducer(
  state = initialState,
  action: gameAction
): FieldState {
  switch (action.type) {
    
    case GENERATE_BATTLEFIELD:
      generateBattlefield();
      return state;

    case SHOOT:
      if (state.hits === 0 || state.currentFieldState[action.squareId]) {
        return state;
      }

      let currentFieldStateCopy = state.currentFieldState.slice();
      currentFieldStateCopy[action.squareId] = shipsPlacement[action.squareId];
      
      if (shipsPlacement[action.squareId] === SHIP_PART) {
        state.hits--;
      }

      return {
        ...state,
        currentFieldState: currentFieldStateCopy,
        hits: state.hits
      }
    default:
      return state;
  }
}