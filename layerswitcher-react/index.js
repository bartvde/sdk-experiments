/* global ol */

var React = require('react');

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
      <li><input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>{this.props.title}</li>
    )
  }
};

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
    )
  }
};
