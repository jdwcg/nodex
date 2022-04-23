let output ='안녕';
let buffer1 = new Buffer(10);
let len = buffer1.write(output, 'utf8');
console.log(len);
console.log(buffer1.toString());

console.log('버퍼객체인지'+Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(buffer1);
console.log(byteLen);

const str1 = buffer1.toString('utf8', 0, 6);
console.log(str1);

Buffer.from('Hello', 'utf8');

let buffer2 = Buffer.from('Hello', 'utf8');
console.log('두번쨰 버퍼의 길이' + Buffer.byteLength(buffer2));


let str2 = buffer2.toString('utf8', 0, Buffer.byteLength(buffer2));
console.log(str2);
