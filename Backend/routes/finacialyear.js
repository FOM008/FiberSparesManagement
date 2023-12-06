const express = require('express');
const Finacialyear = require('../models/financialyear');

const router = express.Router();

// Get all financial years
router.get('/', async (req, res) => {
  try {
    const financialyears = await Financialyear.findAll();
    res.status(200).json(financialyears);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new finacial year
router.post('/', async (req, res) => {
  const { financialyear, userid} = req.body;

  try {
    const newFinancialyear= await Finacialyear.create({ financialyear, userid });
    res.status(201).json(newFinancialyear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
