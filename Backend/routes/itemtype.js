const express = require('express');
const Itemtype = require('../models/itemtype');

const router = express.Router();

// Get all item types
router.get('/', async (req, res) => {
  try {
    const itemtypes = await Itemtype.findAll();
    res.status(200).json(itemtypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new item type
router.post('/', async (req, res) => {
  const { itemtype, userid} = req.body;

  try {
    const newItemtype = await Itemtype.create({ itemtype, userid });
    res.status(201).json(newItemtype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
