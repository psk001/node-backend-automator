const Joi = require('joi');

const quizAssignSchema = Joi.object({
	quiz: Joi.array(),

	quiz_set: Joi.array(),

	set_submission: Joi.array(),

	marks: Joi.number(),

	normalized_score: Joi.number(),

	name: Joi.string(),

	email: Joi.string(),

	mobile: Joi.string(),

	gender: Joi.string(),

	college: Joi.string(),

	cgpa: Joi.number(),

	class_ten_perc: Joi.number(),

	class_twelve_perc: Joi.number(),

	num_current_backlogs: Joi.string(),

	grad_degree: Joi.string(),

	branch: Joi.string(),

	grad_degree: Joi.array(),

	proctoring_flags: Joi.array(),

	proctoring_flags: Joi.array(),

	user: Joi.array(),

	response: Joi.array(),

	time_response: Joi.array(),

	marking: Joi.array(),

	created_by: Joi.array(),

	updated_by: Joi.array(),

	invited_by: Joi.array(),

	proctor: Joi.array(),

	proctor_name: Joi.string(),

	proctor_email: Joi.string(),

	is_invited: Joi.boolean(),

	is_email_error: Joi.boolean(),

	email_error_msg: Joi.string(),

	extra_time: Joi.number(),

	rating: Joi.number(),

	feedback_type: Joi.string(),

	proctor_rating: Joi.string(),

	proctor_feedback_type: Joi.string(),

	proctor_feedback: Joi.string(),

	isSubmitted: Joi.boolean(),

	started_at: Joi.date(),

	submitted_at: Joi.date(),

	created_at: Joi.date(),

	custom_rank: Joi.number(),

	custom_total_students: Joi.number(),

})

const validateQuizAssign= async(quizAssign) => { 
    return quizAssignSchema.validate(quizAssign)
}
    
module.exports = validateQuizAssign;
    