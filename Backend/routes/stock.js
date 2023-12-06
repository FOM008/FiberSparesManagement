const express = require('express');
const Stock = require('../models/stock');

const router = express.Router();

// Get all stock
router.get('/', async (req, res) => {
  try {
    const stock= await Stock.findAll();
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create stock
router.post('/', async (req, res) => {
  const { itemcode, quantity, unitcost, totalprice, description, userid } = req.body;

  try {
    const newStock = await Stock.create({ itemcode, quantity, unitcost, totalprice, description, userid});
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
