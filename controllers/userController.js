const userModel = require('../models/user.model')

exports.viewAllUsers = async (req, res) => {

    try {
        const users = await userModel.find({});
        res.json(users)
    } catch (error) {
        
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
    
}

exports.viewUser = async (req, res) => {

    try {
        const user = await userModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(404).json({
            error: true,
            message: error
        })
    }

}


