const express = require("express");
require("dotenv").config();
const connectDb = require("./src/utils/database/db");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const PORT = process.env.PORT;
const server = express();
const authorsRoutes = require("./src/api/authors/authors.routes");

const router = express.Router();

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//Con esto el servidor puede abrir los datos, que vienen en formato json
server.use(express.json());
//el futuro front recibirá los datos a través de esta url
server.use(express.urlencoded({ extended: false }));

//Aquí las rutas
server.use("/authors", authorsRoutes);

//cualquier ruta que NO coincida con ninguna de nuestras rutas ya definidas, devolverá un error 404
server.use("*", (req, res) => {
  const error = new Error("ERROR 404! THE ROUTE DOES NOT EXIST");
  return res.status(404).json(error.message);
});

//vigilante que no duerme, vigila nuestro puerto y se asegura de que todo va bien
server.listen(PORT, () => {
  console.log(`Servidor a la espera de órdenes en http://localhost:${PORT}`);
});

//! ESTA SOBRA >-->
router.get("/", (request, response) => {
  return response.send("Servidor funcionando");
});
