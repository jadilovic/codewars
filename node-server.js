require('./node-events');
const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hi from express server' });
});

// app.get('/home', (req, res) => {
// 	readFile('./home.html', 'utf-8', (err, html) => {
// 		if (err) {
// 			return res.status(500).send('Error on the server: ' + err.message);
// 		}
// 		res.status(200).send(html);
// 	});
// });

app.get('/home', async (req, res) => {
	res.status(200).send(await readFile('./home.html', 'utf-8'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log('Server is listening at port ' + PORT);
});
