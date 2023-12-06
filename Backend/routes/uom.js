const express = require('express');
const UOM = require('../models/uom');

const router = express.Router();

// Get all UOMs
router.get('/', async (req, res) => {
  try {
    const UOMs = await UOM.findAll();
    res.status(200).json(UOMs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new UOM
router.post('/', async (req, res) => {
  const { uom, userid} = req.body;

  try {
    const newUOM = await UOM.create({ uom, userid });
    res.status(201).json(newUOM);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
