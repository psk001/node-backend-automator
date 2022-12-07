const express= require('express')
const router= express.Router()

const { Like } = require('../models/like')

router.get("/"), async (req, res)=> {
    try{
        const like= await Like.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: like
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
        const like= await Like.findById(req.params.id).lean()

        if (!like) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: like
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
        const { p1, p1_liked_at, p1_msg, p2, p2_liked_at, p2_msg, is_match, unmatch_on } = req.body

        const like = new Like({
            p1, p1_liked_at, p1_msg, p2, p2_liked_at, p2_msg, is_match, unmatch_on
        });

        await like.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: like
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
        let data = await Like.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await Like.findByIdAndDelete(req.params.id);
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