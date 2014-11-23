var React = require('react/addons');

var cx = React.addons.classSet;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var CommentSidebar = require('./comment_sidebar.jsx');

var textBlock = React.createClass({

  proptypes: {
    align: React.PropTypes.oneOf(['left', 'center', 'right']),
    role: React.PropTypes.oneOf(['standard', 'quote']),
    isSidebarShown: React.PropTypes.bool.isRequired,
    sidebarToggleHandler: React.PropTypes.func,
    key: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      role: 'standard',
    };
  },

  render: function() {
    var klass = cx({
      'text-block': true,
      'align-left': this.props.align === 'left',
      'align-right': this.props.align === 'right',
      'align-center': this.props.align === 'center',
      'text-block-standard': this.props.role === 'standard',
      'text-block-quote': this.props.role === 'quote'
    });

    return (
      <Row className={klass}>
      <Col md={6} sm={10} xs={10} xsOffset={1} smOffset={1} mdOffset={3}>

        {this.props.children}
      </Col>
      </Row>
      );
  }
});

module.exports = textBlock;
