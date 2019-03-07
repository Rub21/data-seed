import { SET_LAYERS, CLEAR_LAYERS, HIDE_SHOW_LAYERS } from '../constants';

export default function LayersReducer(state = [], action) {
  switch (action.type) {
    case SET_LAYERS:
      return action.layers;
    case HIDE_SHOW_LAYERS:
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        newState[i] = Object.assign({}, newState[i], action.layers[i]);
      }
      return newState;
    case CLEAR_LAYERS:
      return null;
    default:
      return state;
  }
}
