'use strict';

import React from 'react';
import LayerListItem from './LayerListItem.jsx';

export default class LayerList extends React.Component {
  constructor(props) {
    super(props)
    var me = this;
    this.props.map.getLayers().on('add', function() {
      me.setState({});
    })
    this.props.map.getLayers().on('remove', function() {
      me.setState({});
    })
  }
  render() {
    var layerNodes = this.props.map.getLayers().getArray().map(function(lyr, idx) {
      return (
        <LayerListItem key={idx} layer={lyr} title={lyr.get('title')} />
      )
    });
    return (
      <ul>
        {layerNodes}
      </ul>
    );
  }
}
