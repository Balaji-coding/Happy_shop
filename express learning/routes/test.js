const express =require('express')
const router =express.Router();
const { getTesting, createTesting,searchone } = require("../controllers/testController")

router.route('/test/:id').get(getTesting)
router.route('/testPost').post(createTesting)
router.route('/testone').post(searchone)

module.exports =router