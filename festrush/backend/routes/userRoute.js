import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.post("/signin", async (req, res) => {
    try {
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if(signinUser) {
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser)
            })
        } else {
            res.status(401).send({message: "Invalid Username or Password."});
        }
    } catch (error) {
        
    }

});

router.get("/createadmin", async (req, res) => {
    try {
            const user = new User({
            name: 'Parth Jedi',
            email: 'parth.joshi@gmail.com',
            password: 'Admin@123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
    } catch(error) {
        res.send({message: error.message});
    }
});

export default router;