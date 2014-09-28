/** @jsx React.DOM */

var React = require('react');

var Paragraph = require('./paragraph.jsx');
var Text = require('./text.jsx');
var CodeBlock = require('./code_block.jsx');
var Content = require('./content.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Content>
          <CodeBlock />
        </Content>
      </div>
    );
  }
});




module.exports = App;
