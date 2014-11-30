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

    var sources = this.state.sources.map(function(source, ind){
      return(
        <BibSource source={source} index={ind} />
      );
    });

    return(
      <Row className={klass}>
        <Col md={6} sm={10} xs={10} xsOffset={1} smOffset={1} mdOffset={3}>
          <ul>
            {sources}
          </ul>
        </Col>
      </Row>
    );
  }

});

module.exports = Bibliography;