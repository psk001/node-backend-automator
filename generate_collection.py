import os

dummyData= {
	'Boolean': 'true',
	'Date':'2000-03-14',
	'mongoose.Schema.Types.ObjectId':'634d8623ce8abdae5f428605',
	'mongoose.Schema.Types.Mixed':'634d8623ce8abdae5f428605',
	'Number':'14',
	'String': 'test'
}

def _generate_payload(fields):

	data= '"{\\r\\n'

	for field in fields:
		type= field['type']
		
		value= ''
		if isinstance(type, list):
			type= type[0]['type']
			value= dummyData[type]
		else:
			value= dummyData[field['type']]

		current_line= '\\"{}\\": \\"{}\\",\\r\\n'.format(field['key'], value)
		data+=current_line

	data+='}",'

	return data


# generate info segment -- metadata part
def _generate_info_segment(module_name):
    info_segment= """
    \"info\": {{
        \"name\": \"{}\",
        \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"
    }},
    """.format(module_name)

    return info_segment    


# generate item segment -- data part

def _generate_get_all(module_name):
    data= """
		{{
			"name": "Get all {}",
			"protocolProfileBehavior": {{
				"disableBodyPruning": true
			}},
			"request": {{
				"method": "GET",
				"header": [
					{{
						"key": "x-auth-token",
						"value": "",
						"type": "text"
					}},
					{{
						"key": "x-referer-sec-bool",
						"value": "1",
						"type": "text"
					}}
				],
				"body": {{
					"mode": "raw",
					"raw": ""
				}},
				"url": {{
					"raw": "http://localhost:5678/api/{}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5678",
					"path": [
						"api",
						"{}"
					]
				}}
			}},
			"response": []
		}},    
    """.format(module_name, module_name, module_name)

    return data


def _generate_get_one(module_name):
    data= """
		{{
			"name": "Get a {}",
			"request": {{
				"method": "GET",
				"header": [
					{{
						"key": "x-auth-token",
						"value": "",
						"type": "text"
					}},
					{{
						"key": "x-referer-sec-bool",
						"value": "1",
						"type": "text"
					}}
				],
				"url": {{
					"raw": "http://localhost:5678/api/{}/id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5678",
					"path": [
						"api",
						"{}",
						"id"
					]
				}}
			}},
			"response": []
		}},    
    """.format(module_name, module_name, module_name)

    return data


def _generate_post(module_name, fields):
    data= """
		{{
			"name": "Create a {}",
			"request": {{
				"method": "POST",
				"header": [
					{{
						"key": "x-auth-token",
						"value": "",
						"type": "text"
					}},
					{{
						"key": "x-referer-sec-bool",
						"value": "1",
						"type": "text"
					}}
				],
				"body": {{
					"mode": "raw",
					"raw": {}
					"options": {{
						"raw": {{
							"language": "json"
						}}
					}}
				}},
				"url": {{
					"raw": "http://localhost:5678/api/{}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5678",
					"path": [
						"api",
						"{}"
					]
				}}
			}},
			"response": []
		}},    
    """.format(module_name, _generate_payload(fields), module_name, module_name)

	return data


def _generate_put(module_name, fields):
    data= """
		{{
			"name": "Create a {}",
			"request": {{
				"method": "PUT",
				"header": [
					{{
						"key": "x-auth-token",
						"value": "",
						"type": "text"
					}},
					{{
						"key": "x-referer-sec-bool",
						"value": "1",
						"type": "text"
					}}
				],
				"body": {{
					"mode": "raw",
					"raw": {}
					"options": {{
						"raw": {{
							"language": "json"
						}}
					}}
				}},
				"url": {{
					"raw": "http://localhost:5678/api/{}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5678",
					"path": [
						"api",
						"{}"
					]
				}}
			}},
			"response": []
		}},    
    """.format(module_name, _generate_payload(fields), module_name, module_name)

	return data



def _generate_delete(module_name):
    data= """
		{{
			"name": "Delete a {}",
			"request": {{
				"method": "DELETE",
				"header": [
					{{
						"key": "x-auth-token",
						"value": "",
						"type": "text"
					}},
					{{
						"key": "x-referer-sec-bool",
						"value": "1",
						"type": "text"
					}}
				],
				"url": {{
					"raw": "http://localhost:5678/api/{}/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5678",
					"path": [
						"api",
						"{}",
						"id"
					]
				}}
			}},
			"response": []
		}}    
    """.format(module_name, module_name, module_name)

    return data


def generate_collection(module_name, fields):
    #creating collection ouput file
    collection_output_file= './output/collections/'+ module_name +'.json'
    os.makedirs(os.path.dirname(collection_output_file), exist_ok=True)    

    output= open(collection_output_file, 'w')

    # for opening curly brace
    output.write('{')

    # meta data part of collection
    output.write(_generate_info_segment(module_name))

    dummyData= ' "item": [\n '
    output.write(dummyData)

    # data part of collection
    output.write(_generate_get_all(module_name))

    output.write(_generate_get_one(module_name))

    output.write(_generate_post(module_name, fields))

	output.write(_generate_put(module_name, fields))

    output.write(_generate_delete(module_name))



    dummyData= "]\n"
    output.write(dummyData)

    # for closing curly brace
    output.write('}')

# generate_collection('course', )