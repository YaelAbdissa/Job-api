var express = require('express');
var router = express.Router();

var jobController = require('../controllers/jobController')

/* GET home page. */
router.get('/', jobController.jobsList);
router.get('/:id', jobController.jobDetail);
router.delete('/:id', jobController.deleteJob);
router.post('/', jobController.addJob);

module.exports = router;