var React = require('react/addons');
var cx = React.addons.classSet;

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var headerSubsection = React.createClass({

  proptypes: {
    title: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    isSidebarShown: React.PropTypes.bool.isRequired,
    textType: React.PropTypes.oneOf(['quote'])
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
      'small': this.props.size === 'small',
      'quote': this.props.textType === 'quote'
    });

    var offset = this.props.isSidebarShown ?
      1 :
      3
    ;

    var titleText = this.props.title.split('\n').map(function(item){
      return <p>{item}</p>});
    return (

      <Row className="header-section">
        <Col md={6} sm={10} xs={10} xsOffset={1} smOffset={1} mdOffset={3}>
          <header>
             <h1 className={klass}>
              {titleText}
            </h1>
          </header>
        </Col>
      </Row>
    );
  }
});

module.exports = headerSubsection;
