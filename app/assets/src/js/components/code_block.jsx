/** @jsx React.DOM */

var React = require('react/addons');

var cx = React.addons.classSet;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var CommentSidebar = require('./comment_sidebar.jsx');
var PrismCode = require("react-prism");

var CodeBlock = React.createClass({

  mixins: [React.addons.PureRenderMixin],

  proptypes: {
    isSidebarShown: React.PropTypes.bool.isRequired,
    codePath: React.PropTypes.string.isRequied,
    language: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      language: 'javascript'
    };
  },

  componentDidMount: function() {
    this._highlight();
  },

  componentDidUpdate: function() {
    this._highlight();
  },

  render: function() {
    var klass = cx({
      'code-block': true,
    });

    var offset = this.props.isSidebarShown ?
      0 :
      2
    ;

    return(
      <Row className={klass}>
       <Col md={8} sm={8} xs={8} xsOffset={offset} smOffset={offset} mdOffset={offset}>
        <pre>
           <code ref="code" className={"language-" + this.props.language}>
            {this.props.children}
           </code>
          </pre>
        </Col>
      </Row>
    );
  },

  _highlight: function() {
    Prism.highlightElement(this.refs.code.getDOMNode());
  }
});

module.exports = CodeBlock;
