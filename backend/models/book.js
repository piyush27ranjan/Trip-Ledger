const express = require("express");
const mongoose = require("mongoose");

var schema = mongoose.Schema;

var UserSchema = new schema({
    book_name: {type: String, required: [true, "book name is required"]},
    agents: {type: Array}
});

module.exports = mongoose.model('book', UserSchema);