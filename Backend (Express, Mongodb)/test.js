const mongoose = require("mongoose");

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("we are connected")

    var kittySchema = new mongoose.Schema({
        name: String
      });
    
    var Kitten = mongoose.model('Kitten', kittySchema);
    
    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);

    silence.save()
});

