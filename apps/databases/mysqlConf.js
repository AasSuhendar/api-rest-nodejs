var mysql      = require('mysql');
let confDB = function (app) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'AZX445mn',
    database: 'sample_db'
  });
  return connection;
  // connection.connect(function(err) {
  //  if (err) {
  //     console.error('error connecting: ' + err.stack);
  //     return;
  //   }
  //   console.log('connected as id ' + connection.threadId);
  // // });
  
  // connection.query('SELECT * from books', function (error, results, fields) {
  //   if (error) throw error;
  //   results.forEach(element => {
  //     console.log(element.id);
  //   });
  // });
  // connection.end();
}
module.exports = confDB