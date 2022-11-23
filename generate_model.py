import os

module_first_line= """const mongoose = require('mongoose')\nconst { Schema } = mongoose\n\n"""


def generate_model(module_name, fields):
    #creating model ouput file
    model_output_file= './output/models/'+ module_name +'.js'
    os.makedirs(os.path.dirname(model_output_file), exist_ok=True)

    schema_first_line= "const {}Schema = new Schema({{\n".format(module_name)
    schema_last_line= "})\n\n"

    module_last_line= "module.exports.{} = mongoose.model('{}', {}Schema)".format(module_name[0].upper()+module_name[1:], module_name[0].upper()+module_name[1:], module_name)

    output= open(model_output_file, 'w')

    output.write(module_first_line)
    output.write(schema_first_line)

    for field in fields:

        curr_line= "\t{}: {{ \n\t\ttype: {}, \n".format(field['key'],field['type'].capitalize())
        output.write(curr_line)

        if('params' in field):
            for key, value in field['params'].items():
                print('key: ', key, ' value: ', value)
                
                if(not isinstance(value, bool)):
                    value= "'{}'".format(value)
                    
                curr_line= "\t\t{}: {},\n".format(key, str(value).lower())
                output.write(curr_line)             

        output.write('\t},\n')

    output.write(schema_last_line)
    output.write(module_last_line)




    

        


# params - if bool, or number, else 