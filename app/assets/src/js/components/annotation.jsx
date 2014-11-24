var React = require('react');

var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;


var Annotation = React.createClass({
  getDefaultProps: function() {
    return {
      title: "Annotation Title",
      content: "Annotation Content"
    };
  },

  render: function() {

    var contentText = this.props.content.split('\n').map(function(item){
      return <p>{item}</p>
    });

    return (
      <OverlayTrigger
        trigger={["click"]}
        className="annotation"
        placement="right"
        delayShow={300}
        delayHide={150}
        positionTop={50}
        overlay={
          <Popover
            className="pop-over"
          >
          <div dangerouslySetInnerHTML={{__html: this.props.content}} />
          </Popover>
        }
      >
      <span className="annotation-text">{this.props.children}</span>
      </OverlayTrigger>
    );
  }

});

module.exports = Annotation;