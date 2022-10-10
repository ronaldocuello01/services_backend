const express = require('express')

const router = express.Router();
const controller = require('../controllers/charge.controller');

// post
router.post('/', controller.create);

// get
router.get('/', controller.get)

// export module
// -----------------------------------------------------------------------------------------------------------------
module.exports = router