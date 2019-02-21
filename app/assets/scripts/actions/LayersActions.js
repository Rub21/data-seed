import { SET_LAYERS, CLEAR_LAYERS, HIDE_SHOW_LAYERS } from '../constants';

export const setLayers = layers => {
  return {
    type: SET_LAYERS,
    layers: layers
  };
};

export const clearLayers = () => {
  return {
    type: CLEAR_LAYERS
  };
};

export const hideShowLayers = layers => {
  return {
    type: HIDE_SHOW_LAYERS,
    layers: layers
  };
};
