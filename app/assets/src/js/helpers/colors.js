var genderScale = [

];

var redBlueRange = [
  "#A1FFF0", //light blue
  "#FFE1E1", // pink
  "#CC7183",
  "#D3ADD9",
  "#578E99", //dark blue
];

var range = ['rgb(215,25,28)','rgb(253,174,97)','rgb(255,255,191)','rgb(171,217,233)','rgb(44,123,182)'];

var grayScale = [
  "#f7f7f7",
  "#cccccc",
  "#969696",
  "#636363",
  "#252525",
];

var colors = {

  range: range,

  grayScale: grayScale,

  // parts of the range
  lightBlue: "#9ED5FF",
  darkBlue:  "#578E99",
  darkRed: "#CC7183",
  pink: "#FFE1E1",

  // grays
  medGray: grayScale[2],
  medLightGray: grayScale[1],
  lightGray: grayScale[0],
  white: 'rgb(252, 252, 252)'
};

module.exports = colors;