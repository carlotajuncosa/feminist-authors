const express = require("express");
const Hacker = require("./hackers.models");

const router = express.Router();

const upload = require("../../middlewares/file");
const deleteFile = require("../../middlewares/deletefile");


router.get("/hackers", async (req, res, next) => {
    try {
      const allHackers = await Hacker.find().lean();
      return res.status(200).json(allHackers);
    } catch (error) {
      next(error);
    }
    return response.send("Server funcionando");
  });