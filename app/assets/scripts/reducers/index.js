import LayersReducers from './LayersReducers';
import LayerReducers from './LayerReducers';
import ZoomToLayerReducers from './ZoomToLayerReducers';
import TMSLayersReducers from './TMSLayersReducers';

export default {
  layers: LayersReducers,
  layer: LayerReducers,
  bbox: ZoomToLayerReducers,
  tmsLayers: TMSLayersReducers
};
