const catchAsyncError = require("../middleware/catchAsyncError")
const Form = require("../model/registrationModel")


exports.createForm =catchAsyncError( async (req, res, next) => {
    
        const regUser = new Form({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })

        const registered = await regUser.save()
        res.status(201).render("index")

    // const form = await Form.create(req.body)
    // res.status(201).json({
    //     success: true,
    //     form
    // })
})