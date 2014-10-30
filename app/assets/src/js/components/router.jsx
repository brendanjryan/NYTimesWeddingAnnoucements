/** @jsx React.DOM */

var React = require('react/addons');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;

var App = require('./app.jsx');
var AnalysisPage = require('./pages/analysis_page.jsx');
var ThesisPage = require('./pages/thesis_page.jsx');


// setup oracle


var routes = (
  <Routes location="history">
    <Route path="/" handler={App}>
      <Route name="analysis" handler={AnalysisPage} />
      <Route name="thesis" handler={ThesisPage} />
      <DefaultRoute handler={AnalysisPage} />
    </Route>
  </Routes>
);

module.exports = routes;