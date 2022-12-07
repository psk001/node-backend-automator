const mongoose = require('mongoose')
const { Schema } = mongoose

const quizAssignSchema = new Schema({
	quiz: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Quiz',
			required: true,
		},
	],
	quiz_set: [
		{
			type: mongoose.Schema.Types.Mixed,
			ref: 'Quiz',
		},
	],
	set_submission: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'QuizAssign',
		},
	],
	marks: { 
		type: Number, 
	},
	normalized_score: { 
		type: Number, 
	},
	name: { 
		type: String, 
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
	college: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'College',
	},
	cgpa: { 
		type: Number, 
	},
	class_ten_perc: { 
		type: Number, 
	},
	class_twelve_perc: { 
		type: Number, 
	},
	num_current_backlogs: { 
		type: String, 
		default: 0,
	},
	grad_degree: { 
		type: String, 
	},
	branch: { 
		type: String, 
	},
	grad_degree: [
		{
			type: String,
		},
	],
	proctoring_flags: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProctoringFlag',
		},
	],
	proctoring_flags: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'CheatingFlag',
		},
	],
	user: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	response: [
		{
			type: mongoose.Schema.Types.Mixed,
		},
	],
	time_response: [
		{
			type: mongoose.Schema.Types.Mixed,
		},
	],
	marking: [
		{
			type: mongoose.Schema.Types.Mixed,
		},
	],
	created_by: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	],
	updated_by: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	invited_by: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	proctor: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	proctor_name: { 
		type: String, 
	},
	proctor_email: { 
		type: String, 
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
	},
	is_invited: { 
		type: Boolean, 
		default: false,
	},
	is_email_error: { 
		type: Boolean, 
	},
	email_error_msg: { 
		type: String, 
	},
	extra_time: { 
		type: Number, 
	},
	rating: { 
		type: Number, 
	},
	feedback_type: { 
		type: String, 
	},
	proctor_rating: { 
		type: String, 
	},
	proctor_feedback_type: { 
		type: String, 
	},
	proctor_feedback: { 
		type: String, 
	},
	isSubmitted: { 
		type: Boolean, 
		default: false,
	},
	started_at: { 
		type: Date, 
	},
	submitted_at: { 
		type: Date, 
	},
	created_at: { 
		type: Date, 
		default: Date.now(),
	},
	custom_rank: { 
		type: Number, 
	},
	custom_total_students: { 
		type: Number, 
	},
})

module.exports.QuizAssign = mongoose.model('QuizAssign', quizAssignSchema)