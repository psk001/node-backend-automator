const express= require('express')
const router= express.Router()

const { Quiz } = require('../models/quiz')

router.get("/"), async (req, res)=> {
    try{
        const quiz= await Quiz.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: quiz
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
        const quiz= await Quiz.findById(req.params.id).lean()

        if (!quiz) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: quiz
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
        const { title, daily_bdomainasis, start_duration, end_duration, description, navigation_type, is_sections_random, is_proctoring, is_public, is_recording, is_aits, is_a_set, allow_set_choose, sets, alloted_proctors, data, components, created_by, updated_by, assinged_at, proctor_assigned_at, sectionIndex, questionIndex, company, group, status } = req.body

        const quiz = new Quiz({
            title, daily_bdomainasis, start_duration, end_duration, description, navigation_type, is_sections_random, is_proctoring, is_public, is_recording, is_aits, is_a_set, allow_set_choose, sets, alloted_proctors, data, components, created_by, updated_by, assinged_at, proctor_assigned_at, sectionIndex, questionIndex, company, group, status
        });

        await quiz.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: quiz
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
        let data = await Quiz.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await Quiz.findByIdAndDelete(req.params.id);
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