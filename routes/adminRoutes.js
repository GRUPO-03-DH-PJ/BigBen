const express = require('express')
const router = express.Router();
const adminController = require('../controllers/adminController')
const auth = require('../middlewares/authMiddleware');


router.get('/', auth, adminController.admin);

module.exports = router;
