var React = require('react');
var katex = require('katex');

/*
Caveat - this compoenent is still *very* buggy and do not really endorse
that it be used yet.
*/
var Tex = React.createClass({
  proptypes: {

  },

  getDefaultProps: function() {
    return {

    };
  },

  componentDidMount: function() {
    debugger;
    var text = this.props.children;
    var texHolder = this.refs.tex.getDOMNode();
    katex.render(text, texHolder);
    return;
  },

  componentDidUpdate: function(prevProps, prevState){
    var oldText = prevProps.children;
    var currText = this.props.children;

    if (currText !== oldText) {
      var texHolder = this.refs.tex.getDOMNode();
      katex.render(currText, texHolder);
    }

    return;
  },


  render: function() {
    return (
      <span ref='tex'/>
    );
  },


});

module.exports = Tex;