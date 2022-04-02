const express = require('express')
const { createForm } = require('../controllers/regController')

const router = express.Router()

router.route("/").post(createForm)

module.exports = router