/** @jsx React.DOM */

var React = require('react/addons');

var CodeBlock = require('../code_block.jsx');
var Content = require('../content.jsx');
var Annotation = require('../annotation.jsx');
var TextBlock = require('../text_block.jsx');
var PaperHeader = require('../header_paper.jsx')
var SectionHeader = require('../header_section.jsx');
var Chart = require('../chart.jsx');
var Citation = require('../citation.jsx');
var Bibliography = require('../bibliography.jsx');
var ToggleModeButton = require('../toggle_mode_button.jsx');

var test = require('../../charts/test.js');
// data vis imports
var schoolBubble = require('../../charts/school_counts');
var marriages = require('../../charts/marriages.js');

var marriageLinks = require('../../charts/marriage_links.js');
var marriageGenders = require('../../charts/marriage_genders.js');
var AnalysisPage = React.createClass({



  componentDidMount: function() {
 // THESE SHOULD BE MOVED TO THE ANALYSIS PAGE COMPONENT
  // charts have the API (mount, data, width, height)
  schoolBubble.run(
    '#schoolCounts',
    'assets/data/schools_counts.json',
    940,
    600
    );

  marriages.run(
    '#marriages',
    'assets/data/schools_couples.json',
    480
    );

  marriageLinks.run(
    '#marriageLinks',
    'assets/data/schools_couples_genders_links.json',
    400
    );

  marriageGenders.run(
    '#marriageGenders',
    'assets/data/schools_couples_genders_links.json',
    400
    );
},

proptypes: {
},

getInitialState: function() {
  return {
    isSidebarShown: false
  };
},

onSideBarToggle: function() {
  this.setState({'isSidebarShown': !this.state.isSidebarShown});
},

render: function() {
  return(
    <div>
    <ToggleModeButton
    linkTarget={'thesis'}
    linkText={"Read the Nerdy Stuff"}
    />

    <TextBlock>
    <p>
    Every year the independant organization Barrons ranks each American College and University on it's selectivity. This selectivity measure is largely based off the metrics of how many applicants the university recieves in a given year versus how many applications are accepted by the university for its newest class. Using these rankings, Barrons categorizes schools into multiple categories, including “most competitive,”, “highly competitive plus,”, “highly competitive,” and "very competitive plus.”

    </p>
    <p>
    Viewing the New York Times Wedding Announcements as a "prestegious institution" (with less 'graudates' than Harvard since 1981 ) we can apply a similar statistical model to determine the relative "presteige" of numerous institutions. Relative frequency was used for this measure as complete numerical data of applications rejected is (obviously) not available.
    </p><p>
    Playing with the chart below we can observe that the "selectivity bands" determined by Barrons very closely mirror those determined by the Times. Is this coincidence? Which institutions surprise you?
    </p>
    </TextBlock>

    <Chart
    chartId={'schoolCounts'}
    isSidebarShown={this.state.isSidebarShown}
    tooltipId={'school_tooltip'}
    />

    <SectionHeader
    title={'Marriages Across Universities'}
    size={'large'}
    isSidebarShown={this.state.isSidebarShown}
    />
    <TextBlock>
    <p>
    Another trend which is very interesting to observe are the relationships between the most pretegious schools in the wedding annoucements (as determiend by the first study). By using advanced NLP and Machine learning techniques we are able to reconstruct the discrete relationships between multiple characters in a single wedding announcement.
    </p>
    <p>
    By exploring the patterns of "who married who" we are able to observe many interesting trends. Is the Harvard/Yale rivalry really that strong? Why is Stanford so choody and Yale so liberal in which schools they marry?
    </p>
    <p>
    Hover over entries to explore the chart and draw your own conclusions!
    </p>
    </TextBlock>

    <Chart
    chartId={'marriages'}
    isSidebarShown={this.state.isSidebarShown}
    />

    <SectionHeader
    title={'Marriages by Gender Distributions'}
    size={'large'}
    isSidebarShown={this.state.isSidebarShown}
    />
    <TextBlock>
    <p>
    Building off of our last visualization it is also very interesting to observe the gender representation in unions from the Wedding Announcements. Each school is colored with it's most prevelant gender (blue for guys and pink for girls) and each 'edge' between schools is colored with the most common gender for that directed relationship, with the thickness corresponding to how frequently such a union occurs.
    </p>
    <p>

    </p>
    </TextBlock>

    <Chart
    chartId={'marriageLinks'}
    isSidebarShown={this.state.isSidebarShown}
    tooltipId={'marriage_tooltip'}
    />

    <SectionHeader
    title={'Marriages by Genders'}
    size={'large'}
    isSidebarShown={this.state.isSidebarShown}
    />

    <Chart
    chartId={'marriageGenders'}
    isSidebarShown={this.state.isSidebarShown}
    tooltipId={'marriage_genders_tooltip'}
    />

    <this.props.activeRouteHandler/>
    </div>
    );
}

});

module.exports = AnalysisPage;
