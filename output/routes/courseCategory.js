const express= require('express')
const router= express.Router()

const { Coursecategory } = require('../models/courseCategory')

router.get("/"), async (req, res)=> {
    try{
        const courseCategory= await Coursecategory.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: courseCategory
        })
    }
    catch(err){
        return res.status(400).send({
            success: false,
            msg: 'Could not fetch data'
        })
    }
}

router.get("/:id"), async (req, res)=> {
    try{
        const courseCategory= await Coursecategory.findById(req.params.id).lean()

        if (!courseCategory) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: courseCategory
        })
    }
    catch(err){
        return res.status(400).send({
            success: false,
            msg: 'Could not fetch data'
        })
    }
}


router.post("/", async (req, res) => {
    try {
        const { proctoring_flags, lanugage, title, parent, created_by, created_at, updated_by } = req.body

        const courseCategory = new Coursecategory({
            proctoring_flags, lanugage, title, parent, created_by, created_at, updated_by
        });

        await courseCategory.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: courseCategory
        });
    }
    catch (error) {
        console.error(error.message);
        return res.status(400).send({
            success: false,
            msg: 'Could not create data',
        });
    }
})


router.delete("/:id", async (req, res) => {
    try {
        let data = await Coursecategory.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await Coursecategory.findByIdAndDelete(req.params.id);
        return res.status(200).send({ 
            success: true, 
            msg:'Successfully deleted item',
            data
        });
    } catch (error) {
        console.error(error.message);
        return res.status(400).send({
            success: false,
            msg: 'Could not delete item'
        });
    }
})    

module.exports= router