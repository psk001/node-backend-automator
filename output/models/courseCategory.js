const mongoose = require('mongoose')
const { Schema } = mongoose

const courseCategorySchema = new Schema({
	proctoring_flags: [
		{
			type: 'mongoose.Schema.Types.ObjectId',
			ref: 'ProctoringFlag',
		},
		{
			type: 'mongoose.Schema.Types.ObjectId',
			ref: 'CheatingFlag',
		},
	],
	lanugage: { 
		type: String, 
		enum: ['ENGLISH', 'HINDI'],
		required: true,
	},
	title: { 
		type: String, 
		required: true,
		unique: true,
		default: 'devBoss Psk',
	},
	parent: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'CourseCategory',
	},
	created_by: { 
		type: mongoose.Schema.Types.ObjectId, 
		required: true,
		ref: 'User',
	},
	created_at: { 
		type: Date, 
		default: Date.now(),
	},
	updated_by: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
	},
})

module.exports.CourseCategory = mongoose.model('CourseCategory', courseCategorySchema)