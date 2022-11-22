const express = require("express");
const Hacker = require("./hackers.models");

const router = express.Router();

const upload = require("../middleware/files");
const deleteFile = require("../middleware/deletefile");


router.get("/", async (req, res, next) => {
    try {
      const allHackers = await Hacker.find().lean();
      return res.status(200).json(allHackers);
    } catch (error) {
      next(error);
    }
    return response.send("Server funcionando");
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const hacker = await Hacker.findById(id).lean();
      return res.status(200).json(hacker);
    } catch (error) {
      next(error);
    }
  });

  router.post("/create", upload.single("img"), async (req, res, next) => {
    try {
      const hacker = req.body;
      if (req.file) {
        hacker.img = req.file.path;
      }
      const newHacker = new Hacker(hacker);
      const created = await newHacker.save();
      return res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  });

  router.put("/edit/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const hacker = req.body;
      const hackerOld = await Hacker.findById(id);
      if (req.file) {
        if (hackerOld.img) {
          deleteFile(hackerOld.img);
        }
        hacker.img = req.file.path;
      }
      const hackerModify = new Hacker(hacker);
      hackerModify._id = id;
      const hackerUpdated = await Hacker.findByIdAndUpdate(id, hackerModify);
      return res
        .status(200)
        .json({
          message: "The hacker has been modified succesfully",
          hackerModified: hackerUpdated,
        });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/delete/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const hackerToDelete = await Hacker.findByIdAndDelete(id);
      return res
        .status(200)
        .json({
          message: "The hacker has been succesfully removed",
          deletedHacker: hackerToDelete,
        });
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;