const express= require('express')
const router= express.Router()

const { Interest } = require('../models/interest')

router.get("/"), async (req, res)=> {
    try{
        const interest= await Interest.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: interest
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
        const interest= await Interest.findById(req.params.id).lean()

        if (!interest) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: interest
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
        const { name, icon, status } = req.body

        const interest = new Interest({
            name, icon, status
        });

        await interest.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: interest
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
        let data = await Interest.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await Interest.findByIdAndDelete(req.params.id);
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