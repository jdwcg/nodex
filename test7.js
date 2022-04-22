require('fs');
fs.writeFile('./output.txt', 'Hello.', err=>{
   if(err) {
      console.log('err발생');
      console.dir(err);
      return;
   }

   console.log('데이터쓰기완료');
})
