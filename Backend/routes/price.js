const express = require('express');
const Price = require('../models/price');

const router = express.Router();

// Get all prices
router.get('/', async (req, res) => {
  try {
    const prices = await Price.findAll();
    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new price
router.post('/', async (req, res) => {
  const { itemcode, unitcost, userid } = req.body;

  try {
    const newPrice = await Price.create({ itemcode, unitcost, userid });
    res.status(201).json(newPrice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
