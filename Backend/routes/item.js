const express = require('express');
const Item = require('../models/item');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  const { itemcode, description, userid} = req.body;

  try {
    const newUser = await User.create({ itemcode, description, userid});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
