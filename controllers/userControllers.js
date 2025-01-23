const UserModel = require("../models/userModel");

const welcome = (req, res) => {
  res.send("<h1>Welcome To Express App! </h1>");
};

// create user function
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({ name, email, password });
    res.status(201).json({
      status: true,
      message: "user created successfully",
      user,
    });
  } catch (error) {
    console.log(`Error creating user from user controller: ${error}`);
    res.status(400).json({
      status: false,
      message: "user not created! please try again!",
      error,
    });
  }
};

// get all users function
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      status: true,
      message: "users get successfully",
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "get all users error",
      error: error.message,
    });
  }
};

// get single user function
const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.id || req.query.id;
    const user = await UserModel.findById(userId);
    if (user) {
      res.status(200).json({
        success: true,
        message: "user get successfully",
        user,
      });
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "get single user error",
      error: error.message,
    });
  }
};

// update user function
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id || req.query.id;
    const user = await UserModel.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.status(201).json({
        success: true,
        message: "User updated successfully",
        updatedUser,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "User not updated! please try again",
      error: error.message,
    });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id || req.query.id;
    const user = await UserModel.findById(userId);
    if (user) {
      await user.deleteOne();
      res.status(201).json({
        success: true,
        message: "user deleted successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "user didn't delete! try again",
      error: error.message,
    });
  }
};

module.exports = {
  welcome,
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
