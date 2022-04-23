let http = require('http');

let server = http.createServer();

let host = '192.168.55.206';
let port = 3000;
server.listen(port, host, 50000, ()=>{
   console.log('웹서버실행됨');
});

server.on('connection', (socket)=>{
console.log('클라이언트소켓접속');
});

server.on('request', (req, res)=>{
   console.log('클라이언트요청이들어옴');
   // console.dir(req);

   res.writeHead(200, {'content-Type':'text/html;charset=utf8'});
   res.write('<h1>웹서버로부터 받은 응답</h1>');
   res.end();
})
