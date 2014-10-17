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

    var offset = this.props.isSidebarShown ?
    0 :
    2
    ;
    /*
    var comments = this.props.isSidebarShown ?
      : <CommentList key={this.props.key} />
      : null
    ;
    */

    return (
      <Row className={klass}>
      <Col md={8} sm={8} xs={8} xsOffset={offset} smOffset={offset} mdOffset={offset}>{this.props.children}</Col>
      <CommentSidebar
      key={this.props.key}
      toggleHandler={this.props.sidebarToggleHandler}
      isSidebarShown={this.props.isSidebarShown}
      />
      </Row>
      );
  }
});

module.exports = textBlock;
