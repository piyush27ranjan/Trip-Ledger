const express = require("express");
const router = express.Router();
const User = require('../models/user');

// Get list of all the users
router.get("/user", (req,res,next) => {
    User.find({}, {user_name:1, _id:0}).then((u) => {
        res.send(u);
    }).catch(next);
});


// Add a new user
router.post('/', (req,res,next) => {
    User.create(req.body).then((u) => {
        res.send(u);
    }).catch(next);
});


// Delete existing user
router.delete('/:id', (req,res) => {
    User.deleteOne({ user_name : req.params.id}).then((u) => {
        res.send(u);
    });
});

module.exports = router;