var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db.js');
var topic = require('./lib/topic.js');
var author = require('./lib/author.js');
const { authorSelect } = require('./lib/template.js');

// http모듈로 서버를 생성한다. 
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') { // pathname이 정상적인 경우
    if (queryData.id == undefined) { // Home일 경우
      topic.home(request, response);
    } else { // CSS, HTML, JavaScript인 경우
      topic.page(request, response);
    }
  } else if (pathname == "/create") {
    topic.create(request, response);
  } else if (pathname == "/create_process") {
    topic.create_process(request, response);
  } else if (pathname == '/update') {
    topic.update(request, response);
  } else if (pathname == '/update_process') {
    topic.update_process(request, response);
  } else if (pathname == '/delete_process') {
    topic.delete_process(request, response);
  } else if (pathname == '/author') {
    author.home(request, response);
  } else if (pathname == '/author/create_process') {
    author.create_process(request, response);
  } else if (pathname == '/author/update') {
    author.update(request, response);
  } else if (pathname == '/author/update_process') {
    author.update_process(request, response);
  } else if (pathname == '/author/delete_process') {
    author.delete_process(request, response);

  } else { // 잘못된 요청
    response.writeHead(404);
    response.end('Not found');
  }
});

// listen 함수로 3000 포트에 서버를 실행한다.
app.listen(3000, function () {
  console.log("server is running...")
});