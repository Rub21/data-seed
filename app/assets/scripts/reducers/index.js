import LayersReducers from './LayersReducers';
import LayerReducers from './LayerReducers';
import ZoomToLayerReducers from './ZoomToLayerReducers';

export default {
  layers: LayersReducers,
  layer: LayerReducers,
  bbox: ZoomToLayerReducers
};
