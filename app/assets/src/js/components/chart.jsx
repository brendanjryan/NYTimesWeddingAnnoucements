var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Chart = React.createClass({

  getDefaultProps: function() {
    return {
      chartId: 'chart',
      figureNum: '',
      footer: '',
      footerShown: false,
      isSidebarShown: React.PropTypes.bool.isRequired
    };
  },

  render: function() {
    var id = this.props.chartId;

    var footerText =
      'Figure ' +
      this.props.figureNum +
      ': ' +
      this.props.footer
    ;

    footer = this.props.footerShown ?
    <p className='footer'>{footerText}</p> :
    null;

    var offset = this.props.isSidebarShown ?
      0 :
      1
    ;

    return (
      <Row className="chart">
        <Col md={8} mdOffset={offset}>
          <div id={id} />
          {footer}
        </Col>
      </Row>
    );
  }
});

module.exports = Chart;
