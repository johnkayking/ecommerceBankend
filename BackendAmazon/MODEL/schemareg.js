const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    Fname: { type: String, required: true },
    Lname: { type: String, required: true },
    Age: { type: Number, required: true },
    Pnumber: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Address: { type: String, required: true },
    Password: { type: String, required: true },
    Cpassword: { type: String, required: true },
    Country: { type: String, required: true },
    State: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

