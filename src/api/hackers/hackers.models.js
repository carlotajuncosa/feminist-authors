const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const hackersSchema = new Schema({
    name: {type: String, required: true, trim: true },
    description:{type: String, trim: true },
    url:{type: String, trim: true },
    img: {
        type: String,
        default:
          "https://pbs.twimg.com/profile_images/1473729155506319360/TjcpeV6k_400x400.jpg",
        trim: true,
      },
},
{timestamps: true,}
);

const Hackers = mongoose.model("hackers", hackersSchema);
module.exports = Hackers