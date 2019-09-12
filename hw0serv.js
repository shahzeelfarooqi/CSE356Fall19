const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
	res.sendFile('hw0html.html', {root: __dirname});
});

//app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, function() {
console.log("Server running at Port 3000");
});

