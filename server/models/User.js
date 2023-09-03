import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetToken: String,
  resetTokenExp: Date,
});

const User =  mongoose.model('User', userSchema);
export default User;
