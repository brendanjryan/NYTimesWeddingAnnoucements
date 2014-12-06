var React = require('react/addons');

var cx = React.addons.classSet;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var CommentForm = require('./comment_form.jsx');
var CommentList = require('./comment_list.jsx');

var CommentSidebar = React.createClass({

  proptypes: {
    isSidebarShown: React.PropTypes.bool.isRequired,

    key: React.PropTypes.string.isRequired,
    toggleHandler: React.PropTypes.func,
  },

  getInitialState: function() {
    return {
      areCommentsShown: false,
    };
  },

  onSidebarClick: function() {
    if (!this.props.isSidebarShown) {
      this.setState({'areCommentsShown': true});
    } else if (this.state.areCommentsShown && this.props.isSidebarShown) {
      this.setState({'areCommentsShown': false});
    }

    this.props.toggleHandler();
  },

  render: function() {

    var content = this.state.areCommentsShown && this.props.isSidebarShown
    ? <div>
    <CommentList dataKey={this.props.key} />
    <CommentForm dataKey={this.props.key} />
    </div>
    : null
    ;

    var klass = cx({
      'comment-sidebar': true,
      'hidden': !this.state.areCommentsShown || !this.props.isSidebarShown,
    });

    return (
     <Col md={2} sm={2} xs={2} className={klass}>
     <div className="clearfix">
     <i
     onClick={this.onSidebarClick}
     className="fa fa-comment-o fa-lg pull-left comment-icon"
     />
     </div>
     {content}
     </Col>
     );
  }

});

module.exports = CommentSidebar;