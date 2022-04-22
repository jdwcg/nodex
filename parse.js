let url = require('url');

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcorn';

var curUrl = url.parse(urlStr);

var curStr = url.format(curUrl);


var querystring = require('querystring');
var parms = querystring.parse(curUrl.query);

console.log(parms)
