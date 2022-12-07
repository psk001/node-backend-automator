const Joi = require('joi');

const interestSchema = Joi.object({
	name: Joi.string().required(),

	icon: Joi.string().required(),

	status: Joi.boolean(),

})

const validateInterest= async(interest) => { 
    return interestSchema.validate(interest)
}
    
module.exports = validateInterest;
    