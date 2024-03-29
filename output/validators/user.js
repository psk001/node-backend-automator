const Joi = require('joi');

const userSchema = Joi.object({
	name: Joi.string().required(),

	type: Joi.string().required().valid('T','S','A','P','HR','KA-I',),

	signup_type: Joi.string().required(),

	email: Joi.string().required(),

	mobile: Joi.string(),

	gender: Joi.string().required().valid('M','F','O','T','NB','NC',),

	companies: Joi.array(),

	password: Joi.string().required(),

	is_email_verified: Joi.boolean(),

	created_at: Joi.date(),

	status: Joi.boolean(),

	resume_file: Joi.string(),

	college: Joi.string(),

	prev_employment: Joi.string(),

	tech_stack: Joi.array(),

	branch: Joi.string(),

	cgpa: Joi.number(),

	address: Joi.string(),

	location: Joi.string(),

	hear_about_us: Joi.string(),

	employed_before: Joi.boolean(),

	legal_age: Joi.number(),

	linkedin_url: Joi.string(),

	consent: Joi.string(),

	daily_basis: Joi.string(),

	is_pwd: Joi.boolean(),

	photo_file: Joi.string(),

	gmailUserId: Joi.string(),

	githubId: Joi.string(),

})

const validateUser= async(user) => { 
    return userSchema.validate(user)
}
    
module.exports = validateUser;
    