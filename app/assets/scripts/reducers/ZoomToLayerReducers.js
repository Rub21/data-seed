import { ZOOM_TO_LAYER } from '../constants';

export default function zoomToLayer(state = [-89.7, -29.1, 40.2, 61.2], action) {
  switch (action.type) {
    case ZOOM_TO_LAYER:
      return action.bbox;
    default:
      return state;
  }
}
