const fs = require('fs');

fs.open('./test.html','w', (err, fd)=>{
   if(err) {
      console.log('파일오픈시에러발생');
      console.dir(err);
      return;
   }
   let testEx = 'sdfsasdfasdfasdfdfd'
   let buf = new Buffer(testEx);
   fs.write(fd, buf, 0, buf.length, null, (err, written, buffer)=>{
      if(err) {
         console.log('파일쓰기시에러발생');
         console.dir(err);
         return;
      }
      console.log('파일쓰기완료함.');
      fs.close(fd, ()=> {
         console.log('파일닫기완료함');
      });
   });
});
