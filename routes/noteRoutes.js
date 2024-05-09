const express = require('express');
const router = express.Router();

router.get('notes', (req, res) => {
  res.json([
    {
      Hello: 'World',
    },
  ]);
});

router.get('notes', (req, res) => {
  res.json([
    {
      Hello: 'World',
    },
  ]);
});

module.exports = router;
