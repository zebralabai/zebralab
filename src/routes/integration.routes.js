const express = require('express');
const router = express.Router();
const Integration = require('../models/integration.model');

// Create
router.post('/', async (req, res) => {
  try {
    const integration = await Integration.create(req.body);
    res.status(201).json(integration);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Read all
router.get('/', async (req, res) => {
  const integrations = await Integration.find();
  res.json(integrations);
});

// Read one
router.get('/:id', async (req, res) => {
  const integration = await Integration.findById(req.params.id);
  res.json(integration);
});

// Update
router.put('/:id', async (req, res) => {
  const integration = await Integration.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(integration);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Integration.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;