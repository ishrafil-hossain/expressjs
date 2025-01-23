const express = require("express");
const {
  welcome,
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

// create router object
const router = express.Router();

router.get("/", welcome);

// create user
router.post("/create-user", createUser);

// get all users
router.get("/all-users", getUsers);

// get single user
router.get("/single-user/:id?", getSingleUser);

// update user
router.put("/update-user/:id?", updateUser);

// delete user
router.delete("/delete-user/:id?", deleteUser);

// export
module.exports = router;
