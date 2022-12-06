const express= require('express')
const router= express.Router()

const { Quizassign } = require('../models/quizAssign')

router.get("/"), async (req, res)=> {
    try{
        const quizAssign= await Quizassign.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: quizAssign
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
        const quizAssign= await Quizassign.findById(req.params.id).lean()

        if (!quizAssign) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: quizAssign
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
        const { quiz, quiz_set, set_submission, marks, normalized_score, name, email, mobile, gender, college, cgpa, class_ten_perc, class_twelve_perc, num_current_backlogs, grad_degree, branch, grad_degree, proctoring_flags, proctoring_flags, user, response, time_response, marking, created_by, updated_by, invited_by, proctor, proctor_name, proctor_email, is_invited, is_email_error, email_error_msg, extra_time, rating, feedback_type, proctor_rating, proctor_feedback_type, proctor_feedback, isSubmitted, started_at, submitted_at, created_at, custom_rank, custom_total_students } = req.body

        const quizAssign = new Quizassign({
            quiz, quiz_set, set_submission, marks, normalized_score, name, email, mobile, gender, college, cgpa, class_ten_perc, class_twelve_perc, num_current_backlogs, grad_degree, branch, grad_degree, proctoring_flags, proctoring_flags, user, response, time_response, marking, created_by, updated_by, invited_by, proctor, proctor_name, proctor_email, is_invited, is_email_error, email_error_msg, extra_time, rating, feedback_type, proctor_rating, proctor_feedback_type, proctor_feedback, isSubmitted, started_at, submitted_at, created_at, custom_rank, custom_total_students
        });

        await quizAssign.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: quizAssign
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
        let data = await Quizassign.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await Quizassign.findByIdAndDelete(req.params.id);
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