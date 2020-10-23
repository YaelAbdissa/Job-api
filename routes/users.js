var express = require('express');
var router = express.Router();

/* GET users listing. */
const userController = require('../controllers/userController')

/**
 * Get All user
 * 
 * @route GET /users/
 * @group User 
 * @security JWT
 * @returns {object} 200 - User objects
 * @returns {Error}  default - Unexpected error
 */
router.get('/', userController.viewAllUsers);


/**
 * Get a user 
 * 
 * @route GET /users/{id}
 * @group User 
 * @security JWT
 * @param {string} id.path.required - user id
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', userController.viewUser);

module.exports = router;
