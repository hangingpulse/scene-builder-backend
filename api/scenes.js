const express = require("express");
const {
    getScenes,
    getScene,
    updateScene,
    createScene,
    deleteAllScenes,
} = require("../controllers/scenes");

const api = express.Router();

api.route("/").get(getScenes).post(createScene).delete(deleteAllScenes);

api.route("/:sceneid").get(getScene).put(updateScene);

module.exports = api;
