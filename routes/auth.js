var express = require('express');
var router = express.Router();

var authController = require('../controllers/authController');
/**
 * @typedef USER
 * @property {string} first_name.required - A Unique user name
 * @property {string} last_name.required - A Unique user name
 * @property {string} email.required - A Unique email name
 * @property {string} password.required - A strong password
 */

 /**
 * @typedef UserL
 * @property {string} email.required - A Unique email name
 * @property {string} password.required - A strong password
 */

 /**
 * Signup
 * 
 * @route POST /auth/signup
 * @group User 
 * @param {USER.model} user.body.required - User Sign UP
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.post('/signup', authController.signup);

/**
 * Login
 * 
 * @route POST /auth/login 
 * @group User 
 * @param {UserL.model} user.body.required - User Login 
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.post('/login',  authController.login);


module.exports = router;
