let EventEmitter = require('events').EventEmitter;
let util = require('util');

let Calc = () => {
   this.on('stop', ()=>{
      console.log('clac에 stop이벤트 전달됨');
   });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = (a,b) => {
   return a+b;
};

module.exports = Calc;
