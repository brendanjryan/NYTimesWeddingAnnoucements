var React = require('react/addons');
var cx = React.addons.classSet;

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var headerSubsection = React.createClass({

  proptypes: {
    title: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    isSidebarShown: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      size: 'medium'
    };
  },

  render: function() {
    var klass = cx({
      'title': true,
      'large': this.props.size === 'large',
      'medium': this.props.size === 'medium',
      'small': this.props.size === 'small'
    });

    var offset = this.props.isSidebarShown ?
      0 :
      2
    ;

    return (
      <Row className="header-section">
        <Col md={8} mdOffset={offset}>
          <header>
             <h1 className={klass}>
              {this.props.title}
            </h1>
          </header>
        </Col>
      </Row>
    );
  }
});

module.exports = headerSubsection;
