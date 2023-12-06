const express = require('express');
const Link = require('../models/link');

const router = express.Router();

// Get all links
router.get('/', async (req, res) => {
  try {
    const links = await Link.findAll();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new link
router.post('/', async (req, res) => {
  const { linkname , userid} = req.body;

  try {
    const newLink = await Link.create({ linkname, userid });
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
