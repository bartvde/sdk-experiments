'use strict';

import React from 'react';

export default class LayerListItem extends React.Component {
  constructor(props) {
    super(props);
    props.layer.on('change:visible', function(evt) {
      this.setState({checked: evt.target.getVisible()});
    }, this);
    this.state = {checked: props.layer.getVisible()};
  }
  handleChange(event) {
    this.props.layer.setVisible(event.target.checked);
    this.setState({checked: event.target.checked});
  }
  render() {
    return (
      /*jshint ignore:start */
      <li><input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>{this.props.title}</li>
      /*jshint ignore:end */
    );
  }
}
