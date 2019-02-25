import { SET_TMSLAYERS, HIDE_SHOW_TMSLAYERS } from '../constants';

export const setTMSLayers = layers => {
  return {
    type: SET_TMSLAYERS,
    layers: layers
  };
};

export const HideShowTMSLayers = layers => {
  return {
    type: HIDE_SHOW_TMSLAYERS,
    layers: layers
  };
};
