const express = require("express");
const Author = require("./authors.models");

// Crear router
const router = express.Router();

const upload = require("../../middlewares/file");
const deleteFile = require("../../middlewares/deletefile");

// Añadimos rutas
router.get("/", async (req, res, next) => {
  try {
    const allAuthors = await Author.find().lean();
    return res.status(200).json(allAuthors);
  } catch (error) {
    next(error);
  }
  return response.send("Server funcionando");
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await Author.findById(id).lean();
    return res.status(200).json(author);
  } catch (error) {
    next(error);
  }
});

router.post("/create", upload.single("img"), async (req, res, next) => {
  try {
    const author = req.body;
    if (req.file) {
      author.img = req.file.path;
    }
    const newAuthor = new Author(author);
    const created = await newAuthor.save();
    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

router.put("/edit/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = req.body;
    const authorOld = await Author.findById(id);
    if (req.file) {
      if (authorOld.img) {
        deleteFile(authorOld.img);
      }
      author.img = req.file.path;
    }
    const authorModify = new Author(author);
    authorModify._id = id;
    const authorUpdated = await Author.findByIdAndUpdate(id, authorModify);
    return res
      .status(200)
      .json({
        message: "The author has been modified succesfully",
        authorModified: authorUpdated,
      });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const authorToDelete = await Author.findByIdAndDelete(id);
    return res
      .status(200)
      .json({
        message: "The author has been succesfully removed",
        deletedAuthor: authorToDelete,
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
