const express= require('express')
const router= express.Router()

const { User } = require('../models/user')

router.get("/"), async (req, res)=> {
    try{
        const user= await User.find().lean()
        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: user
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
        const user= await User.findById(req.params.id).lean()

        if (!user) {
            return res.status(404).send({
                success: false,
                msg: 'Data not found'
            })
        }

        return res.status(200).send({
            success: true,
            msg: 'Successfully fetched data',
            data: user
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
        const { name, type, signup_type, email, mobile, gender, companies, password, is_email_verified, created_at, status, resume_file, college, prev_employment, tech_stack, branch, cgpa, address, location, hear_about_us, employed_before, legal_age, linkedin_url, consent, daily_basis, is_pwd, photo_file, gmailUserId, githubId } = req.body

        const user = new User({
            name, type, signup_type, email, mobile, gender, companies, password, is_email_verified, created_at, status, resume_file, college, prev_employment, tech_stack, branch, cgpa, address, location, hear_about_us, employed_before, legal_age, linkedin_url, consent, daily_basis, is_pwd, photo_file, gmailUserId, githubId
        });

        await user.save();
        return res.send({
            success: true,
            msg: 'Successfully added data',
            data: user
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
        let data = await User.findById(req.params.id).lean();
        if (!data) return res.status(404).send({
            success: false,
            msg: 'data not found'
        });

        data = await User.findByIdAndDelete(req.params.id);
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