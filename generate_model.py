import os

module_first_line= """const mongoose = require('mongoose')\nconst { Schema } = mongoose\n\n"""


def generate_model(module_name, fields):
    #creating model ouput file
    model_output_file= './output/'+ module_name +'_model.js'
    os.makedirs(os.path.dirname(model_output_file), exist_ok=True)

    first_schema_line= "const {}Schema = new Schema({{\n".format(module_name)
    last_schema_line= "})\n\n"

    module_last_line= "module.exports.{} = mongoose.model({}, {}Schema)".format(module_name.capitalize(), module_name.capitalize(), module_name)

    output= open(model_output_file, 'w')

    output.write(module_first_line)
    output.write(first_schema_line)

    for field in fields:
        curr_line= "\t{}: {{ \n\t\ttype: {} \n\t}},\n".format(field[0],field[1].capitalize())
        output.write(curr_line)

    output.write(last_schema_line)
    output.write(module_last_line)




    

        


