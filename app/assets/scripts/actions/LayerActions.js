import { SET_ACTIVE_LAYER, ZOOM_TO_LAYER } from '../constants';
export const SetActiveLayer = layer => {
  return {
    type: SET_ACTIVE_LAYER,
    layer: layer
  };
};

export const ZoomToLayer = bbox => {
  return {
    type: ZOOM_TO_LAYER,
    bbox: bbox
  };
};
