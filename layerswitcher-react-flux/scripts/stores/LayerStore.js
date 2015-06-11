'use strict';

import {EventEmitter} from 'events';

let config = {
  layers: []
};

class LayerStore extends EventEmitter {
  bindMap(map) {
    config.layers = map.getLayers().getArray();
    this.emitChange();
    map.getLayers().on('add', this.emitChange, this);
    map.getLayers().on('remove', this.emitChange, this);
  }
  getState() {
    return config;
  }
  emitChange() {
    this.emit('CHANGE');
  }
  addChangeListener(cb) {
    this.on('CHANGE', cb);
  }
  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}

let _LayerStore = new LayerStore();

export default _LayerStore;
