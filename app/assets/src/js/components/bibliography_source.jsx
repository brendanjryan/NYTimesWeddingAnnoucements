var React = require('react/addons');

var cx = React.addons.classSet;

var BibSource = React.createClass({

  proptypes: {
    source: React.PropTypes.string.isRequired,
    idnex: React.PropTypes.number.isRequired
  },


  render: function() {
    var klass = cx({
      'bib-source': true,
    });

    var source = this.props.source;
    if (!source) {
      return null;
    }
    var citationString = '';

    var authorString = source.authors
      ? source.authors.join(', ') + '. '
      : null;
    ;

    var titleString = source.title
      ? source.title + '. '
      : ''
    ;

    var publishLocString = source.publish_location
      ? source.publish_location + ', '
      : ''
    ;

    var publisherString = source.publisher
      ? source.publisher + ','
      : ''
    ;

    var publishDateString = source.publish_date
      ? source.publish_date
      : ''
    ;

    var citationString = authorString + titleString + publishLocString + publisherString + publishDateString + '.';

    var anchorURL = "#" + source.key + "_citation";
    var refURL = source.key + "_entry";

    return(
      <li name={refURL} className={klass}>
        <a href={anchorURL}>[{this.props.index}]</a><span>{citationString}</span>
      </li>
    );
  }

});

module.exports = BibSource;