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

var ThesisPage = React.createClass({
  getInitialState: function() {
    return {
      isSidebarShown: false
    };
  },

  render: function() {
    return (
      <div>
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
      key={"first"}
      >
      <p>
 Gentrify freegan vegan squid. Before they sold out aesthetic swag Tumblr you probably haven't heard of them drinking vinegar. Street art food truck readymade, aesthetic Shoreditch cred lomo. Raw denim chambray mlkshk, small batch flannel mixtape Helvetica paleo Banksy occupy gastropub next level butcher. Gastropub plaid authentic, cred taxidermy chillwave ennui. Crucifix Tumblr pork belly, Thundercats forage direct trade mustache banjo. Street art swag stumptown, blog DIY cray meggings kitsch pork belly Williamsburg readymade viral bicycle rights kogi biodiesel.
Mixtape PBR polaroid, twee DIY +1 stumptown banjo cornhole try-hard narwhal viral pork belly. Blog slow-carb viral post-ironic, Banksy Brooklyn Helvetica ugh. Yr vegan flannel drinking vinegar, senger bag synth Tonx, tote bag banh mi try-hard Cosby sweater ennui tofu craft beer Williamsburg Godard. Health goth shabby chic fixie stumptown blog tattooed. Flannel hoodie messenger bag organic. Lo-fi polaroid artisan salvia freegan, leggings pop-up pug. Ugh stumptown photo booth, American Apparel Kickstarter freegan paleo mustache narwhal. Tousled actually Banksy mumblecore. Keffiyeh meggings viral cornhole Helvetica taxidermy wayfarers, Pinterest wolf bitters trust fund Echo Park Austin.
Slow-carb selfies hella brunch stumptown.
</p>
<p>
Direct trade vinyl fanny pack, fixie hella PBR pop-up asymmetrical McSweeney's PBR&B umami Bushwick pork belly Thundercats kale chips. Scenester Bushwick drinking vinegar, pug sriracha Pitchfork meggings gluten-free Echo Park skateboard American Apparel Marfa. Selfies Pinterest try-hard actually post-ironic. Bitters kitsch sustainable Etsy Tumblr. Keffiyeh pickled polaroid Truffaut. Helvetica mumblecore banjo, Truffaut fashion axe asymmetrical bicycle rights Shoreditch hashtag ennui health goth authentic street art cliche. Sriracha Bushwick ethical bicycle rights Pinterest cray cliche leggings locavore. Fashion axe Godard Kickstarter, direct trade bespoke artisan fap vegan selfies mixtape. Cred selvage Brooklyn readymade next level. Fanny pack Wes Anderson vinyl gluten-free disrupt ugh. Narwhal Williamsburg lo-fi, American Apparel fap Vice locavore post-ironic Intelligentsia craft beer tote bag heirloom Portland cold-pressed put a bird on it. Narwhal mustache fap, single-origin coffee paleo Schlitz Helvetica fingerstache Pinterest jean shorts gluten-free pork belly occupy ethical.
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
      key={"second"}>
      <p>
      <Citation key="test">Gastropub</Citation> seitan organic  <Annotation>mumblecore</Annotation>, vegan sartorial shabby chic meh pork belly aesthetic messenger bag pickled polaroid roof party. Synth mixtape gentrify Shoreditch. Biodiesel salvia aesthetic cardigan kitsch blog. Artisan pour-over sustainable,  <Annotation>Thundercats</Annotation>food truck tattooed sartorial hella. Intelligentsia literally fingerstache pop-up ennui, direct trade gastropub Pinterest trust fund forage banh mi. Post-ironic Marfa narwhal cred quinoa Cosby sweater try-hard. Yr DIY dreamcatcher, butcher organic vinyl retro pop-up VHS occupy.
      </p>
      <p>
      Gentrify freegan vegan squid. Before they sold out aesthetic swag Tumblr you probably haven't heard of them drinking vinegar. Street art food truck readymade, aesthetic Shoreditch cred lomo. Raw denim chambray mlkshk, small batch flannel mixtape Helvetica paleo Banksy occupy gastropub next level butcher. Gastropub plaid authentic, cred taxidermy chillwave ennui. Crucifix Tumblr pork belly, Thundercats forage direct trade mustache banjo. Street art swag stumptown, blog DIY cray meggings kitsch pork belly Williamsburg readymade viral bicycle rights kogi biodiesel. Mixtape PBR polaroid, twee DIY +1 stumptown banjo cornhole try-hard narwhal viral pork belly. Blog slow-carb viral post-ironic, Banksy Brooklyn Helvetica ugh. Yr vegan flannel drinking vinegar, butcher sartorial hashtag. Twee gastropub 8-bit typewriter kogi farm-to-table. Plaid keffiyeh dreamcatcher 90's, cred PBR Portland crucifix. Chillwave taxidermy bespoke leggings, whatever Portland tousled Carles. Crucifix narwhal kogi scenester pop-up direct trade. Cosby sweater Pinterest 3 wolf moon vinyl leggings, meggings scenester. Street art biodiesel Shoreditch chambray pickled. Irony Godard artisan, leggings master cleanse iPhone street art keytar fap Thundercats 3 wolf moon forage. Sriracha put a bird on it master cleanse narwhal readymade DIY cardigan. Craft beer photo booth disrupt cardigan. American Apparel Helvetica health goth farm-to-table. Fap lo-fi farm-to-table meggings Shoreditch. Pork belly messenger bag synth Tonx, tote bag banh mi try-hard Cosby sweater ennui tofu craft beer Williamsburg Godard. Health goth shabby chic fixie stumptown blog tattooed. Flannel hoodie messenger bag organic. Lo-fi polaroid  Occupy farm-to-table Cosby sweater street art Pitchfork. Scenester trust fund cornhole DIY taxidermy, pop-up distillery disrupt ethical authentic Intelligentsia squid mixtape typewriter.
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
      key={"fourth"}>
      <p>
      Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.Try-hard messenger bag small batch photo booth, typewriter kogi kale chips mlkshk American Apparel. Swag Wes Anderson tote bag artisan Williamsburg, irony vinyl lomo.Brooklyn chambray mixtape Shoreditch Pinterest Austin fashion axe. Chia letterpress ugh pop-up gentrify, dreamcatcher cred aesthetic American Apparel Schlitz. Distillery 90's whatever, tote bag mumblecore next level messenger bag scenester roof party PBR Carles bicycle rights street art salvia literally. Single-origin coffee mustache swag keffiyeh church-key kogi. Pitchfork taxidermy pug VHS, beard direct trade pork belly normcore ugh Godard swag craft beer. +1 Godard quinoa pop-up 3 wolf moon. Art party tousled freegan locavore keytar, Wes Anderson try-hard whatever McSweeney's blog VHS cred gluten-free banjo jean shorts.
      </p>
        <p>
        Twee gastropub 8-bit typewriter kogi farm-to-table. Plaid keffiyeh dreamcatcher 90's, cred PBR Portland crucifix. Chillwave taxidermy bespoke leggings, whatever Portland tousled Carles. Crucifix narwhal kogi scenester pop-up direct trade. Cosby sweater Pinterest 3 wolf moon vinyl leggings, meggings scenester. Street art biodiesel Shoreditch chambray pickled. Irony Godard artisan, leggings master cleanse iPhone street art keytar fap Thundercats 3 wolf moon forage. Sriracha put a bird on it master cleanse narwhal readymade DIY cardigan. Craft beer photo booth disrupt cardigan. American Apparel Helvetica health goth farm-to-table. Fap lo-fi farm-to-table meggings Shoreditch. Pork belly messenger bag synth Tonx, tote bag banh mi try-hard Cosby sweater ennui tofu craft beer Williamsburg Godard. Health goth shabby chic fixie stumptown blog tattooed. Flannel hoodie messenger bag organic. Lo-fi polaroid artisan salvia freegan, leggings pop-up pug. Ugh stumptown photo booth, American Apparel Kickstarter freegan paleo mustache narwhal. Tousled actually Banksy mumblecore. Keffiyeh meggings viral cornhole Helvetica taxidermy wayfarers, Pinterest wolf bitters trust fund Echo Park Austin. Slow-carb selfies hella brunch stumptown. Tonx tousled irony YOLO tofu. Roof party Thundercats street art, try-hard raw denim literally food truck wolf. Pinterest keytar tilde trust fund. Pinterest Portland asymmetrical, dreamcatcher 90's High Life wayfarers ethical Vice Wes Anderson Brooklyn gentrify cliche. Occupy farm-to-table Cosby sweater street art Pitchfork. Scenester trust fund cornhole DIY taxidermy, pop-up distillery disrupt ethical authentic Intelligentsia squid mixtape typewriter.
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
      key={"seventh"}
      >
     <p>
      Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.Try-hard messenger bag small batch photo booth, typewriter kogi kale chips mlkshk American Apparel. Swag Wes Anderson tote bag artisan Williamsburg, irony vinyl lomo.Brooklyn chambray mixtape Shoreditch Pinterest Austin fashion axe. Chia letterpress ugh pop-up gentrify, dreamcatcher cred aesthetic American Apparel Schlitz. Distillery 90's whatever, tote bag mumblecore next level messenger bag scenester roof party PBR Carles bicycle rights street art salvia literally. Single-origin coffee mustache swag keffiyeh church-key kogi. Pitchfork taxidermy pug VHS, beard direct trade pork belly normcore ugh Godard swag craft beer. +1 Godard quinoa pop-up 3 wolf moon. Art party tousled freegan locavore keytar, Wes Anderson try-hard whatever McSweeney's blog VHS cred gluten-free banjo jean shorts.
      </p>
        <p>
        Twee gastropub 8-bit typewriter kogi farm-to-table. Plaid keffiyeh dreamcatcher 90's, cred PBR Portland crucifix. Chillwave taxidermy bespoke leggings, whatever Portland tousled Carles. Crucifix narwhal kogi scenester pop-up direct trade. Cosby sweater Pinterest 3 wolf moon vinyl leggings, meggings scenester. Street art biodiesel Shoreditch chambray pickled. Irony Godard artisan, leggings master cleanse iPhone street art keytar fap Thundercats 3 wolf moon forage. Sriracha put a bird on it master cleanse narwhal readymade DIY cardigan. Craft beer photo booth disrupt cardigan. American Apparel Helvetica health goth farm-to-table. Fap lo-fi farm-to-table meggings Shoreditch. Pork belly messenger bag synth Tonx, tote bag banh mi try-hard Cosby sweater ennui tofu craft beer Williamsburg Godard. Health goth shabby chic fixie stumptown blog tattooed. Flannel hoodie messenger bag organic. Lo-fi polaroid artisan salvia freegan, leggings pop-up pug. Ugh stumptown photo booth, American Apparel Kickstarter freegan paleo mustache narwhal. Tousled actually Banksy mumblecore. Keffiyeh meggings viral cornhole Helvetica taxidermy wayfarers, Pinterest wolf bitters trust fund Echo Park Austin. Slow-carb selfies hella brunch stumptown. Tonx tousled irony YOLO tofu. Roof party Thundercats street art, try-hard raw denim literally food truck wolf. Pinterest keytar tilde trust fund. Pinterest Portland asymmetrical, dreamcatcher 90's High Life wayfarers ethical Vice Wes Anderson Brooklyn gentrify cliche. Occupy farm-to-table Cosby sweater street art Pitchfork. Scenester trust fund cornhole DIY taxidermy, pop-up distillery disrupt ethical authentic Intelligentsia squid mixtape typewriter.
      </p>
     </TextBlock>

      <SectionHeader
      title={'Interface Architecture'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />
     <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"eigth"}
      >
     <p>
      Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.Try-hard messenger bag small batch photo booth, typewriter kogi kale chips mlkshk American Apparel. Swag Wes Anderson tote bag artisan Williamsburg, irony vinyl lomo.Brooklyn chambray mixtape Shoreditch Pinterest Austin fashion axe. Chia letterpress ugh pop-up gentrify, dreamcatcher cred aesthetic American Apparel Schlitz. Distillery 90's whatever, tote bag mumblecore next level messenger bag scenester roof party PBR Carles bicycle rights street art salvia literally. Single-origin coffee mustache swag keffiyeh church-key kogi. Pitchfork taxidermy pug VHS, beard direct trade pork belly normcore ugh Godard swag craft beer. +1 Godard quinoa pop-up 3 wolf moon. Art party tousled freegan locavore keytar, Wes Anderson try-hard whatever McSweeney's blog VHS cred gluten-free banjo jean shorts.
      </p>
        <p>
        Twee gastropub 8-bit typewriter kogi farm-to-table. Plaid keffiyeh dreamcatcher 90's, cred PBR Portland crucifix. Chillwave taxidermy bespoke leggings, whatever Portland tousled Carles. Crucifix narwhal kogi scenester pop-up direct trade. Cosby sweater Pinterest 3 wolf moon vinyl leggings, meggings scenester. Street art biodiesel Shoreditch chambray pickled. Irony Godard artisan, leggings master cleanse iPhone street art keytar fap Thundercats 3 wolf moon forage. Sriracha put a bird on it master cleanse narwhal readymade DIY cardigan. Craft beer photo by sweater street art Pitchfork. Scenester trust fund cornhole DIY taxidermy, pop-up distillery disrupt ethical authentic Intelligentsia squid mixtape typewriter.
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
      key={"ninth"}
      >
     <p>
      Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.Try-hard messenger bag small batch photo booth, typewriter kogi kale chips mlkshk American Apparel. Swag Wes Anderson tote bag artisan Williamsburg, irony vinyl lomo.Brooklyn chambray mixtape Shoreditch Pinterest Austin fashion axe. Chia letterpress ugh pop-up gentrify, dreamcatcher cred aesthetic American Apparel Schlitz. Distillery 90's whatever, tote bag mumblecore next level messenger bag scenester roof party PBR Carles bicycle rights street art salvia literally. Single-origin coffee mustache swag keffiyeh church-key kogi. Pitchfork taxidermy pug VHS, beard direct trade pork belly normcore ugh Godard swag craft beer. +1 Godard quinoa pop-up 3 wolf moon. Art party tousled freegan locavore keytar, Wes Anderson try-hard whatever McSweeney's blog VHS cred gluten-free banjo jean shorts.
      </p>
      </TextBlock>


      <SectionHeader
      title={'Summary'}
      size={'large'}
      isSidebarShown={this.state.isSidebarShown}
      />

     <TextBlock
      isSidebarShown={this.state.isSidebarShown}
      sidebarToggleHandler={this.onSideBarToggle}
      key={"tenth"}
      >
     <p>
      Flexitarian Wes Anderson food truck, ennui artisan flannel photo booth distillery pug literally ethical craft beer. Messenger bag organic master cleanse, 8-bit selfies hoodie Schlitz literally Echo Park tote bag asymmetrical pop-up cardigan stumptown. Chillwave hashtag Bushwick squid +1 street art 8-bit, yr authentic. Post-ironic vinyl try-hard slow-carb bitters, VHS wolf shabby chic. Brooklyn crucifix tilde Carles heirloom, pop-up distillery. Pickled authentic post-ironic Brooklyn, artisan hella cred deep v Vice forage leggings asymmetrical. Synth Carles master cleanse PBR&B Banksy, artisan 8-bit yr small batch street art Wes Anderson.Try-hard messenger bag small batch photo booth, typewriter kogi kale chips mlkshk American Apparel. Swag Wes Anderson tote bag artisan Williamsburg, irony vinyl lomo.Brooklyn chambray mixtape Shoreditch Pinterest Austin fashion axe. Chia letterpress ugh pop-up gentrify, dreamcatcher cred aesthetic American Apparel Schlitz. Distillery 90's whatever, tote bag mumblecore next level messenger bag scenester roof party PBR Carles bicycle rights street art salvia literally. Single-origin coffee mustache swag keffiyeh church-key kogi. Pitchfork taxidermy pug VHS, beard direct trade pork belly normcore ugh Godard swag craft beer. +1 Godard quinoa pop-up 3 wolf moon. Art party tousled freegan locavore keytar, Wes Anderson try-hard whatever McSweeney's blog VHS cred gluten-free banjo jean shorts.
      </p>
      </TextBlock>

      <this.props.activeRouteHandler/>
      </div>
      );
  }
});

module.exports = ThesisPage;