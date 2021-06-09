const Express = require("express");

const app = Express();
const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
	res.status(200).json(req.url);
});

app.listen(port, err =>
	err ? console.log(err) : console.log(`Listening on ${port}`)
);
