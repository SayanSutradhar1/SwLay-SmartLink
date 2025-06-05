import mongoose, { Document } from "mongoose";

interface Song extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  artist: mongoose.Types.ObjectId;
  links: {
    handle: string;
    url: string;
  }[];
}

const songSchema = new mongoose.Schema<Song>({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  links: [
    {
      handle: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});


export const Song =
  (mongoose.models.Song as mongoose.Model<Song>) ||
  mongoose.model<Song>("Song", songSchema);
