const fs = require('fs');

const date = fs.readFileSync('./package.json', 'utf8');

cosole.log(date)
