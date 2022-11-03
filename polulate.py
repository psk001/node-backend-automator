import random
import requests
import string


def populate(module_name, fields, port=5000):
    url= 'http://localhost:5000/api/{}'.format(module_name)
    request_obj= {}

    for field in fields:
        val=""
        if(field['type']=='string'):
            val= generateRandomString()
        
        elif (field['type']=='number'):
            val= generateRandomNumber()

        request_obj['{}'.format(field['key'])]= val

    x = requests.post(url, json= request_obj)

    pass    



def generateRandomNumber():
    return random.randint(1000, 99999)

def generateRandomString():
    res = ''.join(random.choices(
                            string.ascii_lowercase +
                            string.digits, k=5
                            ))
    return res
