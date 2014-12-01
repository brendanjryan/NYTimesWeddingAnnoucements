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
      1 :
      3
    ;
    debugger;
    return(
      <Row className={klass}>
       <Col md={6} sm={10} xs={10} xsOffset={1} smOffset={1} mdOffset={3}>
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
