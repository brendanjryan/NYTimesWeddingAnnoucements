var React = require('react/addons');

var cx = React.addons.classSet;

var Comment = React.createClass({

  proptypes: {
    author: React.PropTypes.string.required,
    content: React.PropTypes.string.required
  },


  render: function() {
    var klass = cx({
      'comment': true,
    });

    return(
      <li className={klass}>
        <p className="author">{this.props.author}</p>
        <p className="text">{this.props.content}</p>
      </li>
    );
  }

});

module.exports = Comment;