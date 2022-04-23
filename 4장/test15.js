var winston = require('winston');
var winstonDaiy = require('winston-daily-rotate-file');
var moment = require('moment');

const timeStampFormat = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = new (winston.Logger)({
  transports: [
    new (winstonDaiy) ({
      name: 'info-file',
      filename: './log/server',
      datePattern: '_yyyy-mm-dd.log',
      colorize:false,
      maxsize: 50000000,
      maxFiles:1000,
      level:'info',
      showLevel:true,
      json:false,
      timestamp: timeStampFormat
    }),
    new (winston.transports.Console) ({
      name: 'debug-console',
      colorize: true,
      level: 'debug',
      showLevel: true,
      json : false,
      timestamp: timeStampFormat
    })
  ]
});

logger.debug('디버깅 메시지입니다.');
logger.error('에러메시지입니다.');
