const authSchema    = require("../validatingSchema/authSchema"),
        status      = require("http-status"),
        Token       = require("../models/tokenmodel");


   
    
const authValidations = (Schema) => 
{ 
    return (req,res,next) =>
    {
        const {value,error} = Schema.validate(req.body);
        if(error)
            res.status(status.BAD_REQUEST).send({message:error.details[0].message});
        else
        {
            next(); 
        }
       
    }
}

module.exports = authValidations;

