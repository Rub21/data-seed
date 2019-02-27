import { SET_ACTIVE_LAYER, CLEAR_ACTIVE_LAYER, ZOOM_TO_LAYER } from '../constants';

export default function LayerReducer (state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_LAYER:
      return action.layer;
    case ZOOM_TO_LAYER:
      return action.bbox;
    case CLEAR_ACTIVE_LAYER:
      return null;
    default:
      return state;
  }
}
