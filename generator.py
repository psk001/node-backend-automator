import json

from generate_model import generate_model
from generate_route import generate_route
from generate_validator import generate_validator
from generate_collection import generate_collection
from populate_db import populate

# creates model from the imput.json file
file= open('like.json')
data= json.load(file)

#getting module name from input
module_name= data['module_name']
field_list= data['fields']

# # GENERATOR FUNCTIONS
# generate_model(module_name, field_list)
# generate_route(module_name, field_list)
# generate_validator(module_name, field_list)
generate_collection(module_name, field_list)

# populate(module_name, field_list)

    
