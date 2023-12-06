const express = require('express');
const Role = require('../models/role');

const router = express.Router();

// Get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new role
router.post('/', async (req, res) => {
  const { roletype, userid} = req.body;

  try {
    const newRole = await Role.create({ roletype, userid });
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
