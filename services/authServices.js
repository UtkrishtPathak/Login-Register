const User                          = require("../models/usermodel"),
      Token                         = require("../models/tokenmodel"),
      status                        = require("http-status"),
      { generateToken,saveToken }   = require("./tokenServices"),
      userService                   = require("./userServices");
    

module.exports = 
{
    async login(req,res)
    {
        const body = req.body;
        const user = await User.findOne({email:body.email, password:body.password});
        if(!user)
            res.status(status.UNAUTHORIZED).send("Incorrect Email Id or password");
        else
        {
            const jwtoken = await generateToken(user);
            const value = await saveToken(user.uniqueID,jwtoken);

            if(value ==="SUCCESSFUL")
            res.status(status.OK).json({message:"Succesful Login", token:jwtoken});
            else
            res.status(status.INTERNAL_SERVER_ERROR).send("Login failed. Try again.");
        }
            
    },

    async register(req,res)
    {
        const user = await User.findOne({email:req.body.email});
        if(user)
            res.status(status.OK).send("This email id is already registered.");
        else
        {
            const value = await userService.createUser(req.body);
            if(value === "SUCCESSFUL")
                res.status(status.OK).send("You have successfully registered.");
            else
                res.status(status.FAILED_DEPENDENCY).send("Registration Failed. Please try again.");
        }
        
    },

    async logout(req,res)
    {   
        await Token.deleteOne({token:req.body.token})
        .then(() => {
                res.status(status.OK).send("You have successfully logged out.");
            })
        .catch(() => {
                res.status(status.FAILED_DEPENDENCY).send("Logout failed. Try again.");
            });

    },

    async isLoggedIn(req,res)
    {
        const token = await Token.findOne({uniqueID:req.body.uniqueID});
        if(!token)
            res.status(status.UNAUTHORIZED).send("You are not logged in.");
        else
            res.status(status.OK).send("hello world.");
    }
}