var jwt = require('jsonwebtoken');

const { jwt_key } = require('../config/vars')
const userModel = require('../models/user.model')
const roleModel = require('../models/role.model')


exports.login = async (req, res) => {

    try {
        const user = await userModel.findOne({
            email: req.body.email
        }).populate({ path: 'roles', populate: {path: 'permissions'} });

        if(user && await user.verifyPassword(req.body.password)){
            let permissions =  user._doc.roles.reduce((prev, next) => {
                return [...prev, ...next.permissions.map(permission => permission.name)]
            },[])
            user._doc.permissions = Array.from(new Set([...user._doc.permissions.map(v => v.name), ...permissions ]))

            user._doc.roles = user._doc.roles.map(role => role.name)
           return res.json({
               ...user._doc,
               token: jwt.sign(user._doc, jwt_key, { algorithm: 'HS256' })
            })
        }

       throw new Error("Username/password not found")

    } catch (error) {
        
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
    
}

exports.signup = async (req, res) => {

    try {
       
        const user = await userModel.findOne({
            email: req.body.email
        })
        if(user){
            throw new Error("User already Exists")
        }
        const roles = await roleModel.findOne({
            name: "user"
        })
        const newUser = await new userModel({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,
            roles : roles._id,
        })
        
        await newUser.save()
        res.status(200).json(
            newUser
        )
        
    } catch (error) {
        
        res.status(400).json({
            error: true,
            message: error.message
        })
    }

}




