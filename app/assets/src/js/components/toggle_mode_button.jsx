var React = require('react/addons');

var Link = require('react-router').Link;

var ToggleModeButton = React.createClass({


  proptypes: {
  },

  getDefaultProps: function() {
    return {
      linkText: 'link text goes here',
      linkTarget: "main"
    };
  },

  getInitialState: function() {
    return {
      isTextShown: false
    };
  },

  render: function() {

    var text = this.props.linkText;

    var textContainer = this.state.isTextShown
      ? (
          <Link to={this.props.linkTarget} onClick={this._pageTransitionHandler} className="transition-text">{this.props.linkText}</Link>
        )
      : null
    ;

    var iconClass = this.state.isTextShown
      ? 'fa-circle-o'
      : 'fa-dot-circle-o'
    ;

    return (
      <div  className="toggle-mode-button">
        <div className="icon-container">
          <i onClick={this._toggleTextShown} className={"fa fa-3x " + iconClass}/>
          {textContainer}
        </div>
      </div>
    );
  },

  _toggleTextShown: function() {
    this.setState({isTextShown: !this.state.isTextShown});
  },

});

module.exports = ToggleModeButton;