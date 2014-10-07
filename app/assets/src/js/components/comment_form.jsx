var React = require('react');
React.addons = require('react-addons');

var cx = React.addons.classSet;

var CommentForm = React.createClass({

  _defaultState: {
    'commentName' : 'Name',
    'commentText': 'leave a note',
    'hidden' : false
  },

  _emptyState: {
    'commentName': '',
    'commentText': '',
  },

  proptypes: {
    dataKey: React.PropTypes.string.required,
  },

  getInitialState: function() {
    return this._defaultState;
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://nytimesthesis.firebaseio.com/items/" + this.props.dataKey + '/');
  },

  onCancelButtonClick: function() {
    this.setState(this._emptyState);

    // call parents helper here
  },

  onSaveButtonClick: function() {
    if (this.state.commentName && this.state.commentText) {
      this.firebaseRef.push({
        name: this.state.commentName,
        text: this.state.commentText
      });

      this.setState(this._emptyState);
      this.setState({'hidden': true});
    }


  },

  emitChange: function() {
    var commentName = this.refs.commentName.getDOMNode().innerText;
    var commentText = this.refs.commentText.getDOMNode().innerText;

    if(commentName && commentName === this._defaultState.commentName) {
      this.setState({
        'commentName': ''
      });
    }

    else if (commentText && commentText === this._defaultState.commentText){
      this.setState({
        'commentText': ''
      });
    }

    else if (commentName && commentName !== this.state.commentName) {
      this.setState({
        'commentName' : commentName
      });
    }
    else if (commentText && commentText !== this.state.commentText) {
      this.setState({
        'commentText' : commentText
      });
    }

  },

  render: function() {
    var klass = cx({
      'comment-form': true,
      'hidden': this.state.hidden,
    });

    return(
      <div className={klass}>
        <section className="user-info">
        <header
          ref={'commentName'}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          onFocus={this.emitChange}
          contentEditable={true}
        >
          {this.state.commentName}
        </header>

        <p
          ref={'commentText'}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          onFocus={this.emitChange}
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