import { SET_ACTIVE_FEATURE, CLEAR_FEATURE, ZOOM_TO_FEATURE } from '../constants';
export const SetActiveFeature = feature => {
  return {
    type: SET_ACTIVE_FEATURE,
    feature: feature
  };
};

export const ZoomToFeature = bbox => {
  return {
    type: ZOOM_TO_FEATURE,
    bbox: bbox
  };
};
