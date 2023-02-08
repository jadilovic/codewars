const testController = (req, res) => {
	const { name } = req.query;
	const { lastName } = req.body.user;
	res
		.status(200)
		.json({ message: `hello ${name} ${lastName} in test controller` });
};

const login = (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);
	if (!!email && !!password) {
		return res.status(200).json({ email, password });
	}
	res.status(401).json({ message: 'no email or password provided' });
};

module.exports = { testController, login };
