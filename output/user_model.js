const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	name: { 
		type: String 
	},
	age: { 
		type: Number 
	},
})

module.exports.User = mongoose.model(User, userSchema)