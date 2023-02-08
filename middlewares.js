const middlewareFunction = (req, res, next) => {
	const { email } = req.body;
	const user = {
		email,
		name: 'aki',
	};
	req.body.user = user;
	next();
};

const testMiddleware = (req, res, next) => {
	req.body.user = {
		lastName: 'adilovic',
	};
	next();
};

module.exports = { middlewareFunction, testMiddleware };
