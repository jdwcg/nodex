let express = require('express');
let http = require('http');

let app = express();

app.set('port', process.env.PORT || 3000);

let server = http.createServer(app).listen(app.get('port'), ()=>{
   console.log('익스프레스로 웹서버를 실행함'+app.get('port'));
});
