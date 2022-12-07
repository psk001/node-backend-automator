const mongoose = require('mongoose')
const { Schema } = mongoose

const interestSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		trim: true,
	},
	icon: { 
		type: String, 
		required: true,
		trim: true,
	},
	status: { 
		type: Boolean, 
		default: true,
	},
})

module.exports.Interest = mongoose.model('Interest', interestSchema)