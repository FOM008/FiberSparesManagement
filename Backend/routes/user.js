const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const newUser = await User.create({ fname, lname, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
