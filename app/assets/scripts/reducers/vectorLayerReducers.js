export default function vectorLayersReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_ACTIVE_VECTOR_LAYER':
      return action.activeVectorLayer;
    case 'CLEAR_ACTIVE_VECTOR_LAYER':
      return null;
    default:
      return state;
  }
}
