const express = require("express");
const {
    getScenes,
    getScene,
    updateScene,
    createScene,
    deleteScene,
} = require("../controllers/scenes");

const api = express.Router();

api.route("/").get(getScenes).post(createScene);

api.route("/:sceneid").get(getScene).put(updateScene).delete(deleteScene);

module.exports = api;
