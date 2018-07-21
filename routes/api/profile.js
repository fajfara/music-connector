const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// @route   GET api/profile/test
// @desc    Testing the route
// @access  Public 

router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;

