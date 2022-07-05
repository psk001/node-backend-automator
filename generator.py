import json
import os

from numpy import ModuleDeprecationWarning
from generate_model import generate_model
from generate_route import generate_route

# creates model from the imput.json file
file= open('input.json')
data= json.load(file)

#getting module name from input
module_name= data['module_name']
field_list= data['fields']

generate_model(module_name, field_list)
generate_route(module_name, field_list)

    
