import os


def modifyValueByKeyAndType(key, value):
    if(isinstance(value, bool)):
        value= str(value).lower()
        
    elif (value=='Date.now()' or key=='enum'):
        value= value

    elif(isinstance(value, int)):      #bool checker
        value= str(value)
        
    else:
        value= "'{}'".format(value)

    return value


# def generateParams(field):



def generate_model(module_name, fields):
    #creating model ouput file
    model_output_file= './output/models/'+ module_name +'.js'
    os.makedirs(os.path.dirname(model_output_file), exist_ok=True)

    schema_first_line= "const {}Schema = new Schema({{\n".format(module_name)
    schema_last_line= "})\n\n"

    module_first_line= """const mongoose = require('mongoose')\nconst { Schema } = mongoose\n\n"""
    module_last_line= "module.exports.{} = mongoose.model('{}', {}Schema)".format(module_name[0].upper()+module_name[1:], module_name[0].upper()+module_name[1:], module_name)

    output= open(model_output_file, 'w')

    output.write(module_first_line)
    output.write(schema_first_line)

    for field in fields:
        # print('key: ', field['key'], ' type: ', type(field['type']))

        field_last_line=""
        if( isinstance(field['type'], list)):

            field_last_line= '\t],\n'
                        
            output.write("\t{}: [\n".format(field['key']))

            for field in field['type']:
            
                output.write('\t\t{')
                for key, value in field.items():
                    field_curr_line=""
                    if key=="type":
                        field_curr_line= "\n\t\t\t{}: {},".format(key, value)
                    else:
                        value= modifyValueByKeyAndType(key, value)
                        field_curr_line= "\n\t\t\t{}: {},".format(key, value)
                    output.write(field_curr_line)
                output.write('\n\t\t},\n')

        else:
            field_curr_line= "\t{}: {{ \n\t\ttype: {}, \n".format(field['key'],field['type'])
            output.write(field_curr_line)
            field_last_line='\t},\n'

        # output.write(field_curr_line)

        if('params' in field):
            for key, value in field['params'].items():
                # print('key: ', key, ' value: ', value, ' type: ', type(value))
                
                value= modifyValueByKeyAndType(key, value)

                curr_line= "\t\t{}: {},\n".format(key, value)
                output.write(curr_line)             

        output.write(field_last_line)

    output.write(schema_last_line)
    output.write(module_last_line)




    

        


# params - if bool, or number, else 