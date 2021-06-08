const express = require("express");
const {
    getScenes,
    getScene,
    updateScene,
    createScene,
} = require("../controllers/scenes");

const api = express.Router();

api.route("/").get(getScenes).post(createScene);

api.route("/:sceneid").get(getScene).put(updateScene);

module.exports = api;
