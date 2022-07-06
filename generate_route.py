import os

module_first_line= "const express= require('express')\nconst router= express.Router()\n\n"

#  get all objects from table 
def get_all_route(module_name):
    
    getAllRoute= """
router.get("/"), async (req, res)=> {{
    try{{
        const {}= await {}.find().lean()
        return res.status(200).send({{
            success: true,
            msg: 'Successfully fetched data',
            data: {}
        }})
    }}
    catch(err){{
        return res.status(400).send({{
            success: false,
            msg: 'Could not fetch data'
        }})
    }}
}}
""".format(module_name, module_name.capitalize(), module_name)
    return getAllRoute


#  get one object by id 
def get_one_route(module_name):
    getOneRoute= """
router.get("/:id"), async (req, res)=> {{
    try{{
        const {}= await {}.findById(req.params.id).lean()

        if (!{}) {{
            return res.status(404).send({{
                success: false,
                msg: 'Data not found'
            }})
        }}

        return res.status(200).send({{
            success: true,
            msg: 'Successfully fetched data',
            data: {}
        }})
    }}
    catch(err){{
        return res.status(400).send({{
            success: false,
            msg: 'Could not fetch data'
        }})
    }}
}}

""".format(module_name, module_name.capitalize(), module_name, module_name)
    return getOneRoute
    

# post data to route
def post_route(module_name, fields):
    req_body= ""
    for field in fields:
        val= list(field.values())[0]
        req_body+= val+", "
    req_body=req_body[:-2]  

    postRoute= """
router.post("/", async (req, res) => {{
    try {{
        const {{ {} }} = req.body

        const {} = new {}({{
            {}
        }});

        await {}.save();
        return res.send({{
            success: true,
            msg: 'Successfully added data',
            data: {}
        }});
    }}
    catch (error) {{
        console.error(error.message);
        return res.status(400).send({{
            success: false,
            msg: 'Could not create data',
        }});
    }}
}})

""".format(req_body, module_name, module_name.capitalize(), req_body, module_name, module_name)
    return postRoute


# delete by id route
def delete_route(module_name):
    deleteRoute= """
router.delete("/:id", async (req, res) => {{
    try {{
        let data = await {}.findById(req.params.id).lean();
        if (!data) return res.status(404).send({{
            success: false,
            msg: 'data not found'
        }});

        data = await {}.findByIdAndDelete(req.params.id);
        return res.status(200).send({{ 
            success: true, 
            msg:'Successfully deleted item',
            data
        }});
    }} catch (error) {{
        console.error(error.message);
        return res.status(400).send({{
            success: false,
            msg: 'Could not delete item'
        }});
    }}
}})    

""".format(module_name.capitalize(), module_name.capitalize())

    return deleteRoute

def generate_route(module_name, fields):
    
    route_output_file= './output/'+ module_name +'_route.js'
    os.makedirs(os.path.dirname(route_output_file), exist_ok=True)

    first_route_line= "const {{ {} }} = require('../models/{}')\n".format(module_name.capitalize(), module_name)

    output= open(route_output_file, 'w')

    output.write(module_first_line)
    output.write(first_route_line)

    output.write(get_all_route(module_name))
    output.write(get_one_route(module_name))
    output.write(post_route(module_name, fields))
    output.write(delete_route(module_name))


    # last line- export 
    output.write("module.exports= router")
