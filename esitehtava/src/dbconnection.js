var mysql = require('mysql');

var con = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "b48a927bef98b2",
  password: "bac0dd94"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
