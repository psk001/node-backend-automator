const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		trim: true,
	},
	type: { 
		type: String, 
		required: true,
		trim: true,
		uppercase: true,
		enum: ['T', 'S', 'A', 'P', 'HR', 'KA-I'],
	},
	signup_type: { 
		type: String, 
		required: true,
		uppercase: true,
	},
	email: { 
		type: String, 
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
	},
	mobile: { 
		type: String, 
		trim: true,
	},
	gender: { 
		type: String, 
		required: true,
		enum: ['M', 'F', 'O', 'T', 'NB', 'NC'],
	},
	companies: [
		{
			type: 'mongoose.Schema.Types.ObjectId',
			required: true,
			ref: 'Company',
		},
	],
	password: { 
		type: String, 
		required: true,
		trim: true,
	},
	is_email_verified: { 
		type: Boolean, 
		default: false,
	},
	created_at: { 
		type: Date, 
		default: Date.now(),
	},
	status: { 
		type: Boolean, 
		default: true,
	},
	resume_file: { 
		type: String, 
	},
	college: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'College',
	},
	prev_employment: { 
		type: String, 
	},
	tech_stack: [
		{
			type: 'String',
		},
	],
	branch: { 
		type: String, 
	},
	cgpa: { 
		type: Number, 
	},
	address: { 
		type: String, 
	},
	location: { 
		type: String, 
	},
	hear_about_us: { 
		type: String, 
	},
	employed_before: { 
		type: Boolean, 
	},
	legal_age: { 
		type: Number, 
	},
	linkedin_url: { 
		type: String, 
	},
	consent: { 
		type: String, 
	},
	daily_basis: { 
		type: String, 
	},
	is_pwd: { 
		type: Boolean, 
	},
	photo_file: { 
		type: String, 
	},
	gmailUserId: { 
		type: String, 
		trim: true,
	},
	githubId: { 
		type: String, 
		trim: true,
	},
})

module.exports.User = mongoose.model('User', userSchema)