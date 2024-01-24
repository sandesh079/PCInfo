const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerNewUser = async(req, res)=>{
    try{
        const existingUser = await User.findOne({phoneNumber: req.body.phoneNumber, email: req.body.email})
        if(existingUser){
            return res.status(403).json({
                msg: "User Already Exist"
            })
        }
        const hashPass = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password = hashPass
        await User.create(req.body)
        res.json({
            msg: "Register Successfully"    
        })
    }catch(err){
        console.log(err)
    }
}


const getAllUsers = async(req, res)=>{
    const data = await User.find()
    res.json({data})
}


const loginUser = async(req, res)=>{
    try{
        const userDetails = await User.findOne({ email: req.body.email})
        if(userDetails){
            const match = await bcrypt.compare(req.body.password, userDetails.password)
            if(match){
                const token = jwt.sign({ email: req.body.email }, 'shhhhh');
                res.json({
                    msg: 'Login Successful', token
                })
            }else{
                res.json({
                    msg: 'Incorrect Password'
                })
            }
        }else{
            res.status(403).json({
                msg: 'Invalid email address'
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {registerNewUser, loginUser, getAllUsers}

