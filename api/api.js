const express = require("express");
const router = express.Router();
const User = require('../models/user')

router.get("/", (req,res,next) => {
    res.status(200);
    res.end();
});

router.post('/', (req,res,next) => {
    User.create(req.body).then((u) => {
        res.send(u);
    }).catch(next);
});

router.delete('/:id', (req,res) => {
    User.deleteOne({ user_name : req.params.id}).then((u) => {
        res.send(u);
    });
});

module.exports = router;