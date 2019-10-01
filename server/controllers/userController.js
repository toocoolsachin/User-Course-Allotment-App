const User = require('../models/userModel');

exports.addUser = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      collegeName: req.body.collegeName,
      graduationYear: req.body.graduationYear
    });
    res.status(201).json({
      status: 'User added successfully'
    });
  } catch (error) {
    res.status(400).send(`Error in adding user: ${error}`);
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(`Error in listing user: ${error}`);
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(`Error in fetching user: ${error}`);
  }
};

exports.updateUser = async (req, res) => {
  console.log(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(201).json({
      status: 'User updated successfully',
      updatedUser
    });
  } catch (error) {
    res.status(400).send(`Error in updating user: ${error}`);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'User deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(400).send(`Error in deleting user: ${error}`);
  }
};
