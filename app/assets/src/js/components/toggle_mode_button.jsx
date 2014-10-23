var React = require('react/addons');

var ToggleModeButton = React.createClass({


  proptypes: {
    currentPage: React.PropTypes.oneOf['analysis', 'thesis']
  },

  getDefaultProps: function() {
    return {
      currentPage: 'analysis'
    };
  },

  getInitialState: function() {
    return {
      isTextShown: false
    };
  },

  render: function() {

    var text = this._getPageTransitionText();

    var textContainer = this.state.isTextShown
      ? (
          <span onClick={this._pageTransitionHandler} className="transition-text">{text}</span>
        )
      : null
    ;
    return (
      <div  className="toggle-mode-button">
        <div className="icon-container">
          <i onClick={this._toggleTextShown} className="fa fa-2x fa-file-text-o"/>
          {textContainer}
        </div>
      </div>
    );
  },

  _toggleTextShown: function() {
    this.setState({isTextShown: !this.state.isTextShown});
  },

  _pageTransitionHandler: function() {
    this._toggleTextShown();

    // call callback from app
  },

  _getPageTransitionText: function() {
    if (this.props.currentPage === 'analysis') {
      return this._toThesisString;
    }
    if (this.props.currentPage === 'thesis') {
      return this._toAnalysisString;
    }
  },

  _toAnalysisString: "Read the Analysis",

  _toThesisString: "Read the Nerdy Stuff"



});

module.exports = ToggleModeButton;