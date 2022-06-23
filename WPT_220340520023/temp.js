let userdata = { 
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'latur',
	port:3306
}

let mysql = require('mysql2');
let con = mysql.createConnection(userdata);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not




// Show first row

app.get ("/showAll", (req, resp) => {
	con.query('select * from book', [],
	 (error, rows) => {
		resp.send(rows);
	});
});

// Update book 

app.get('/update', (req, resp)=> {
	let bookid = req.query.bookid;
	let price = req.query.price;
	let updateStatus = {
		status: = false,
		message: "Not Updated"
	};
	con.query('update book set price =? where bookid =?',
	[price, bookid],
	(err, res1)=> {
		if (err) {
			console.log(err);
		} else {
			updateStatus.status = true;
			updateStatus.message = 'book updates';
		}
		resp.send(updateStatus);
	});
});

// 



app.get("/blurevent"), (req, res) => {
	let bookid = rew.query.bookid;
	let bookStatus = {
		status: false,
		book: {
			bookid: 0,
			bookname: "",
			price: 0

		}
	};
	con.query('select bookid, bookname, price from book where bookid=?', 
	[bookid],
	(err, rows) {
		if(err) {
			console.log(err);

		} else {
			if (rows.length > 0) {
				bookStatus.status = true;
				bookStatus.book = rows;
				}
		}
		resp.send(bookStatus);
	})
}

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });

app.get('/poc2', function (req, res) {
    	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});