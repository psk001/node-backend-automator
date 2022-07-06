const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	name: { 
		type: String, 
		required: "true", 
	},
	age: { 
		type: Number, 
		default: 18, 
	},
	email: { 
		type: String, 
		default: "psk@mail.com", 
	},
})

module.exports.User = mongoose.model(User, userSchema)