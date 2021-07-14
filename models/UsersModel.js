const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	password: {
		type: String,
	},
	age: {
		type: Number,
	},
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;
