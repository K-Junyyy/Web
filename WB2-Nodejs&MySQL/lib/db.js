// 실제 개발을 진행할때 버전관리를 할 때는 보안을 위해
// 정보가 비어있는 db.template.js를 저장한다.
var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'nodejs',
  password: '123456',
  database: 'opentutorials'
});
db.connect();
module.exports = db;