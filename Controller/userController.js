const users = require('../Model/userSchema')

const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log("inside user controller");
    const { username, email, password } = req.body
    try {
        const existUser = await users.findOne({ email })
        if (existUser) {
            res.status(406).json("Account Already Exist....Please Login")

        }
        else {
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json('request failed due to', err)
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email, password })
        console.log(existingUser);
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "secretkey")
            res.status(200).json({ existingUser, token })
        }
        else {
            res.status(404).json("invalid email id or password")
        }

    } catch (err) {
        res.status(401).json("login request failed due to :", err)
    }
}