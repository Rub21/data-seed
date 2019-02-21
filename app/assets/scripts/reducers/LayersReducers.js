import { SET_LAYERS, CLEAR_LAYERS } from '../constants';

export default function LayersReducer (state = [], action) {
  switch (action.type) {
    case SET_LAYERS:
      return action.layers;
    case CLEAR_LAYERS:
      return null;
    default:
      return state;
  }
}
