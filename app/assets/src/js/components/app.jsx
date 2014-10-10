/** @jsx React.DOM */

var React = require('react/addons');

var CodeBlock = require('./code_block.jsx');
var Content = require('./content.jsx');
var Annotation = require('./annotation.jsx');
var TextBlock = require('./text_block.jsx');
var PaperHeader = require('./header_paper.jsx')
var SectionHeader = require('./header_section.jsx');
var Chart = require('./chart.jsx');
var Citation = require('./citation.jsx');
var Bibliography = require('./bibliography.jsx');

var App = React.createClass({
  proptypes: {
    isSidebarShown: React.PropTypes.bool,
    sources: React.PropTypes.array
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
      <Content>

        <PaperHeader
          title={"Example Paper Title"}
          authors={["Brendan Ryan"]}
        />
        <SectionHeader
          isSidebarShown={this.state.isSidebarShown}
          title={"First Header"}
          size={'large'}
        />
        <TextBlock
          isSidebarShown={this.state.isSidebarShown}
          sidebarToggleHandler={this.onSideBarToggle}
          key={"first"}
        >
          <p>
          Whatever deep v <Annotation title={"Yay! An annotation!"} content={"Here is some lovely annotation content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>DIY</Annotation> sustainable street art bespoke, <Annotation>scenester</Annotation> kitsch irony quinoa <Citation>fixie</Citation> pickled. Gluten-free Godard fanny pack readymade. Raw denim Tumblr shabby chic retro Brooklyn, Banksy fingerstache. Master cleanse Wes Anderson McSweeney's, before they sold out tofu ugh fingerstache scenester small batch artisan seitan pug chambray letterpress typewriter. Next level <Annotation>umami</Annotation> authentic actually pork belly. Before they sold out gentrify Schlitz, squid Williamsburg pickled Intelligentsia forage next level artisan swag. Leggings mumblecore iPhone, umami cred Helvetica flexitarian Carles DIY.
          </p>
        </TextBlock>

        <Chart
          chartId={'schoolCounts'}
          isSidebarShown={this.state.isSidebarShown}
          tooltipId={'school_tooltip'}
        />

        <SectionHeader
          title={'Sample Subsection'}
          size={'medium'}
          isSidebarShown={this.state.isSidebarShown}
        />

        <TextBlock
          isSidebarShown={this.state.isSidebarShown}
          sidebarToggleHandler={this.onSideBarToggle}
          key={"second"}>
          <p>
          <Citation key="test">Gastropub</Citation> seitan organic  <Annotation>mumblecore</Annotation>, vegan sartorial shabby chic meh pork belly aesthetic messenger bag pickled polaroid roof party. Synth mixtape gentrify Shoreditch. Biodiesel salvia aesthetic cardigan kitsch blog. Artisan pour-over sustainable,  <Annotation>Thundercats</Annotation>food truck tattooed sartorial hella. Intelligentsia literally fingerstache pop-up ennui, direct trade gastropub Pinterest trust fund forage banh mi. Post-ironic Marfa narwhal cred quinoa Cosby sweater try-hard. Yr DIY dreamcatcher, butcher organic vinyl retro pop-up VHS occupy.
          </p>
        </TextBlock>

        <TextBlock
          isSidebarShown={this.state.isSidebarShown}
          sidebarToggleHandler={this.onSideBarToggle}
          key={"third"}>
          <p>
           Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.
          </p>
        </TextBlock>

        <Bibliography />
      </Content>
      );
}
});

module.exports = App;
