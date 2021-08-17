const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        uniqueID:
        {
            type: String,
            required: true
        },
        token:
        {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("TOKEN",Schema);