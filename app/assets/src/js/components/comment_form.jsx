var React = require('react');
React.addons = require('react-addons');

var cx = React.addons.classSet;

var CommentForm = React.createClass({

  proptypes: {
    dataKey: React.PropTypes.string.required,
  },

  getInitialState: function() {
    return {
      'commentName' : 'Name',
      'commentText': 'leave a note',
    };
  },
  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://nytimesthesis.firebaseio.com/items/" + this.props.dataKey + '/');
  },

  onCancelButtonClick: function() {
    this.setState({
      'commentName': '',
      'commentText': '',
    });

    // call parents helper here
  },

  onSaveButtonClick: function() {
    this.firebaseRef.push({
      name: this.state.commentName,
      text: this.state.commentText
    });

    this.setState({
      'commentName': '',
      'commentText': '',
    });


  },

  emitChange: function() {

    var commentName = this.refs.commentName.innerText;
    var commentText = this.refs.commentText.innerText;

    if (commentName !== this.state.commentName) {
      this.setState({
        'commentName' : commentName
      });
    }

    if (commentText !== this.state.commentText) {
      this.setState({
        'commentText' : commentText
      });
    }

  },

  render: function() {
    var klass = cx({
      'comment-form': true,
    });

    return(
      <div className={klass}>
        <section className="user-info">
        <header
          ref={'commentName'}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          contentEditable={true}
        >
          {this.state.commentName}
        </header>

        <p
          ref={'commentText'}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          contentEditable={true}
        >
          {this.state.commentText}
        </p>

        </section>
        <section className="controls">
          <a onClick={this.onSaveButtonClick} className="save">save</a>
          <a onClick={this.onCancelButtonClick} className="cancel">cancel
          </a>
        </section>
      </div>

      );
  }

});

module.exports = CommentForm;