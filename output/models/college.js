const mongoose = require('mongoose')
const { Schema } = mongoose

const collegeSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		unique: true,
	},
	parent: { 
		type: Mongoose.schema.types.objectid, 
		ref: CourseCategory,
	},
	created_by: { 
		type: Mongoose.schema.types.objectid, 
		required: true,
		ref: User,
	},
	updated_by: { 
		type: Mongoose.schema.types.objectid, 
		ref: User,
	},
})

module.exports.College = mongoose.model('College', collegeSchema)