var React = require('react');

var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;


var Annotation = React.createClass({
  getDefaultProps: function() {
    return {
      annotationTitle: "Annotation Title",
      annotationContent: "Annotation Content"
    };
  },

  render: function() {
    return (
      <OverlayTrigger
        className="annotation"
        placement="right"
        delayShow={300}
        delayHide={150}
        positionTop={50}
        overlay={
          <Popover
            className="pop-over"
            title={this.props.annotationTitle}
          >
          {this.props.annotationContent}
          </Popover>
        }
      >
      <span className="text">{this.props.children}</span>
      </OverlayTrigger>
    );
  }

});

module.exports = Annotation;