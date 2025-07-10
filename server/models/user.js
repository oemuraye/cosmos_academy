import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

// Compound unique index
UserSchema.index({ email: 1, category: 1, level: 1 }, { unique: true });

export default mongoose.model("User", UserSchema);