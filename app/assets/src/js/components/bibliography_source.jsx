var React = require('react/addons');

var cx = React.addons.classSet;

var BibSource = React.createClass({

  proptypes: {
    source: React.PropTypes.string.isRequired,
  },


  render: function() {

    var klass = cx({
      'bib-source': true,
    });

    var source = this.props.source;
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

    return(
      <li className={klass}>
        {citationString}
      </li>
    );
  }

});

module.exports = BibSource;