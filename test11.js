let fs = require('fs');

let infile = fs.createReadStream('./output.txt', {flags:'r'});

infile.on('date', function(data){
   console.log('읽어들인데이터' + data);
});

infile.on('end', ()=> {
   console.log('읽기종료');
})
