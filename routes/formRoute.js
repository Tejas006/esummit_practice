const express = require('express')
const { createForm } = require('../controllers/regController')

const router = express.Router()

router.route("/form").post(createForm)

module.exports = router