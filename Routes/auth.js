const express = require('express');
const router = express.Router();
const admin1=require('../controllers/auth/register')
const login=require('../controllers/auth/login')
router.route('/registeradmin')
    .post(admin1.admin)
router.route('/registeruser')
    .post(admin1.user)
router.route('/registerdealer')
    .post(admin1.dealer)
router.route('/loginadmin')
    .post(login.admin);
router.route('/loginuser')
    .post(login.user);



module.exports = router;
