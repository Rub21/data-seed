import { SET_ACTIVE_FEATURE, CLEAR_FEATURE, ZOOM_TO_FEATURE } from '../constants';

export default function FeatureReducer (state = { properties: {} }, action) {
  switch (action.type) {
    case SET_ACTIVE_FEATURE:
      return action.feature;
    case ZOOM_TO_FEATURE:
      return action.bbox;
    case CLEAR_FEATURE:
      return null;
    default:
      return state;
  }
}
