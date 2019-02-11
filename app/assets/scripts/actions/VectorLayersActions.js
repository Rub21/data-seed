export const setVectorLayers = vectorLayers => {
  return {
    type: 'SET_VECTORLAYERS',
    vectorLayers: vectorLayers
  };
};
export const clearVectorLayers = () => {
  return {
    type: 'CLEAR_VECTORLAYERS'
  };
};
