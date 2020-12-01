import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";

const userRouter = express.Router();

userRouter.post("/signin", async (req, res) => {
    try {
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if(signinUser && signinUser.password == req.body.password ) {
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
        return console.log(error);
    }

});

userRouter.post("/register", async (req, res) => {
    try {
        console.log(">>", req)
        const user =  new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const newUser =  await user.save();

        if(newUser) {
            res.send({
                _id: newUser.id,
                name: newUser.name,
                password: newUser.password,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: getToken(newUser)
            })
        } else {
            res.status(401).send({message: "Registration failed, invalid user data."});
        }
    } catch (error) {
        console.log(error);
    }
});


userRouter.get("/createadmin", async (req, res) => {
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

export default userRouter;