/** @jsx React.DOM */

var React = require('react');

var Paragraph = require('./paragraph.jsx');
var CodeBlock = require('./code_block.jsx');
var Content = require('./content.jsx');
var MainHeader = require('./header_main.jsx');
var Annotation = require('./annotation.jsx');
var TextBlock = require('./text_block.jsx');
var PaperHeader = require('./header_paper.jsx')
var SubsectionHeader = require('./header_subsection.jsx');
var Chart = require('./chart.jsx');

var App = React.createClass({

  render: function() {
    return (
      <Content>
      <PaperHeader
      title={"Example Paper Title"}
      authors={["Brendan Ryan"]}
      />
      <MainHeader title={"First Header"}/>
      <TextBlock>
      <p>
      Whatever deep v DIY sustainable street art bespoke, scenester kitsch irony quinoa fixie pickled. Gluten-free Godard fanny pack readymade. Raw denim Tumblr shabby chic retro Brooklyn, Banksy fingerstache. Master cleanse Wes Anderson McSweeney's, before they sold out tofu ugh fingerstache scenester small batch artisan seitan pug chambray letterpress typewriter. Next level umami authentic actually pork belly. Before they sold out gentrify Schlitz, squid Williamsburg pickled Intelligentsia forage next level artisan swag. Leggings mumblecore iPhone, umami cred Helvetica flexitarian Carles DIY.
      </p>
      </TextBlock>
      <Chart chartId={'schoolCounts'} />
      <SubsectionHeader title={'Sample Subsection'}/>
      <TextBlock>
      <p>
      Gastropub seitan organic mumblecore, vegan sartorial shabby chic meh pork belly aesthetic messenger bag pickled polaroid roof party. Synth mixtape gentrify Shoreditch. Biodiesel salvia aesthetic cardigan kitsch blog. Artisan pour-over sustainable, Thundercats food truck tattooed sartorial hella. Intelligentsia literally fingerstache pop-up ennui, direct trade gastropub Pinterest trust fund forage banh mi. Post-ironic Marfa narwhal cred quinoa Cosby sweater try-hard. Yr DIY dreamcatcher, butcher organic vinyl retro pop-up VHS occupy.
      </p>
      </TextBlock>
      </Content>
      );
}
});

module.exports = App;
