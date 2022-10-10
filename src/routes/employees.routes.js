const express = require('express')

const router = express.Router();
const controller = require('../controllers/employee.controller');

// post
router.post('/', controller.create);
// router.post('/filter/', controller.filter);

// get
router.get('/', controller.get)

// put
router.put('/:id', controller.update);

// delete
router.delete('/:id', controller.destroy);


// export module
// -----------------------------------------------------------------------------------------------------------------
module.exports = router