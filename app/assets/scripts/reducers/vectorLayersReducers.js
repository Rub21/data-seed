export default function vectorLayersReducer (state = [], action) {
  switch (action.type) {
    case 'SET_VECTORLAYERS':
      return action.vectorLayers;
    case 'CLEAR_VECTORLAYERS':
      return null;
    default:
      return state;
  }
}
