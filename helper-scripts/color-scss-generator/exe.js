var fs = require('fs');
var json = fs.readFileSync('color-name.json', 'utf8');
var obj = JSON.parse(json);
var colorNamesWs = fs.createWriteStream('_color_names.scss');
var colorClassesWs = fs.createWriteStream('_colors.scss');
Object.keys(obj).forEach(function (colorName) {
  var code = obj[colorName];
  var colorDefLine = "$" + colorName + ": " + code + ";\n";
  colorNamesWs.write(colorDefLine);
  var text = ".bg-" + colorName + " {\n  background-color: $" + colorName + " !important;\n}\n.text-" + colorName + " {\n  color: $" + colorName + " !important;\n}\n";
  colorClassesWs.write(text);
});
// this script took 30 minutes to write
