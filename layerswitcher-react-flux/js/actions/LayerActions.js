'use strict';

import MapConstants from '../constants/MapConstants.js';
import AppDispatcher from '../dispatchers/AppDispatcher.js';

export default {
  setVisible: (layer, visible) => {
    layer.setVisible(visible);
  },
  removeLayer: (layer) => {
    AppDispatcher.handleAction({
      type: MapConstants.REMOVE_LAYER,
      data: layer
    });
  }
};
