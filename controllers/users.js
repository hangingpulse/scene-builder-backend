const User = require("../models/User");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({
            success: true,
            msg: "show all users",
            data: users,
        });
    } catch (err) {
        next(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const user = await user.findById(userid);
        res.json({
            success: true,
            msg: "show selected user",
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const {} = req.body;

        const user = await User.create({});

        res.json({
            success: true,
            msg: `user with title ${title} created`,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const {} = req.body;

        const user = await User.findByIdAndUpdate(userid, {}, { new: true });
        res.json({
            success: true,
            msg: `user with id ${id} updated`,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
};
