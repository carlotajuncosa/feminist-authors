const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    birthdate: { type: String, required: true, trim: true },
    deathdate: { type: String, trim: true },
    nationality: { type: String, required: true, trim: true },
    ocupation: { type: String, required: true, trim: true },
    zodiacSign: { type: String, trim: true },
    authorImg: {
      type: String,
      default:
        "https://pbs.twimg.com/profile_images/1473729155506319360/TjcpeV6k_400x400.jpg",
      trim: true,
    },
    mostAwardWork: {
      title: { type: String, trim: true },
      img: {
        type: String,
        default:
          "https://pbs.twimg.com/profile_images/1473729155506319360/TjcpeV6k_400x400.jpg",
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("authors", authorSchema);

module.exports = Author;
