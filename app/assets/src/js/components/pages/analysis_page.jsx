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
      <div className="wrapper"/>
      <FullWidthHeader
      title={"How John Met Ann"}
      subtitle={
        "An Analysis of The New York Times Wedding Announcements"
      }
      />
      <ToggleModeButton
      linkTarget={'thesis'}
      linkText={"Read the Technical Paper"}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"analysis-first"}
      >
      <p>
      The New York Times Wedding Announcements, once referred to as “the single woman’s sports page” is one of the most interesting institutions in American Journalism. Nestled within the traditionally liberal New York Times Sunday edition, the Wedding Announcements serve as a social measuring stick defined by the social-conscious Times’ Editorial Board and the limited number of listings chosen for week’s publication.
      </p>
      </TextBlock>
      <SectionHeader
      title={'The Corpus'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
      <Chart
      chartRenderer={articleDates}
      title={"Article Publish Dates"}
      dataPath={'assets/data/article_dates.json'}
      chartId={'articleDates'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'article_dates_tooltip'}
      />
      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"analysis-second"}>
      <p>
      The cool thing about the collection of Wedding Announcements printed since 1981 is that their distribution is fairly even. This fact, when combined with the shockingly consistent writing style of the Announcements, makes for a very interesting and robust dataset. Following in the footsteps of many others, I took an analytical approach to answering the universal question, “what do the worlds most socially conscious people think is important?”.
      </p>
      </TextBlock>
      <SectionHeader
      title={'What\'s in a Name Anyways?'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <Chart
      chartRenderer={namesFirstBar}
      title={"The Most Frequently Published Names"}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirstBar'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"names-first"}
      >
      <p>
      When ranking the frequency of certain names in the Wedding Annooucements it is almost unsurpsising that the most common names are all anglo-saxon and very Christian in origin. In fact, one could easily mistake the list of the top 25 most frequent names as coming from the Times itself!
      </p>
      <p>
      We can dig a little deeper into this data and divide the most common names by their most common gender distinction. John’s and Ann’s all over the world can rejoice in knowing that they have the highest (numerical) chance of getting their name into the wedding announcements!
      </p>
      </TextBlock>

      <Chart
      chartRenderer={namesFirst}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirst'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />

      <SectionHeader
      title={'Boys are from Harvard, Girls are from Penn'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"schools-first"}
      >
      <p>
      Another trend that is very interesting to observe are the relationships between the most prestigious schools in the wedding announcements (as determined by the first study). By using advanced NLP and Machine learning techniques we are able to reconstruct the discrete relationships between multiple characters in a single wedding announcement.
      </p>
      <p>
      By exploring the patterns of "who married who" we are able to observe many interesting trends. Is the Harvard/Yale rivalry really that strong? Why is Stanford so choosy and Yale so liberal in which schools they marry?
      </p>
      <p>
      Hover over entries to explore the chart and draw your own conclusions!
      </p>
      </TextBlock>


      <Chart
      height={window.innerWidth * .333}
      width={window.innerWidth * .333}
      chartRenderer={marriages}
      dataPath={'assets/data/school_couples_colors.json'}
      chartId={'marriages'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"schools-second"}
      >
      <p>
      Building off of our last visualization it is also very interesting to observe the gender representation in unions from the Wedding Announcements. Each school is colored with it's most prevalent gender (blue for guys and pink for girls) if that school’s gender representation is in the upper 5% for all schools. An  "edge" between schools is colored with the most common gender for that directed relationship, with the thickness corresponding to how frequently such a union occurs. Once again, only outstanding relationships between universities are highlighted.
      </p>
      </TextBlock>

      <Chart
      height={window.innerWidth * .333}
      width={window.innerWidth * .333}
      chartRenderer={marriageGenders}
      dataPath={'assets/data/schools_couples_genders_links.json'}
      chartId={'marriagesGenders'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <SectionHeader
      title={"\"You got into Harvard Law?\"\n \"What? Like it's hard?\" \n\n- Legally Blonde"}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"selectivity-first"}
      >
      <p>

      Every year the independent organization Barrons ranks each American College and University on it's selectivity. This selectivity measure is largely based off the metrics of how many applicants the university receives in a given year versus how many applications are accepted by the university for its newest class. Using these rankings, Barrons categorizes schools into multiple categories, including “most competitive”, “highly competitive plus,” “highly competitive,” and "very competitive plus.”
      </p>
      <p>
      Viewing the New York Times Wedding Announcements as a "prestigious institution" (with less "graduates" than Harvard since 1981) we can apply a similar statistical model to determine the relative "prestige" of numerous institutions. Relative frequency was used for this measure as complete numerical data of number of applications rejected is (obviously) not available.
      </p>
      <p>
      Playing with the chart below we can observe that the "selectivity bands" determined by Barrons very closely mirror those determined by the Times. Is this coincidence? Which institutions surprise you?
      </p>
      </TextBlock>

      <Chart
      height={460}
      chartRenderer={schoolBubble}
      dataPath={'assets/data/schools_counts.json'}
      chartId={'schoolCounts'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'school_tooltip'}
      />

      <SectionHeader
      title={"\“To those of you who received honors, awards, and distinctions, I say, \‘Well done.’ To the ‘C’ students, I say, ‘You, too, can be president of the United States!\" \n\n- President George W. Bush"}
      size={'large'}
      textType={'quote'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"grad-first"}
      >
      <p>

      It would be paltry to discuss the prestige of America’s elite universities without also giving a nod to their finest graduates; those with Latin distinctions. In the modern GPA crazed academic environment it is almost no surprise that the Times has a startlingly high number of its constituents representing our Nation’s academic elite.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={honors}
      title={"Latin Graudation Honors Over the Years"}
      dataPath={'assets/data/honors.json'}
      chartId={'honors'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'honors_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"grad-second"}
      >
      <p>
      Notice the steady, and shockingly uniform, increases in Latin honors across all distinctions since 1990. This trend closely mirrors the steady creep of GPA’s across our nation’s lecture halls and seems to play into the same hand of many academics and institutions calling for stricter grading standards.
      </p>
      </TextBlock>





      <SectionHeader
      title={'Is 30 really the new 20?'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"age-first"}
      >
      <p>
      One of the biggest talking points in elite publications (such as the times) over the past century has been the supposed fact that  “the average age of people getting married is on the rise.” This statement may seem intuitively true, but is it supported by the data?
      </p>
      </TextBlock>

      <Chart
      chartRenderer={ageMarried}
      title={"Marriages by Eldest Spouse age"}
      dataPath={'assets/data/age_married.json'}
      chartId={'ageMarried'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'age_married_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"age-second"}
      >
      <p>
      In 1980 you were almost 4 times more likely to see a bride/groom pair in their early 20’s as you would in 2010. This sudden drop in young couples is mirrored by the meteoric rise of couples in their early 30’s, with those in their late 20’s hovering around the same general percentage over the years. I wonder what the chances of Jay-Z sitting on the Times’s editorial board are…
      </p>
      </TextBlock>

      <SectionHeader
      title={"\"I\'ve had plenty of jo-jobs; nothing I\'d call a career. Let me put it this way: I have an extensive collection of name tags and hairnets\"\n\n-Wayne\'s World "}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"jobs-first"}
      >
      <p>
      In 1980 you were almost 4 times more likely to see a bride/groom pair in their early 20’s as you would in 2010. This sudden drop in young couples is mirrored by the meteoric rise of couples in their early 30’s, with those in their late 20’s hovering around the same general percentage over the years. I wonder what the chances of Jay-Z sitting on the Times’s editorial board are…
      </p>
      </TextBlock>
      <Chart
      chartRenderer={careers}
      dataPath={'assets/data/careers.json'}
      chartId={'careers'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'careers_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"jobs-second"}
      >
      <p>
      In 1980 you were almost 4 times more likely to see a bride/groom pair in their early 20’s as you would in 2010. This sudden drop in young couples is mirrored by the meteoric rise of couples in their early 30’s, with those in their late 20’s hovering around the same general percentage over the years. I wonder what the chances of Jay-Z sitting on the Times’s editorial board are…
      </p>
      </TextBlock>

      <Chart
      title={'Jobs by Frequency'}
      chartRenderer={careersBar}
      dataPath={'assets/data/careers.json'}
      chartId={'careers_bar'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"conclusion"}
      >
      <p>
      did you enjoy reading this ...... bkadlfmaslkdfmalksfm
      </p>
      </TextBlock>


      <this.props.activeRouteHandler/>
      </div>
      );
}

});

module.exports = AnalysisPage;
