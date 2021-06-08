const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SceneSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        maxlength: [50, "Only max 50 chars are allowed for the name"],
    },
    //  names of itmes must be exactly the same as fields in MngoDB
    general: {
        header: String,
        background: String,
    },
    characters: [
        {
            id: String,
            name: String,
            colorIndex: Number,
            imageIndex: Number,
            position: Number,
        },
    ],
    sceneItems: [
        {
            id: String,
            characterId: String,
            type: String,
            text: String,
            duration: Number,
            delay: Number,
        },
    ],
});

module.exports = mongoose.model("Scene", SceneSchema);
