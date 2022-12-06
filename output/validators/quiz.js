const Joi = require('joi');

const quizSchema = Joi.object({
	title: Joi.string(),

	daily_bdomainasis: Joi.string(),

	start_duration: Joi.string(),

	end_duration: Joi.string(),

	description: Joi.string(),

	navigation_type: Joi.string(),

	is_sections_random: Joi.string(),

	is_proctoring: Joi.string(),

	is_public: Joi.string(),

	is_recording: Joi.string(),

	is_aits: Joi.string(),

	is_a_set: Joi.string(),

	allow_set_choose: Joi.string(),

	sets: Joi.array(),

	alloted_proctors: Joi.array(),

	data: Joi.array(),

	components: Joi.array(),

	created_by: Joi.array(),

	updated_by: Joi.array(),

	assinged_at: Joi.date(),

	proctor_assigned_at: Joi.date(),

	sectionIndex: Joi.number(),

	questionIndex: Joi.number(),

	company: Joi.array(),

	group: Joi.array(),

	status: Joi.boolean(),

})

const validateQuiz= async(quiz) => { 
    return quizSchema.validate(quiz)
}
    
module.exports = validateQuiz;
    