const express = require('express');
const router = express.Router();
 
// @route   GET api/users
// @des     Test route
// @access  Public
router.get('/', (req, res) => res.send('Posts router'));

module.exports = router;