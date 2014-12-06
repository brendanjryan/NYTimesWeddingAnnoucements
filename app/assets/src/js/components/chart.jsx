var React = require('react/addons');
var $ = require('jquery');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Chart = React.createClass({

  proptypes: {
    isSidebarShown: React.PropTypes.bool.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    chartRenderer: React.PropTypes.func.isRequired,
    dataPath: React.PropTypes.string.isRequired,

    chartId: React.PropTypes.string,
    figureNum: React.PropTypes.number,
    footer: React.PropTypes.string,
    footerShown: React.PropTypes.bool,
    title: React.PropTypes.string
  },

  getDefaultProps: function() {
    var mult = _getMulti();
    return {
      chartId: 'chart',
      figureNum: '',
      footer: '',
      footerShown: false,
      isSidebarShown: false,
      width: window.innerWidth * mult,
      height: 400
    };
  },

  componentDidMount: function() {
    if(_shouldShowChart()) {
      this.props.chartRenderer.run(
        '#' + this.props.chartId,
        this.props.dataPath,
        this.props.width,
        this.props.height
      );
    }
  },

  render: function() {
    var id = this.props.chartId;

    var footerText =
    'Figure ' +
    this.props.figureNum
    ': ' +
    this.props.footer
    ;

    footer = this.props.footerShown
      ? <p className='footer'>{footerText}</p>
      : null
    ;


    var tooltip = this.props.tooltipId
      ? <div
        id={this.props.tooltipId}
        className={"chart-tooltip"}
      />
      : null
    ;

    var chart = _shouldShowChart()
      ? (
        <div>
         <header>{this.props.title}</header>
            <div id={id} ref="chart" />
            {footer}
            </div>
      )
      : <p className="warning"> Please view on a larger device to see charts </p>
    ;

    return (
      <Row className="chart">
        <Col md={8} sm={8} xs={8} xsOffset={2} smOffset={2} mdOffset={2}>
        {chart}
        </Col>
        {tooltip}
      </Row>
    );
}
});

function _isBreakpoint(alias) {
  return $( window ).width() < 600;
}

function _shouldShowChart() {
  if (_isBreakpoint('sm')) {
    return false;
  }
  return true;
}

function _getMulti() {
  if (_isBreakpoint('sm') || _isBreakpoint('xs')){
    return 0.66667;
  }
  else return 0.5;
}

module.exports = Chart;
