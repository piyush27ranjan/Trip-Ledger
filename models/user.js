const express = require("express");
const mongoose = require("mongoose");

var schema = mongoose.Schema;

var UserSchema = new schema({
    user_name: { type: String, required: [true, "user_name is required"], index: { unique: true } },
    password: { type: String, required: true },
    books: {type: Array, default: null}
});



module.exports = mongoose.model('user', UserSchema);