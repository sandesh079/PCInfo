const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  phoneNumber: {type:String, unique: true, required: true},
  email: String,
  fullName: String,
  role: {
    type: String,
    enum: ['user','admin'],
    default: 'user'
  },
  password: String
});

const User = mongoose.model('User', userSchema)
module.exports = User

