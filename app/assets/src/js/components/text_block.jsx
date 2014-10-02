var React = require('react');
React.addons = require('react-addons');

var cx = React.addons.classSet;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var textBlock = React.createClass({

  proptypes: {
    align: React.PropTypes.oneOf(['left', 'center', 'right']),
    role: React.PropTypes.oneOf(['standard', 'quote'])
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      role: 'standard'
    };
  },

  render: function() {
    var klass = cx({
      'text-block': true,
      'align-left': this.props.align === 'left',
      'align-right': this.props.align === 'right',
      'align-center': this.props.align === 'center',
      'text-block-standard': this.props.role === 'standard',
      'text-block-quote': this.props.role === 'quote'
    });

    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2} className={klass}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = textBlock;
