const express = require('express');
const Request = require('../models/request');

const router = express.Router();

// Get all requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new request
router.post('/', async (req, res) => {
  const { itemcode, quantity, incidentid, linkname, userid} = req.body;

  try {
    const newRequest = await Request.create({ itemcode, quantity, incidentid, linkname, userid});
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
