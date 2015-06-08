var React = require('react');
var LayerList = require('../');

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      visible: true,
      title: 'OpenStreetMap',
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});
React.render(<LayerList map={map} />,
  document.getElementById('layerlist'));
