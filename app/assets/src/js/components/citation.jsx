var React = require('react');
var $ = require('jquery');

var Popover = require('react-bootstrap').Popover;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;


var Citation = React.createClass({

  _DATAPATH: '/api/sources/',


  proptypes: {
    key: React.PropTypes.string.isRequired,
    notes: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      article: null
    };
  },

  componentDidMount: function() {
    $.get(this._DATAPATH + this.props.key, function(data) {
      if (this.isMounted()) {
        this.setState({'article': data});
      }
    }.bind(this));
  },

  render: function() {
    var anchorURL =  '#' + this.props.key + "_entry";
    var refURL = this.props.key + "_citation";

    return this.state.article
      ? (
         <OverlayTrigger
          className="citation"
          placement="right"
          delayShow={300}
          delayHide={150}
          positionTop={50}
          overlay={
            <Popover
              className="pop-over"
            >
              {this.state.article.title}
            </Popover>
          }
        >
        <span name={refURL} className="citation-holder">
          {this.props.children}
          <span className="citation-icon">
            <a href={anchorURL}>
              <i className="fa fa-bookmark-o"/>
            </a>
          </span>
        </span>
        </OverlayTrigger>
      )
      : null
    ;
  }

});

module.exports = Citation;