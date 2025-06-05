import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  username: string;
  links: {
    handle: string;
    url: string;
  }[];
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    links: [
      {
        handle: { type: String, required: true, unique: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
export default User;
