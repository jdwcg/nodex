let http = require('http');
let server = http.createServer();

let host = '192.168.55.206';
let port = 3000;
server.listen(port, host, '50000', ()=> {
   console.log('웹서버접속'+host+':'+port);
});
