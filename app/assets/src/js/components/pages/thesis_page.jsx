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
var ToggleModeButton = require('../toggle_mode_button.jsx');

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
var articleDatesBar = require('../../charts/article_dates_bar');

var ThesisPage = React.createClass({

  onSideBarToggle: function(){
    this.setState({isSidebarShown: !this.state.isSidebarShown});
  },

  getInitialState: function() {
    return {
      isSidebarShown: false
    };
  },

  render: function() {
    return (
      <div>
      <PaperHeader
      title={"An Analysis of the New York Times Wedding Announcements"}
      authors={["Brendan Ryan"]}
      />
      <ToggleModeButton
      linkTarget={'analysis'}
      linkText={"Read the Analysis"}
      />

      <SectionHeader
      title={'Abstract'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"abstract_first"}
      >
      <p>
      The art and science of constructing modern, interactive data visualizations is a complex endeavor that oftentimes requires multiple diverse, and often very specialized, skillsets and processes. In our study, we use an in-depth analysis of the New York Times’ Wedding Announcement listings since 1981 as a lens to explore and discuss many of the techniques and challenges of constructing a modern complex data-driven research document. We touch upon topics in data mining, natural language processing, and user-interface and interaction architecture. In addition, we also present flow, a framework for writing modern, data-driven research documents for the web.
      </p>
      </TextBlock>

      <SectionHeader
      title={'Introduction'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"intro_first"}
      >
      <p>
      The dawn of the modern “information age” has unlocked immense possibilities for those wishing to conduct quantitative, data heavy, analysis and studies. From publicly released government datasets, to corpuses “scraped” and collected from the web, researchers and curious minds now have access to millions of data-sets and data-points at a an unprecedented granularity.
      </p>
      <p>
      Forward thinking journalists have latched onto these datasets and, over the course of the last decade, a new breed of “data driven” journalism has emerged. Looking beyond the traditional data visualizations tools of charts and graphs, teams at leading publications such as the New York Times and The Guardian have pushed the boundaries of interactive data visualization, oftentimes creating pieces which are equal parts art as they are journalism. </p>
      <p>
      In order to gain an in-depth insight into the novel computational and interface-design challenges that pertain to such data-driven studies, we took a deep drive into one of these data sets. Our study took a longitudinal, bottom-up approach to the process of constructing a data-driven research study with rich visualizations. From data collection and mining, to the eventual creation of a rich publication in the manner of the Guardian or the New York Times, our study touched upon every possible part of the “data-analysis pipeline.” Our process and unique challenges for each section of the pipeline are discussed in the following sections.
      </p>
      </TextBlock>


      <SectionHeader
      title={'Data Mining & Processing'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"data_first"}>
      <p>
      The dataset for this study is comprised of 55,829 articles that appeared in the New York Times from 1981 to 2013. Each of these articles contains its full published text which appeared in the Times, as well as a multitude of meta-data provided by the Times when the articles were archived at a later data. Over the thirty-two years that this dataset spans, the number of articles per year is relatively consistent – a trait which enables our algorithms to reliably extract longitudinal time-based analysis.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={articleDatesBar}
      dataPath={'assets/data/article_dates.json'}
      chartId={'articleDatesBar'}
      tooltipId={'article_dates_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"data_second"}>
      <p>
      To assemble this dataset a collection of <Citation key="mining_survey">“web scrapers”</Citation> which targeted the New York Times’ archive pages were written. Upon manual <Citation key="vis_extract">inspection of the pages</Citation>, database schemas and “models” for the articles to be collected were formulated. The generic web scraping framework Scrapy was then used to fetch webpages from the New York Times, parse them, and populate them according to the already formulated models and parsing rules. These models and parsing rules were augmented over the course of the study to adapt to the different data structures and page layouts of older articles or those published under different editorial boards. In addition, in order to speed up the collection of resources and subvert the network of the Times, scraping and parsing jobs were run over a distributed system of worker nodes, which wrote to a shared MongoDB database. MongoDB was chosen in leiu of a traditional relational database because of the unique “schema-less” properties of mongDB’s data structure. Because MongoDB does not enforce a strict schema for the data that our scrapers were collecting, we were able to intuitively write parsing rules that targeted the articles as they were represented on the New York Times webpage, not as they appeared in the databases static tables.
      </p>
      <p>
      Using the same model based approach; this “web scraping” framework was then utilized to collect supplementary datasets that augmented the corpus of articles gathered from the Times. The generic programming model and shared parsers and data cleaning tools across scraping jobs made constructing a robust, fault tolerant distributed web scraper a <Citation key="semantic_scraping">trivial task</Citation>.
      </p>

      <p>
      Once the complete corpus of articles was collected a complete dump of the database was made and the data was normalized. For each of the articles, the complete body was augmented with a parallel version that was stemmed and stripped of all stop words. In addition to this, finer adjustments were made to the data such as normalizing whitespace and dates in order to ensure <Citation key="text_tapping'">consistency across the corpus</Citation>.
      </p>
      </TextBlock>


      <SectionHeader
      title={'Natural Langue Pipeline'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"nlp_first"}
      >
      <p>
      To efficiently process the large corpus of articles, a robust suite of data-processing tools was developed. This toolkit relies heavily on principles from machine learning and natural language processing in order to extract deeper analysis from the articles and exploits the semi-structured nature of the corpus.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={namesFirstBar}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirstBar_first'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_bar_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"nlp_second"}
      >
      <p>
      The first of such tools developed was a gender parser and tagger groomed specifically for the Wedding Announcements corpus. While moderate success was achieved through the use of gazetteers and traditional lexicons such as <Citation key="wordnet">Wordnet</Citation> (a success rate of 85%) was achieved, there was still much room for improvement. Exploiting the shallow diversity of names represented in the Times and the uniform sentence structure of the <Citation key="ner_gazetteers">articles</Citation>, the gender classifier was trained on a small corpus of 100 randomly selected names manually chosen from the wedding announcements. Feeding this corpus back into our Bayesian gender classifier increased accuracy across the corpus to 92%, hinting at the potential benefits of using locally trained classifiers for semi-structured text-based <Citation key="ling_patterns">corpuses</Citation>
      </p>
      </TextBlock>


      <Chart
      chartRenderer={namesFirst}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirst'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"nlp_third"}
      >
      <p>
      As the study progressed, one attribute of the data that became of increasing interest was the Universities and Institutions of Higher Education that are tied to those featured in the Wedding Announcements. To retrieve this information a parsing tool was developed which specifically targeted the names of American Colleges and <Citation key="ner_diverse">Universities</Citation>. Our tool used the list of Barron’s top ranked universities as a gazetteer and was complemented by NLTK as a tool for extracting named entities from text-based corpuses using a prescribed seed <Citation key="multi_bootstrap">database</Citation> (or gazetteer). This tool, aided greatly by the fact that college and university names are generally capitalized in a corpus and are thereby recognized quite easily by generic Named Entity recognition tools and algorithms, was able to generate accurate classifications and detections of American Colleges and <Citation key="ner_challenges">Universities</Citation>.
      </p>
      <p>
      Lastly, using design principles very similar to those used for the construction of the previous lexer, a system for detecting and tagging individuals careers and occupations was developed. Occupations, unlike most Named Entities, does not large corpus of tagged items residing in a publicly available <Citation key="ner_gazetteers">gazetteer</Citation> or dictionary. Hence, in order to construct a reliable system for detecting occupations and careers from the database of collected articles, a novel and reliable system needed to be <Citation key="tweets">constructed</Citation> (Named Entity Recognition in Tweets: An Experimental Study).
      </p>
      <p>
      To accurately recognize careers and occupations as Named Entities, the lexer exploited the uniform sentence structure and verbiage of the Wedding Announcements via the use of semi-structured regular expression <Citation key="semi_structured">statements</Citation>. Beginning with a regular expression constructed by hand after manually examining select articles from the corpus the classifier began, the classifier applied the regular expressions to the corpus and made fine tweaks to their specificity after cross referencing results.
      </p>
      <p>
      Our starting regular expression was “(is)? (a|an)(?P_career_\s\S+){1,3} (with|at)” and our parser added and dropped the prefix and suffix quantifiers if the result matched was similar to other careers or occupations matched thus far. Unlike previous lexers, this lexer scanned the entire corpus and text of the article, using as much information as possible to strengthen the classifier and the judgments which it made. This collected data was then used to supplement the article database and construct standalone visualizations.
      </p>
      </TextBlock>


      <Chart
      chartRenderer={careers}
      dataPath={'assets/data/careers.json'}
      chartId={'careers'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'careers_tooltip'}
      />

      <SectionHeader
      title={'Interface Architecture'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"interface_first"}
      >
      <p>
      To present this data and analysis in a modern and informative manner an interactive website was constructed. The primary goal of the website was to be emulate the classic research paper format while being clean, responsive, and respective of the way which text-based media is consumed on the web. In addition, because of the choice of the web as the primary publishing platform, a secondary goal was to support rich, interactive visualizations, which would stand in the place of the static, and oftentimes, convoluted, graphs and charts, which are commonplace in standard research papers. Lastly, the third goal of our web infrastructure is the be robust and not deviate far from the traditional workflow of writing a standardized paper, with hopes of eventually open sourcing this framework for future use and development.
      </p>
      <p>
      With these three goals in mind, we present flow, a generic framework for constructing interactive, data-driven research papers that are optimized for the web. Keeping the three goals of the framework in mind, flow’s architecture and writing style very closely emulates that of traditional research papers. Flow exploits the fact that the standard paper is essentially made of repeating and reused visual and textual elements and provides
      </p>
      </TextBlock>

      <Chart
      chartRenderer={ageMarried}
      dataPath={'assets/data/age_married.json'}
      chartId={'ageMarried'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'age_married_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"interface_second"}
      >
      <p>
      standardized interface components to emulate these elements. These elements are designed to abstract the difficult, and often confusing, elements of formatting a paper, such as text sizes, margins, and differing paddings. In addition, these elements also abstract away the complexities which are inherited by choice of the web as a publishing platform, such as proper formatting for different screen sizes and fast, consistent, rendering speeds. Components are rendered completely on the client-side (web browser) and, in it’s current implementation, this tool is designed to be used by computer scientists and those who are already familiar with programming tools. Unlike industry-standard tools such as latex, flow uses a domain-specific syntax that should not feel foreign to those who have already written web sites. For example, here is a component for rendering a section header in a paper:
      </p>

      </TextBlock>
      <CodeBlock
      isSidebarShown={this.state.isSidebarShown}
      codePath={'src/js/charts/honors'}
      >
      {String(require('../../examples/header_example.jsx').run)}
      </CodeBlock>

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"interface_third"}
      >
      <p>
      Ultimately, there were many libraries and programming methodologies to choose from as the basis for the composition framework. As writing standardized web-components is not a trivial task unto itself it was decided that flow’s components would be build upon another open source libraries foundation. Weighing the extensibility benefits of Google’s Polymer Library as well as the novel, functionally based, programming model of Facebook’s React library it was ultimately decided that React would serve as the foundation for Flow’s components.
      </p>
      <p>
      Upon prototyping, it became readily apparent that organizing flow’s programming model in a functional manner would result in immense gains in terms of both developer productivity and rendering performance. Each component, or “element”, in flow models a high-level user-interface component in a completely stateless and <Citation key="elm">declarative manner</Citation>. Because of the property of each of these elements maintaining their own state, the composition workflow supported by flow is very declarative and simple to debug. Using principles from “Functional Reactive Programming, ” each component only listens to “events” from high-level elements and can only mutate is state in response to such events (A survey on Reactive Programming). This principle creates a hierarchical data-flow that naturally cascades down from parent elements to their children. In addition, since each element maintains only it’s own state, and renders interface elements in a purely functional manner, this method of render interface elements is <Citation key="constraint">very fast</Citation>. Only those elements whose state is affected as the result of interactions with the document are re-rendered, greatly cutting down on “re-flows” or other very slow and costly operations that have plagued web development for the last <Citation key="adap_frp">century</Citation>.
      </p>
      <p>
      On drawback of this architecture is that, in the case of large trees of UI components, parent elements oftentimes become “bloated” difficult to manage. One of the main criticisms of interface architectures designed in this manner is that parent components, or those near the “root” of the UI tree, oftentimes carry too much information or “state” for their children. Besides making the composition experience much more difficult for programmers, this conundrum also slows down the speed of the entire page, essentially negating the gains made through the use of closures and lazy-evaluation.
      </p>
      <p>
      Flow circumvents this issue by exploiting the classical structure of a traditional research paper and using a very shallow component tree that manages its “state” from a single global data store. Each primary interface is the direct descendant of a single “application,” or “paper” element that serves as the container for the entire document as well as the global state manager and arbiter. When a user interacts with the webpage or any animations occur, this high-level store determines the proper action to take and properly propagates the new state of the interface to its child elements. As the individual page elements do not maintain their own state and are immutable by default, this store acts as a “single source of truth” within the document and hence unlocks great gains in terms of testability and transparency for the <Citation key="cbv_dataflow">overall architecture</Citation>of the document.
      </p>
      <p>
      Several principles from this functional and component based grammar were also inherited by flow’s approach to handling rich, interactive, data visualizations. Realizing that data visualization is a complex and oftentimes artistic pursuit, flow makes no constraints as to how visualization code is written. Flow simply demands all visualization be structured to pertain to a standardized programming interface that provides the minimal functionality to allow visualization to coexist with the rest of the interface elements. In essence, flow implements a layer of abstraction which separates the fluid components of data visualizations, such as their animations and rendering, from their static attributes, such as their <Citation key="vis_design_patterns">data model and positioning</Citation>.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={namesFirstBar}
      title={"The Most Frequently Published Names"}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirstBar_second'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"interface_fourth"}
      >
      <p>
      By combining the static abstractions of React with the extensibility of generic data visualization frameworks (such as <Citation key="d3">D3</Citation>), flow attempts to strike a balance between declarative, but restrictive, visualization environments and those which are sacrifice extensibility and flexibility at the <Citation key="protivis">cost of programming power</Citation>.
      </p>
      </TextBlock>



      <SectionHeader
      title={'Visualization Grammar'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />


      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"vis_first"}
      >
      <p>
      Special care was taken to ensure that the visualizations produced for this analysis were both informative and captivating, while still maintaining a clean visual style and not resorting to visual gimmicks to attain the viewer’s attention. Strongly influenced by the work of the New York Time’s Visualization team the visualizations used in this analysis were crafted in a clean fashion that respected whitespace and used bold and distinctive colors to differentiate between different data-points.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={ageMarried}
      dataPath={'assets/data/age_married.json'}
      chartId={'ageMarried_second'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'age_married_tooltip'}
      />

      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"vis_second"}
      >
      <p>
      Because of the variety of visualization types and data-scales, choosing a color scheme is a very difficult task. Traditional monotone scalar based color schemes perform very well for scalar data but are not good for quantitative comparisons. In contrast, quantitative scales that utilize a variety of colors can often introduce extraneous assumptions about the nature of the data and the <Citation key="guidelines">analysis</Citation>. In order to address both of these concerns, our visualizations use two different color scales. The first is a gray-based scale that uses five shades of gray to differentiate between distinct groups while not deriving any assumptions from the color or shade used for a certain category. The second of such scales is a five shade quantitative scale based off of the ColorBrewer system developed for producing data-sensitive color schemes. In cases where this scale was too vibrant, a tertiary scale is also used which reduces the saturation of each color to 60 percent of its original value, taking care to maintain the visual contrast between each of the quantitative categories.
      </p>
      </TextBlock>

      <Chart
      chartRenderer={namesFirstBar}
      dataPath={'assets/data/names_first.json'}
      chartId={'namesFirstBar_second'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'names_tooltip'}
      />


      <Chart
      chartRenderer={schoolBubble}
      dataPath={'assets/data/schools_counts.json'}
      chartId={'schoolCounts'}
      isSidebarShown={this.state.isSidebarShown}
      tooltipId={'school_tooltip'}
      />
      <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"vis_third"}
      >
      <p>
Building off of the programming methodology for visualizations discussed in the last section, each of the visualization used this workflow was constructed using Mike Bostock’s <Citation key="d3">D3 library</Citation>. As many of the visualizations shared a common theme and code structure, they were written in a generic and reusable manner adhering to  a single interface for insertion into the paper (http://bost.ocks.org/mike/chart/).
</p>
</TextBlock>

<CodeBlock
isSidebarShown={this.state.isSidebarShown}
codePath={'src/js/charts/honors'}
>
{String(require('../../charts/honors').run)}
</CodeBlock>

<Chart
width={window.innerWidth * .333}
height={window.innerWidth * .333}
chartRenderer={marriageGenders}
dataPath={'assets/data/schools_couples_genders_links.json'}
chartId={'marriageGenders'}
isSidebarShown={this.state.isSidebarShown}
tooltipId={'marriage_genders_tooltip'}
/>

<SectionHeader
title={'Summary'}
size={'large'}
isSidebarShown={this.state.isSidebarShown}
/>

<TextBlock
isSidebarShown={this.state.isSidebarShown}
sidebarToggleHandler={this.onSideBarToggle}
key={"summary_first"}
>
<p>
Through our explorative study we identified several hurdles and usable solutions for a modern multi-faceted data analysis. Many of these gains came from the application of theories and practices from functional reactive programming to allow for that fast, simple, and robust development of interactive research publications. Encapsulating many of these ideas, we created a library named flow, which supports a diverse language for constructing visualizations while still supporting a very fast and semantic way of composing documents.
</p>
<p>
Despite these gains, there is still much room for improvement along all stages of the pipeline. The lexers and data processing frameworks are still domain-specific to this specific dataset and hence their use is limited in generic text parsing. In addition, there is still a great deal of work to be done to allow flow’s visualizations to properly display across multiple mediums, such as mobile phones and tablets, in a manner which respects visual constraints and concerns of each respective platform.
</p>
<p>
We hope that this study provides insight into the complexity and diversity off of the modern data analysis process. Through out novel and robust architecture of web-based research publications we aim to challenge and inspire the next generation of research publications and interactive web documents. Lastly, we hope that others may build upon our existing work, learning form our lessons to construct even more streamlined processes for modern data analysis.
</p>
</TextBlock>



<Bibliography />
<this.props.activeRouteHandler/>
</div>
);
}
});

module.exports = ThesisPage;