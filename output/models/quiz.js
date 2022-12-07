const mongoose = require('mongoose')
const { Schema } = mongoose

const quizSchema = new Schema({
	title: { 
		type: String, 
	},
	daily_bdomainasis: { 
		type: String, 
	},
	start_duration: { 
		type: String, 
	},
	end_duration: { 
		type: String, 
	},
	description: { 
		type: String, 
	},
	navigation_type: { 
		type: String, 
	},
	is_sections_random: { 
		type: String, 
	},
	is_proctoring: { 
		type: String, 
	},
	is_public: { 
		type: String, 
	},
	is_recording: { 
		type: String, 
	},
	is_aits: { 
		type: String, 
	},
	is_a_set: { 
		type: String, 
	},
	allow_set_choose: { 
		type: String, 
	},
	sets: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Quiz',
		},
	],
	alloted_proctors: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	data: [
		{
			type: mongoose.Schema.Types.Mixed,
		},
	],
	components: [
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
	assinged_at: { 
		type: Date, 
	},
	proctor_assigned_at: { 
		type: Date, 
	},
	sectionIndex: { 
		type: Number, 
	},
	questionIndex: { 
		type: Number, 
	},
	company: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Company',
		},
	],
	group: [
		{
			type: mongoose.Schema.Types.Mixed,
			ref: 'QuizGroup',
		},
	],
	status: { 
		type: Boolean, 
		default: true,
	},
})

module.exports.Quiz = mongoose.model('Quiz', quizSchema)