const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController');


router.get('/',EmployeeController.index)
router.get('/store',EmployeeController.store)

module.exports = router;
