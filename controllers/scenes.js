const User = require("../models/User");
const Scene = require("../models/Scene");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getScenes = async (req, res, next) => {
    try {
        const scenes = await Scene.find();
        res.json({
            success: true,
            msg: "show all scenes",
            data: scenes,
        });
    } catch (err) {
        next(err);
    }
};

const getScene = async (req, res, next) => {
    try {
        const { sceneid } = req.params;
        const scene = await Scene.findById(sceneid);
        res.json({
            success: true,
            msg: `show scene with id ${id}`,
            data: scene,
        });
    } catch (err) {
        next(err);
    }
};

const getScenesByUserId = async (req, res, next) => {
    try {
        const { userid } = req.params;
        // how do you find a scene for a specific userid
        const scenes = await Scene.find();
        res.json({
            success: true,
            msg: "show all scenes",
            data: scenes,
        });
    } catch (err) {
        next(err);
    }
};

const createScene = async (req, res, next) => {
    try {
        const { title, meta, general, characters, sceneItems } = req.body;

        const scene = await Scene.create(
            title,
            meta,
            general,
            characters,
            sceneItems
        );

        res.json({
            success: true,
            msg: `scene with title ${title} created`,
            data: scene,
        });
    } catch (err) {
        next(err);
    }
};

const getSceneByUserId = async (req, res, next) => {
    try {
        const { userid, sceneid } = req.params;
        const scene = await Scene.findById(sceneid);
        res.json({
            success: true,
            msg: "show selected restaurants",
            data: scene,
        });
    } catch (err) {
        next(err);
    }
};

const updateScene = async (req, res, next) => {
    try {
        const { userid, sceneid } = req.params;
        const {} = req.body;

        const scene = await Scene.findByIdAndUpdate(sceneid, {}, { new: true });
        res.json({
            success: true,
            msg: `scene with id ${id} updated`,
            data: scene,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getScenes,
    getScene,
    getScenesByUserId,
    getSceneByUserId,
    createScene,
    updateScene,
};
