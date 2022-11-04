import os

module_first_line= """const Joi = require('joi');\n\n"""


def generate_validator(module_name, fields):
    #creating validator output file
    model_output_file= './output/validators/'+ module_name +'.js'
    os.makedirs(os.path.dirname(model_output_file), exist_ok=True)

    first_schema_line= "const {}Schema = Joi.object({{\n".format(module_name)

    output= open(model_output_file, 'w')

    output.write(module_first_line)
    output.write(first_schema_line)

    # writing all fields
    for field in fields:

        size_val=""",\n\n"""
        if field['type']=='string':
            size_val=".min(5).max(255)"+size_val

        curr_line= "\t{}: Joi.{}()".format(field['key'], field['type'])+size_val

        output.write(curr_line)    

    # closing joi object
    output.write('})\n')

    # validator function
    output.write(generate_function(module_name))

    # module exports line
    function_name= module_name[0].upper()+module_name[1:]
    module_last_line= """
module.exports = validate{};
    """.format(function_name)

    output.write(module_last_line)

def generate_function(module_name):
    function_name= module_name[0].upper()+module_name[1:]
    res= """
const validate{}= async({}) => {{ 
    return {}Schema.validate({})
}}
    """.format(function_name, module_name, module_name, module_name)

    return res