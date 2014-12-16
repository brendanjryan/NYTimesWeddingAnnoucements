var React = require('react');
var $ = require('jquery');

var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Button = require('react-bootstrap').Button;


var Annotation = React.createClass({
  getDefaultProps: function() {
    return {
      title: "",
      content: ""
    };
  },

  render: function() {

    var contentText = this.props.content.split('\n').map(function(item){
      return <p>{item}</p>
    });

    // Button used as a hack to fix a bug in React-Bootstrap focus states
    return (
      <OverlayTrigger
      trigger={["focus", "click"]}
      className="annotation"
      placement={_getTooltipPlacement()}
      positionTop={50}
      overlay={
        <Popover
        className="pop-over"
        >
        <div dangerouslySetInnerHTML={{__html: this.props.content}} />
        </Popover>
      }
      >
      <Button bsStyle="link" className="annotation-text">{this.props.children}</Button>
      </OverlayTrigger>
      );
  }
});

function _getTooltipPlacement() {
  if (_isMobile()) {
    return "bottom";
  }
  return "right";
}

function _isMobile() {
  return $( window ).width() < 600;
}

module.exports = Annotation;