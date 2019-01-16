const express = require("express");
const mongoose = require("mongoose");

var schema = mongoose.Schema;

var UserSchema = new schema({
    book_name: {type: String, required: [true, "book name is required"]},
    payable_user: {type: Array, required: [true, "payer required"]},
    expense: {type: Number, required: [true, "Expense value required"]},
    borrowers: {type: Array},
    purpose: {type: String}
});

module.exports = mongoose.model('transaction', UserSchema);