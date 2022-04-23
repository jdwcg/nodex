let http = require('http');
let fs = require('fs');

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
  let filename = 'house.png';
  fs.readFile(filename, (err, data)=>{
    res.writeHead(200, {'content-Type':'image/png'});
    res.write(data);
    res.end();
  });

  
})
