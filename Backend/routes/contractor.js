const express = require('express');
const Contractor = require('../models/contractor');

const router = express.Router();

// Get all Contractors
router.get('/', async (req, res) => {
  try {
    const contractors = await Contractor.findAll();
    res.status(200).json(contractors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new Contractor
router.post('/', async (req, res) => {
  const { contractorname, userid} = req.body;

  try {
    const newContractor = await Contractor.create({ contractorname, userid });
    res.status(201).json(newContractor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
