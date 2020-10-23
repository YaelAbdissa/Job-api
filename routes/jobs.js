var express = require('express');
var router = express.Router();

var jobController = require('../controllers/jobController')

/**
 * @typedef Jobs
 * @property {string} job_title.required - job_title
 * @property {string} description.required - Job Description 
 * @property {string} job_type.required -job_type
 * @property {string} salary.required - salary
 * @property {string} experience.required - experience
 */

 /**
 * Get all Jobs
 * 
 * @route GET /jobs
 * @group Job 
 * @security JWT
 * @returns {object} 200 - Array of Reports
 * @returns {Error}  default - Unexpected error
 */
router.get('/', jobController.jobsList);

/**
 * Opened Jobs
 * 
 * @route GET /jobs/open
 * @group Job 
 * @security JWT 
 * @returns {object} 200 - Report object
 * @returns {Error}  default - Unexpected error
 */
router.get('/open', jobController.openJobs);


/**
 * Get Job detail
 * 
 * @route GET /jobs/{id}
 * @group Job 
 * @param {string} id.path.required - user id
 * @security JWT
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', jobController.jobDetail);

/**
 * Delete Job detail
 * 
 * @route DELETE /jobs/{id}
 * @group Job 
 * @param {string} id.path.required - user id
 * @security JWT
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', jobController.deleteJob);

/**
 * Add Jobs
 * 
 * @route POST /jobs
 * @group Job 
 * @security JWT
 * @param {Jobs.model} job.body.required - 
 * @returns {object} 200 - Report object
 * @returns {Error}  default - Unexpected error
 */
router.post('/', jobController.addJob);


module.exports = router;
