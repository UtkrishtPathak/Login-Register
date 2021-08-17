const jwt       = require("jsonwebtoken"),
      secret    = "alohomora",
      Token     = require("../models/tokenmodel");

module.exports = 
{
    async generateToken(user)
    {
        const data = 
        {
            uniqueID : user.uniqueID,
            email : user.email
        };
        
        return jwt.sign(data,secret,{ expiresIn: '1h'});

    },

    async saveToken(id,jwtoken)
    {
        console.log(id);
        console.log(jwtoken);
        var token = new Token(
            {
                uniqueID: id,
                token: jwtoken
            });
        
        const value = await token.save()
        .then(() => {return "SUCCESSFUL"})
        .catch((error) => {return "FAILED"});
        
        return value;
}
}