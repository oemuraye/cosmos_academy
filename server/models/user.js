import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true }, 
  phone: String,
  joinedAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
