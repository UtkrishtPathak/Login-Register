const mongoose      = require("mongoose"),
      { nanoid }    = require("nanoid");


const Schema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
            trim: true
        },
        gender:
        {
            type: String,
            required: true,
        },
        dob:
        {
            type: String,
            required: true,
        },
        email:
        {
            type:String,
            required:true,
        },
        password:
        {
            type: String,
            required: true
        },
        uniqueID:
        {
            type:String,
            required: true,
            default: nanoid(8)
        }
    }
);

module.exports = mongoose.model("USER",Schema);