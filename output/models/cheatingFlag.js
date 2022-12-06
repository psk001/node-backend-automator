const mongoose = require('mongoose')
const { Schema } = mongoose

const cheatingFlagSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		maxlength: 20,
		trim: true,
	},
	created_at: { 
		type: Date, 
		default: Date.now(),
	},
	status: { 
		type: Boolean, 
		default: true,
	},
})

module.exports.CheatingFlag = mongoose.model('CheatingFlag', cheatingFlagSchema)