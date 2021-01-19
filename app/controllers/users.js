const User = require('../models/users');

exports.createOne = async (req, res, next) => {
    console.log("createOne: [POST] /users/");
    try {
        const USER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        try {
            const user = await User.create(USER_MODEL);
            console.log("OK createOne User: ", user);
            return res.send({
                error: false,
                data: user
            });
        } catch (error) {
            console.log(`ERROR in createOne USER:`, user);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
}

// GET ALL
exports.getAll = async (req, res, next) => {
    console.log("getAll [GET] /users/");
    try {
        const ALL = await User.findAll();
        console.log("OK GetAll User: ", ALL.map(el => el.dataValues));
        return res.status(200).json(ALL);
    } catch (error) {
        console.log("ERROR in getAll USER : ", error);
        return res.status(500).json(error);
    }
}

//GET ONE
exports.getOne = async (req, res, next) => {
    console.log("GetOne [GET] /users/:id");
    try {
        const u = await User.findByPk(req.params.id);
        console.log("OK getOne USER: ", u.dataValues);
        return res.status(200).json(u);
    } catch (error) {
        console.log("ERROR getOne USER: ", error);
        return res.status(500).json(error);
    }
}

// UPDATE ONE
exports.updateOne = async (req, res, next) => {
    console.log("updateOne: [PUT] /users/:id");
    const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    try {
        let u = await User.update(USER_MODEL, {where: {id: req.params.id}});
        console.log("OK updateOne USER: ", u);
        return res.status({
            error: false,
            data: u
        });
    } catch (error) {
        console.log("ERROR updateOne USER: ", error);
        return res.status(500).json(error);
    }
}

// Delete One
exports.deleteOne = async (req, res, next) => {
    console.log("deleteOne [DELETE] /users/:id");
    try {
        const u = await User.destroy({ where: { id: req.params.id }});
        console.log("OK deleteOne USER:", u);
        return res.status(200).json(u);
    } catch (error) {
        console.log("ERROR deleteOne USER", error);
        return res.status(500).json(error);
    }
}