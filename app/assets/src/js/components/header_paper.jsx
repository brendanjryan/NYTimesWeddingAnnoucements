var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var headerPaper = React.createClass({

  getDefaultProps: function() {
    return {
      title: "Put the Paper Title Here",
      authors: ['Larry', 'Curly', 'Moe']
    };
  },

  render: function() {
    var authorList = this.props.authors.map(function(a){
      return (<li className="author">{a}</li>);
    });

    return (
      <Row className="header-paper">
        <Col md={8} mdOffset={2}>
          <header>
            <h1 className="title">{this.props.title}</h1>
            <ul className="author-list">{authorList}</ul>
            <hr />
          </header>
        </Col>
      </Row>
    );
  }
});

module.exports = headerPaper;
