const express = require('express');
const { json } = require('express');
const cors = require('cors');
const app = express();
const testRouter = require('./testRoutes');
const loginRouter = require('./loginRoutes');
const { middlewareFunction, testMiddleware } = require('./middlewares');

app.use(json());
app.use(cors());

app.use(testMiddleware, testRouter);
app.use(loginRouter);

app.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

app.post('/', middlewareFunction, (req, res) => {
	const { email, user } = req.body;
	res.status(200).json({ email, user });
});

app.listen(4000, () => {
	console.log('server is listening at port 4000');
});
