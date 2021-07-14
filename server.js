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
app.get("/hello", (req, res) => {
	res.send("secret");
});

app.post("/postStuff", (req, res) => {
	//firstName
	//lastName
	//password
	//age

	let formData = req.body;
	let newUser = new UsersModel(formData);
	newUser.save();
	res.json({ success: "SUCCESS CHECK DB" });
});

app.get("/getStuff", async (req, res) => {
	let users = await UsersModel.find();

	res.json({ results: users });
});

//LISTENING
app.listen(8080, () => console.log("Server is running on 8080"));
