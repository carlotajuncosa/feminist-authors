const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const wavesSchema = new Schema({
    //Qué campos metemos aquí?
    wave: {type: String, required: true, trim: true },
    century: {type: String, trim: true },
    description:{type: String, trim: true },
    img: {
        type: String,
        default:
          "https://pbs.twimg.com/profile_images/1473729155506319360/TjcpeV6k_400x400.jpg",
        trim: true,
      },
},
{timestamps: true,}
);

const Waves = mongoose.model("waves", wavesSchema);
module.exports = Waves