var React = require('react/addons');

var code = require('react-bootstrap').code;

var codeBlock = React.createClass({

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    return(
      <div className='code-block'>
        <pre>{this.props.children}</pre>
      </div>
    );
  }

});

module.exports = codeBlock;