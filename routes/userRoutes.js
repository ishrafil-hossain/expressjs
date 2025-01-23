const express = require("express");
const {welcome, createUser, getUsers, getSingleUser } = require("../controllers/userControllers");

// create router object
const router = express.Router();

router.get('/', welcome)

// create user 
router.post('/create-user', createUser)

// get all users 
router.get('/all-users', getUsers)

// get single user 
router.get('/single-user/:id?', getSingleUser)

// export
module.exports = router;
