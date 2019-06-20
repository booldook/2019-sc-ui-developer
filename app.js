const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'booldook',
	password : '1122',
	database : 'booldook'
});

app.listen(3000, ()=>{
	console.log("3000 opened");
});

app.use("/", express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get(['/test/:id', '/test'], (req, res, next) => {
	if(req.params.id) {
		res.send(req.params.id);
	}
	else if(req.query.title && req.query.writer) {

		var sql = ` INSERT INTO test SET title = '${req.query.title}', writer='${req.query.writer}' `;

		connection.connect();
		connection.query(sql, function (error, results, fields) {
			if (error) throw error;
			else res.send("저장되었습니다.");
		});
		connection.end();


	}
	else {
		res.send("Hi~");
	}
});

app.post('/test', (req, res, next) => {
	var title = req.body.title;
	var writer = req.body.writer;
	res.send(title+"/"+writer);
});


/*
CRUD
SQL 문
SELECT * FROM table
INSERT INTO table SET ...
DELETE FROM table WHERE
UPDATE table SET ...

*/