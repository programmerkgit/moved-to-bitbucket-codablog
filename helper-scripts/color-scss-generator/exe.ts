const fs = require('fs');

const json = fs.readFileSync('color-name.json', 'utf8');
const obj = JSON.parse(json);

const colorNamesWs = fs.createWriteStream('_color_names.scss');
const colorClassesWs = fs.createWriteStream('_colors.scss');

Object.keys(obj).forEach((colorName) => {
  const code = obj[ colorName ];

  const colorDefLine = `$${ colorName }: ${ code };
`;
  colorNamesWs.write(colorDefLine);

  const text = `\
.bg-${ colorName } {
  background-color: $${ colorName } !important;
}
.text-${ colorName } {
  color: $${ colorName } !important;
}
`;
  colorClassesWs.write(text);
});


// this script took 30 minutes to write
