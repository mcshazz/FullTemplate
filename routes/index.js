const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/testing', ensureAuthenticated, (req, res) =>
  res.render('testing', {
    user: req.user
  })
);

module.exports = router;
