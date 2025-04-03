const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at least 3 character long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('last name must be at least 3 character long'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 character long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 character long'),
    body('vehicle.plateNumber').isLength({min: 3}).withMessage('plate number must be at least 3 character long'),
    body('vehicle.capacity').isInt().withMessage('capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('vehicle type must be car, bike or auto')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 character long')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)
module.exports = router;