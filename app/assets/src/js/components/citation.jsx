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
              <span className="title">{this._formatArticle(this.state.article)}</span>
            </Popover>
          }
        >
        <span id={refURL} className="citation-holder">
          {this.props.children}
          <span className="citation-icon">
            <a href={anchorURL}>
              <i className="fa fa-info-circle"/>
            </a>
          </span>
        </span>
        </OverlayTrigger>
      )
      : null
    ;
  },

  _formatArticle: function(source) {
    var components = [];

    components.push(source.authors
      ? source.authors.join(', ') + '. '
      : ''
    );

    components.push(source.title
      ? "\"" + source.title + "\". "
      : ''
    );

    components.push(source.publish_date
      ? source.publish_date
      : ''
    );

    return components.join(' ');
  }

});

module.exports = Citation;