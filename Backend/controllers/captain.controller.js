const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    //check if all fields are present
    const {fullname, email, password, vehicle} = req.body;

    //check if captain already exists
    const isCaptainExists = await captainModel.findOne({email});
    if(isCaptainExists){
        return res.status(422).json({message: 'Captain already exists'});
    }
    
    const hashedPassword = await captainModel.hashPassword(password);

    //create captain and vehicle 
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plateNumber: vehicle.plateNumber,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    
    const token = captain.generateAuthToken();
    res.status(201).json({token, captain});
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    //check if all fields are present
    const {email, password} = req.body;

    //check if captain exists
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(422).json({message: 'invalid email or password'});
    }
    
    //compare password with hashed password
    const isPasswordCorrect = await captain.comparePassword(password, captain.password);
    //check if password is correct
    if(!isPasswordCorrect){
        return res.status(422).json({message: 'invalid email or password'});
    }

    //generate jwt-token for the captain
    const token = captain.generateAuthToken();
    //set token in cookie
    res.cookie('token',token);
    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token|| req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({token});
    //clear cookie
    res.clearCookie('token');
    res.status(200).json({message: 'logged out successfully'});
}