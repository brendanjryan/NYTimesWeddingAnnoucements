/** @jsx React.DOM */

var React = require('react/addons');

// COMPONENTS
var CodeBlock = require('../code_block.jsx');
var Content = require('../content.jsx');
var Annotation = require('../annotation.jsx');
var TextBlock = require('../text_block.jsx');
var PaperHeader = require('../header_paper.jsx')
var SectionHeader = require('../header_section.jsx');
var Chart = require('../chart.jsx');
var Citation = require('../citation.jsx');
var Bibliography = require('../bibliography.jsx');
var ToggleModeButton  = require('../toggle_mode_button.jsx');
var FullWidthHeader = require('../full_width_header.jsx');

// CHARTS
var articleDates = require('../../charts/article_dates');
var marriages = require('../../charts/marriages');
var marriageLinks = require('../../charts/marriage_links');
var marriageGenders = require('../../charts/marriage_genders');
var schoolBubble = require('../../charts/school_counts');
var ageMarried = require('../../charts/age_married');
var housesOfWorship = require('../../charts/houses_of_worship');
var namesFirst = require('../../charts/names_first');
var honors = require('../../charts/honors');
var careers = require('../../charts/careers');
var commonSchools = require('../../charts/common_schools');
var careersBar = require('../../charts/careers_bar');
var namesFirstBar = require('../../charts/names_first_bar');

var AnalysisPage = React.createClass({

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
      <FullWidthHeader
        title={"How John Met Ann"}
        subtitle={
          "An Analysis of The New York Times Wedding Announcements"
        }
      />
      <ToggleModeButton
      linkTarget={'thesis'}
      linkText={"Read the Nerdy Stuff"}
      />

    <SectionHeader
      title={'The Corpus'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

     <Chart
      width={900}
      height={400}
      chartRenderer={articleDates}
      dataPath={'assets/data/article_dates.json'}
      chartId={'articleDates'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'article_dates_tooltip'}
      />

      <TextBlock
       isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"analysis-first"}
      >

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
      width={940}
      height={460}
      chartRenderer={schoolBubble}
      dataPath={'assets/data/schools_counts.json'}
      chartId={'schoolCounts'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'school_tooltip'}
      />

      <SectionHeader
      title={'Marriages Across Universities'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
      <TextBlock
       isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"analysis-second"}
      >
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
      width={950}
      height={450}
      chartRenderer={commonSchools}
      dataPath={'assets/data/schools_counts_common.json'}
      chartId={'commonSchools'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'common_schools_tooltip'}
      />


      <Chart
      width={480}
      height={490}
      chartRenderer={marriages}
      dataPath={'assets/data/school_couples_colors.json'}
      chartId={'marriages'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <SectionHeader
      title={'Marriages by Gender Distributions'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
      <TextBlock
        isSidebarShown={this.state.isSidebarShown}
        sidebarToggleHandler={this.onSideBarToggle}
        key={"analysis-third"}
      >
      <p>
      Building off of our last visualization it is also very interesting to observe the gender representation in unions from the Wedding Announcements. Each school is colored with it's most prevelant gender (blue for guys and pink for girls) and each 'edge' between schools is colored with the most common gender for that directed relationship, with the thickness corresponding to how frequently such a union occurs.
      </p>
      </TextBlock>

      <SectionHeader
      title={'Marriages by Genders'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <Chart
      width={400}
      height={400}
      chartRenderer={marriageGenders}
      dataPath={'assets/data/schools_couples_genders_links.json'}
      chartId={'marriageGenders'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'marriage_genders_tooltip'}
      />

      <SectionHeader
      title={'Ages Married'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <Chart
      width={800}
      height={400}
      chartRenderer={ageMarried}
      dataPath={'assets/data/age_married.json'}
      chartId={'ageMarried'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'age_married_tooltip'}
      />

      <SectionHeader
      title={'Houses of Worship'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <Chart
      width={800}
      height={400}
      chartRenderer={housesOfWorship}
      dataPath={'assets/data/churches.json'}
      chartId={'housesOfWorship'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'worship_houses_tooltip'}
      />

      <SectionHeader
      title={'Most Common First Names'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

     <Chart
      width={900}
      height={500}
      chartRenderer={namesFirstBar}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirstBar'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />

      <Chart
      width={940}
      height={400}
      chartRenderer={namesFirst}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirst'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />


      <SectionHeader
      title={'Graduation Honors'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <Chart
      width={940}
      height={400}
      chartRenderer={honors}
      dataPath={'assets/data/honors.json'}
      chartId={'honors'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'honors_tooltip'}
      />

      <SectionHeader
      title={'Most Common Jobs'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

    <Chart
      width={940}
      height={480}
      chartRenderer={careers}
      dataPath={'assets/data/careers.json'}
      chartId={'careers'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'careers_tooltip'}
      />

      <Chart
      width={900}
      height={500}
      chartRenderer={careersBar}
      dataPath={'assets/data/careers.json'}
      chartId={'careers_bar'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <this.props.activeRouteHandler/>
      </div>
      );

}

});

module.exports = AnalysisPage;
