const express = require('express');
const router = express.Router();
const admin1=require('../controllers/auth/register')
const login=require('../controllers/auth/login')
const dealer=require('../controllers/dealer/dealer')
router.route('/registerCar')
    .post(dealer.Car)


module.exports = router;
