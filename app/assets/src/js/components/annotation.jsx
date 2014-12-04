var React = require('react');

var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Button = require('react-bootstrap').Button;

var Annotation = React.createClass({
  getDefaultProps: function() {
    return {
      title: "Annotation Title",
      content: "Annotation Content"
    };
  },
  test: function() {
    debugger;
  },
  render: function() {

    var contentText = this.props.content.split('\n').map(function(item){
      return <p>{item}</p>
    });

    return (
      <OverlayTrigger
      trigger="focus"
      className="annotation"
      placement="right"
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

module.exports = Annotation;