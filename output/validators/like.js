const Joi = require('joi');

const likeSchema = Joi.object({
	p1: Joi.string().required(),

	p1_liked_at: Joi.date(),

	p1_msg: Joi.string(),

	p2: Joi.string(),

	p2_liked_at: Joi.date(),

	p2_msg: Joi.string(),

	is_match: Joi.boolean(),

	unmatch_on: Joi.date(),

})

const validateLike= async(like) => { 
    return likeSchema.validate(like)
}
    
module.exports = validateLike;
    