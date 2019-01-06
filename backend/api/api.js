const express = require("express");
const router = express.Router();
const User = require('../models/user');
const Book = require('../models/book');
const Transaction = require('../models/transaction');


// Get list of all the users
router.get("/user", (req,res,next) => {
    User.find({}, {user_name:1, _id:0}).then((u) => {
        user_array = []
        for (let user of u){
            user_array.push(user.user_name);
        }
        res.send(user_array);
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

/*
                                        TRANSACTION API
*/

// Create a new book
router.post('/book', (req,res,next) => {
    Book.create(req.body).then((u) => {
        res.send(u);
    }).catch(next);
});

//Get list of all books
router.get('/book', (req,res,next) => {
    Book.find({}, {book_name:1, _id:0}).then((u) => {
        book_array = []
        for (let book of u){
            book_array.push(book.book_name);
        }
        res.send(book_array);
    }).catch(next);
});

// Get list of all agents
router.get('/book/:book_name', (req,res,next) => {
    Book.find({book_name: req.params.book_name}, {agents:1, _id:0}).then((u) => {
        console.log(u)
        res.send(...u)
    })
})

// Create new transaction in a particular book
router.post('/transaction', (req,res,next) => {
    Transaction.create(req.body).then((u) => {
        res.send(u);
    }).catch(next);
});

// Get transactions from a particular book
router.get('/transaction/:book', (req,res,next) => {
    Transaction.find({book_name: req.params.book}).then((t) => {
        res.send(t)        
    })
})
module.exports = router;