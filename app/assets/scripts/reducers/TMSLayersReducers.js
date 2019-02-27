import { SET_TMSLAYERS, HIDE_SHOW_TMSLAYERS } from '../constants';

export default function LayersReducer (state = [], action) {
  switch (action.type) {
    case SET_TMSLAYERS:
      return action.layers;
    case HIDE_SHOW_TMSLAYERS:
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        newState[i] = Object.assign({}, newState[i], action.layers[i]);
      }
      return newState;
    default:
      return state;
  }
}
