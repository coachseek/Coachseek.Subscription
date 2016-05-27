// var sql = require('mssql'),
// 	sqlConfig = {
// 	    user: 'coachseek@idlf08a7kb',
// 	    password: 'W#ggie1267',
// 	    server: 'idlf08a7kb.database.windows.net',
// 	    database: 'Coachseek-Api-Testing',

// 	    options: {
// 	        encrypt: true
// 	    }
// 	}

// sql.connect(sqlConfig).then(function() {
// 	console.log("CONNECTED");
// });

// sql.on('error', function(err) {
// 	console.log(err);
// });

var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('hello');
});

app.get('/update-sub', function (req, res) {
  res.send('UPDATE SUB')
});

http.createServer(app).listen(8080);