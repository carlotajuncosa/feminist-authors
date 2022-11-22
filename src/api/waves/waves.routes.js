const express = require("express");
const Wave = require("./waves.models");

const router = express.Router();

const upload = require("../middleware/files");
const deleteFile = require("../middleware/deletefile");


router.get("/waves", async (req, res, next) => {
    try {
      const allWaves = await Wave.find().lean();
      return res.status(200).json(allWaves);
    } catch (error) {
      next(error);
    }
    return response.send("Server funcionando");
  });

  router.get("/waves/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const wave = await Wave.findById(id).lean();
      return res.status(200).json(wave);
    } catch (error) {
      next(error);
    }
  });

  router.post("/waves/create", upload.single("img"), async (req, res, next) => {
    try {
      const wave = req.body;
      if (req.file) {
        wave.img = req.file.path;
      }
      const newWave = new Wave(wave);
      const created = await newWave.save();
      return res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  });

  router.put("/waves/edit/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const wave = req.body;
      const waveOld = await Wave.findById(id);
      if (req.file) {
        if (waveOld.img) {
          deleteFile(waveOld.img);
        }
        wave.img = req.file.path;
      }
      const waveModify = new Wave(wave);
      waveModify._id = id;
      const waveUpdated = await Wave.findByIdAndUpdate(id, waveModify);
      return res
        .status(200)
        .json({
          message: "The wave has been modified succesfully",
          waveModified: waveUpdated,
        });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/waves/delete/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const waveToDelete = await Wave.findByIdAndDelete(id);
      return res
        .status(200)
        .json({
          message: "The wave has been succesfully removed",
          deletedWave: waveToDelete,
        });
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;