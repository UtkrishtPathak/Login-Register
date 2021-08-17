const User = require("../models/usermodel");

module.exports = 
{
    async createUser(data)
    {
        var user = new User(data);

        const value = await user.save()
        .then(() => {return "SUCCESSFUL"})
        .catch(() => {return "FAILED"});
        
        return value;
    }
}