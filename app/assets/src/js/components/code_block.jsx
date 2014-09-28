var React = require('react');

var code = require('react-bootstrap').code;

var codeBlock = React.createClass({

  getDefaultProps: function() {
    return {
      content: "console.log('hello, world!');"
    };
  },

  render: function() {
    return(
      <div>
        <code>{this.props.content}</code>
      </div>
    );
  }

});

module.exports = codeBlock;