const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.models
const User = mongoose.model('User', UserSchema);
module.exports = User;
