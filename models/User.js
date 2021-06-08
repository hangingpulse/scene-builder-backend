const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        maxlength: [50, "Only max 50 chars are allowed for the name"],
    },
    //  names of itmes must be exactly the same as fields in MngoDB
    email: {
        type: String,
        required: [true, "Please add an mail address"],
    },
    password: {
        type: String,
        required: true,
    },
    scenes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Scene",
        },
    ],
});

module.exports = mongoose.model("User", UserSchema);
