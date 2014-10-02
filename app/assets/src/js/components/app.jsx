/** @jsx React.DOM */

var React = require('react');

var CodeBlock = require('./code_block.jsx');
var Content = require('./content.jsx');
var Annotation = require('./annotation.jsx');
var TextBlock = require('./text_block.jsx');
var PaperHeader = require('./header_paper.jsx')
var SectionHeader = require('./header_section.jsx');
var Chart = require('./chart.jsx');
//var Tex = require('./tex.jsx');

var App = React.createClass({

  render: function() {
    return (
      <Content>

        <PaperHeader
          title={"Example Paper Title"}
          authors={["Brendan Ryan"]}
        />

        <SectionHeader title={"First Header"} size={'large'}/>
        <TextBlock>
        <Tex>"c = \\pm\\sqrt{a^2 + b^2}"</Tex>
          <p>
          Whatever deep v <Annotation title={"Yay! An annotation!"} content={"Here is some lovely annotation content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>DIY</Annotation> sustainable street art bespoke, <Annotation>scenester</Annotation> kitsch irony quinoa fixie pickled. Gluten-free Godard fanny pack readymade. Raw denim Tumblr shabby chic retro Brooklyn, Banksy fingerstache. Master cleanse Wes Anderson McSweeney's, before they sold out tofu ugh fingerstache scenester small batch artisan seitan pug chambray letterpress typewriter. Next level <Annotation>umami</Annotation> authentic actually pork belly. Before they sold out gentrify Schlitz, squid Williamsburg pickled Intelligentsia forage next level artisan swag. Leggings mumblecore iPhone, umami cred Helvetica flexitarian Carles DIY.
          </p>
        </TextBlock>

        <Chart chartId={'schoolCounts'} />

        <SectionHeader title={'Sample Subsection'} size={'medium'}/>

        <TextBlock>
          <p>
          Gastropub seitan organic  <Annotation>mumblecore</Annotation>, vegan sartorial shabby chic meh pork belly aesthetic messenger bag pickled polaroid roof party. Synth mixtape gentrify Shoreditch. Biodiesel salvia aesthetic cardigan kitsch blog. Artisan pour-over sustainable,  <Annotation>Thundercats</Annotation>food truck tattooed sartorial hella. Intelligentsia literally fingerstache pop-up ennui, direct trade gastropub Pinterest trust fund forage banh mi. Post-ironic Marfa narwhal cred quinoa Cosby sweater try-hard. Yr DIY dreamcatcher, butcher organic vinyl retro pop-up VHS occupy.
          </p>
        </TextBlock>
      </Content>
      );
}
});

module.exports = App;
