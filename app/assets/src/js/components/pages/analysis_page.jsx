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
var SparkLineInline = require('../sparkline_inline.jsx');

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
      The New York Times Wedding <Annotation content="<p>The best way to read these is in the print Sunday Edition of the Times but if saving trees is really your thing you can check them out <a href='http://www.nytimes.com/pages/fashion/weddings/index.html'>online</a> or on <a href='https://twitter.com/nytimesvows'>Twitter</a></p> ">Announcements,</Annotation> once referred to as
      <Annotation content="<p>As per Sara Jessica Parker's Character on Sex and the City</p> <p><a href='http://www.satctranscripts.com/2008/08/sex-and-city-season-3-episode-3.html#.VHKSWJPF_ZV'>Transcript</a></p>">“the single woman’s sports page”</Annotation>
      is one of the most interesting institutions in American Journalism. Nestled within the traditionally liberal New York Times Sunday edition; the Wedding Announcements, with their limited space and high-social visibility, serve as a modern day social measuring stick for America's elite. Those who are deemed "prestegious" enough by the Times's editorial board have their wedding broadcast to the Times's vast international readership, while those who are rejected most likely have to settle for some dreary inside page of their local newspaper. Over the years, as the New York Times has continued its tradition as the finest institution in American journalism, the Wedding Annoucements section has turned into a who's who of American Matrimony, with a plethora of celebrity and high-profile marriages gracing its pages.
      </p>
      </TextBlock>

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"analysis-second"}>
      <p>
      The cool thing about the collection of Wedding Announcements printed since 1981 is that their distribution is fairly even <SparkLineInline dataPath={"assets/data/article_dates.json"} />. This fact, when combined with their shockingly <Annotation content="<p>For example, look at the second paragraphs from two recent articles:</p><p>The bride, 33, will continue to use her name professionally. She is a lawyer in the law and policy section of the environment and natural resources division of the Justice Department in Washington. She graduated from Williams College in Williamstown, Mass., and received a law degree from New York University.</p><p>The bride, 39, will continue to use her name professionally. She is a family physician at the Harlem Health Center of the New York Hotel Trades Council. She graduated from the University of Michigan and received a medical degree from Nova Southeastern College of Osteopathic Medicine in Fort Lauderdale, Fla.</p>">consistent writing style</Annotation>, makes for a very interesting and robust dataset with very little "noise" or discrepencies. Following in the footsteps of <Annotation content="<p>Notable mentions include:</p><ul><li> <p>Todd Schneider's awesome <a href='http://toddwschneider.com/posts/when-harvard-met-sally-n-gram-analysis-of-the-new-york-times-weddings-section/'>n-gram analysis</a> of the Wedding Annoucements</p></li><li></li><p>The Atlantic Wire's <a href='http://www.thewire.com/entertainment/2011/12/odds-getting-new-york-times-wedding-section/45440/'>analysis</a> of your odds of getting into the wedding annoucements</p><li><li><p>Above the Law's <a href='http://abovethelaw.com/tag/legal-eagle-wedding-watch/'>Legal Eagle Wedding Watch</a></p></li></ul>">many others</Annotation>, I took an analytical approach to answering the universal question, “What do the worlds most socially conscious people think is important?”, and furthermore, how have the "important" characteristics which define America's elite changed over past half-century.
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
      When ranking the frequency of certain names in the Wedding Annoucements, it is almost cliche that the most common names are all anglo-saxon and very Christian in origin. With John, William, and Robert rounding out the top three most common names one would almost think that the Times's editors prefer grooms named after the <Annotation content="<p> In case you aren't quite brushed up on your English hisotry here's a handy <a href='http://en.wikipedia.org/wiki/List_of_English_monarchs'>wikipedia page</a>">English Monarchy!</Annotation>
      </p>
      <p>
      We can dig a little deeper into this data and divide the most common names by their most common gender indentification. John’s and Ann’s all over the world can rejoice in knowing that, if all else fails, they have the highest (numerical) chance of getting their name into the wedding announcements!
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
      Another trend that is very interesting to observe is the relationships between the most prestigious schools in the Wedding Announcements. By using advanced Natural Language Processing and Machine learning <Annotation content="If you want to geek out about this stuff hit the circular button in the upper-righthand corner and you will be magically whisked away to a more in-depth technical analysis!!!">techniques,</Annotation> we are able to reconstruct the discrete relationships between multiple characters in a single wedding announcement.
      </p>
      <p>
      By exploring the patterns of "who married who" we are able to observe many interesting trends. Is the Harvard/Yale rivalry really that strong? Why is Stanford so choosy and Yale so liberal in which schools they marry?
      </p>
      <p>
      Hover over the entries to explore the chart and draw your own conclusions!
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
      Building off of our last visualization, we can take note of the gender distribution in unions which span universities. Each university is colored with it's most prevalent gender (blue for guys and pink for girls) if that school’s gender representation is in the upper 5% for all schools in this study. An  "edge" between schools is colored with the most common gender for that directed relationship, with the thickness corresponding to how frequently such a union occurs. Once again, only outstanding relationships between universities are highlighted.
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
      textType={'quote'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"selectivity-first"}
      >
      <p>

      Every year, the <Annotation content="<p><a href='http://www.barronspac.com/'>These guys</p>">independent organization Barrons</Annotation>ranks each American College and University on it's selectivity. This selectivity measure is largely based off the metrics of how many applicants the university receives in a given year versus how many applications are accepted by the university for its newest class. Using these rankings, Barrons categorizes schools into multiple categories, including “most competitive”, “highly competitive plus,” “highly competitive,” and "very competitive plus.”
      </p>
      <p>
      Considering the New York Times Wedding Announcements as a "prestigious institution" (with less "graduates" than Harvard since 1981) we can apply a similar statistical model to determine the relative "prestige" of numerous institutions. Relative frequency was used for this measure as complete numerical data of number of applications rejected is (obviously) not available.
      </p>
      <p>
      Playing with the chart below we can observe that the "selectivity bands" determined by Barrons very closely mirror those determined by the Times. Is this coincidence? Which institutions surprise you?
      </p>
      <p style={{ "font-style": "italic" }}>
      N.B. These statistics do not reflect unattainable measures such as the percentage of a college's graduates who applied to be listed in the Times or live in the Greater New York City area.
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

      It would be paltry to discuss the prestige of America’s elite universities without also giving a nod to their finest graduates; those with Latin distinctions. In the modern,<Annotation content="<p>Even <a href='http://www.thecrimson.com/article/2005/4/21/honors-now-with-more-competition-the/'>Harvard</a> isn't immune to this plight.</p>"> GPA crazed,</Annotation> academic environment it is almost no surprise that the Times has a startlingly high number of its constituents representing our Nation’s academic elite.
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
      Notice the steady, and shockingly uniform, increases in Latin honors across all distinctions since 1990. This trend closely mirrors the <Annotation content="<p>Princeton has recieved <a href='http://www.nytimes.com/2010/01/31/education/31princeton.html'> a lot of flak</a> from it's studend body for trying to combat this epidemic</p>">steady creep</Annotation> of GPA’s across our nation’s lecture halls and seems to play into the same hand of many academics and institutions calling for stricter grading standards.
      </p>
      </TextBlock>

      <SectionHeader
      title={'30\s the new 20 - Jay-Z'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"age-first"}
      >
      <p>
      One of the <Annotation content="<p>A quick Google search turns up a plethora of results. Here is the highlight reel:</p><ul><li><p>Business Insider's <a href='http://www.businessinsider.com/why-people-get-married-later-2013-10'>Data Driven Analysis</a></p></li><li><p>The Times's own <a href='http://www.nytimes.com/1983/07/06/garden/americans-marrying-later.html'>analysis</a></p></li><li><p>Even <a href='http://www.cosmopolitan.com/sex-love/advice/a4717/i-do-or-do-i/'>Cosmo</a> puts their two cents in!</p></li></ul>">biggest talking points</Annotation> in elite publications (such as the Times) over the past century has been the supposed fact that  “the average age of people getting married is on the rise.” This statement may seem intuitively true, but is it supported by the data?
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
      It turns out so! In 1980 you were almost 4 times more likely to see a bride/groom pair in their early 20’s as you would in 2010. This sudden drop in young couples is mirrored by the meteoric rise of couples in their early 30’s, with those in their late 20’s hovering around the same general percentage over the years.
      </p>
      </TextBlock>

      <SectionHeader
      title={"\"I\'ve had plenty of jo-jobs; nothing I\'d call a career. Let me put it this way: I have an extensive collection of name tags and hairnets\"\n\n-Wayne\'s World "}
      size={'large'}
      textType={'quote'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"jobs-first"}
      >
      <p>
      No surprise, the lives and careers of those who make it into the Wedding Annoucements are quite far from that of the average joe. It is almost cliché that the 9-5 days of America’s elite are still disproportionally dominated by traditional administrative and financial careers and titles such as “associate” and “manager.” Even with the <Annotation content="<a href='http://online.wsj.com/articles/SB10001424052702303661404579180152676790032'>A classic Wall Street Journal Article</a>">great deal of discussion</Annotation> surrounding the flocking of “millennials"” from finance jobs to those in the technology sector, the degree that more traditional business titles, such as associate and manager, still dominate those which are native to tech (such as "engineer") is striking.
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
      Looking at the laid-out frequencies of “careers” mentioned in the Times, one statistic that really jumps out is career “students” coming in at a whopping 4th place! (most likely due to the strong draw of NYU and Columbia’s graduate programs).
      </p>
      </TextBlock>

      <Chart
      title={'Jobs by Frequency'}
      chartRenderer={careersBar}
      dataPath={'assets/data/careers.json'}
      chartId={'careers_bar'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <SectionHeader
      title={"\"We wanted to keep it intimate. She Said. Just family and close friends.\"\n \"And \"The New York Times\". How intimate is that?\n\n - Sex and the City"}
      size={'large'}
      textType={'quote'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"conclusion"}
      >
      <p style={{ "font-weight": "bold", "margin-top": "100px" }}>
      There are still infinitely more questions that still can be answered from this data. If you have any suggestions for further digging or would like to see more similar pieces please don’t hesitate to reach out!
      </p>
      <p>
      - Brendan Ryan
      </p>
      </TextBlock>


      <this.props.activeRouteHandler/>
      </div>
      );
}

});

module.exports = AnalysisPage;
