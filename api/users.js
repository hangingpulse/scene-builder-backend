const express = require("express");
const {
    getScenesByUserId,
    getSceneByUserId,
    updateScene,
    createScene,
} = require("../controllers/scenes");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
} = require("../controllers/users");

const api = express.Router();

api.route("/").get(getUsers).post(createUser);

api.route("/:userid")
    .get(getUser)
    .put(updateUser)
    .get(getScenesByUserId)
    .post(createScene);

api.route("/:userid/:sceneid").get(getSceneByUserId).put(updateScene);

module.exports = api;
