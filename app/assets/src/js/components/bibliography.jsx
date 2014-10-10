var React = require('react/addons');
var $ = require('jquery');

var BibSource = require('./bibliography_source.jsx');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var cx = React.addons.classSet;

var Bibliography = React.createClass({
   _DATAPATH: '/api/sources/',

   proptypes: {
    isSidebarShown: false
   },

  getInitialState: function() {
    return {
      sources : [],
    };
  },

  componentDidMount: function() {
    $.get(this._DATAPATH, function(data) {
      if (this.isMounted()) {
        this.setState({'sources': data.sources});
      }
    }.bind(this));
  },

  render: function() {

    var klass = cx({
      'bibliography': true,
    });

    var offset = this.props.isSidebarShown ?
      0 :
      2
    ;

    var sources = this.state.sources.map(function(source){
      return(
        <BibSource source={source} />
      );
    });

    return(
      <Row className={klass}>
        <Col md={8} mdOffset={offset}>
          <ul>
            {sources}
          </ul>
        </Col>
      </Row>
    );
  }

});

module.exports = Bibliography;