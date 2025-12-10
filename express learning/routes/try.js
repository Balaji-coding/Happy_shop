const express = require('express')
const { Try } = require('../controllers/Try')
const route =express.Router()
route.route('/testing').get((req,res)=>res.json("hello"))
module.exports =route