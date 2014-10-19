var React = require('react/addons');

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
      isSidebarShown: React.PropTypes.bool.isRequired,
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

    var tooltip = this.props.tooltipId
    ? <div
    id={this.props.tooltipId} i
    className={"chart-tooltip"}
    />
    : null
    ;

    return (
      <Row className="chart">
      <Col md={10} sm={10} xs={10} xsOffest={offset} smOffset={offset} mdOffset={offset}>
      <div id={id} />
      {footer}
      </Col>
      {tooltip}
      </Row>
      );
}
});

module.exports = Chart;
