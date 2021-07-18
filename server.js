//IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UsersModel = require("./models/UsersModel");
const cors = require("cors");

//INITIALIZATION
const app = express();

mongoose.connect("mongodb://localhost:27017/test-users", () =>
	console.log("Connected to DB")
);

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
app.get("/getUsers", async (req, res) => {
	let users = await UsersModel.find();

	res.json(users);
});

app.post("/updateUser", async (req, res) => {
	let formData = req.body;

	let response = await UsersModel.findOneAndUpdate(
		{ _id: formData.userId },
		{ firstName: formData.newFirstName }
	);

	res.json(response);
});

//LISTENING
app.listen(8080, () => console.log("Server is running on 8080"));
