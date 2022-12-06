const Joi = require('joi');

const courseCategorySchema = Joi.object({
	proctoring_flags: Joi.array(),

	lanugage: Joi.string(),

	title: Joi.string(),

	parent: Joi.string(),

	created_by: Joi.string(),

	created_at: Joi.date(),

	updated_by: Joi.string(),

})

const validateCourseCategory= async(courseCategory) => { 
    return courseCategorySchema.validate(courseCategory)
}
    
module.exports = validateCourseCategory;
    