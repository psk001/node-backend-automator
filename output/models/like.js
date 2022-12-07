const mongoose = require('mongoose')
const { Schema } = mongoose

const likeSchema = new Schema({
	p1: { 
		type: mongoose.Schema.Types.ObjectId, 
		required: true,
	},
	p1_liked_at: { 
		type: Date, 
		default: 'Date.now',
	},
	p1_msg: { 
		type: String, 
		trim: true,
	},
	p2: { 
		type: mongoose.Schema.Types.ObjectId, 
	},
	p2_liked_at: { 
		type: Date, 
	},
	p2_msg: { 
		type: String, 
		trim: true,
	},
	is_match: { 
		type: Boolean, 
		default: false,
	},
	unmatch_on: { 
		type: Date, 
	},
})

module.exports.Like = mongoose.model('Like', likeSchema)