var React = require('react/addons');

var cx = React.addons.classSet;

var Comment = require('./comment.jsx');

var CommentList = React.createClass({

  proptypes: {
    dataKey: React.PropTypes.string.required,
  },

  getInitialState: function() {
    return {
      comments : [],
    };
  },

  //  TODO(bjryan2):  FIX THIS
  comments: []

  ,
  componentWillMount: function() {
    this.comments = [];
    this.firebaseRef = new Firebase("https://nytimesthesis.firebaseio.com/items/" + this.props.dataKey + '/');

    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.comments.push(dataSnapshot.val());
      this.setState({
        comments: this.comments
      });
    }.bind(this));

  },

  render: function() {
    var klass = cx({
      'comment-list': true,
    });

    var comments = this.state.comments.map(function(comment){
      return(
        <Comment author={comment.name} content={comment.text} />
      );
    });

    return(
      <ul className={klass}>
        {comments}
      </ul>
    );
  }

});

module.exports = CommentList;