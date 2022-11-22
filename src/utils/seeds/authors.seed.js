const mongoose = require("mongoose");
const connectDb = require("../database/db");
const Author = require("../../api/authors/authors.model");

const authors = [
  {
    name: "Virginie Despentes",
    birthdate: "13-06-1969",
    deathdate: "",
    nationality: "France",
    ocupation: "Writer, Film director",
    zodiacSign: "Gemini",
    authorImg:
      "https://imagenes.elpais.com/resizer/OT1AobynO1muWtJ1RDZ_HA2HNlc=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/O2KDXMKCRDXQEJLVLKNJ2VVQ3Q.jpg",
    mostAwardWork: {
      title: "King Kong Theory",
      img: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/despentes-cj_0.jpg?itok=1MNoUDQ4",
    },
  },
  
  {
    name: "Ada Lovelace",
    birthdate: "10-12-1815",
    deathdate: "27-11-1852",
    nationality: "UK",
    ocupation: "Writer, Mathematician, First World Computer Developer",
    zodiacSign: "Sagittarius",
    authorImg:
      "https://images.squarespace-cdn.com/content/v1/5d6e4ca633f26e00011a0c01/1590074717828-AJBDTSE03NPQLTNCB7ZC/ada+lovelace.jpg",
    mostAwardWork: {
      title: "This is what some researchers consider as the first informátic programme in history: the one described by Ada Lovelace in her note's G appendix.",
      img: "https://i.blogs.es/6abba6/notasada/1366_2000.jpg",
    },
  },
  {
    name: "Valerie Solanas",
    birthdate: "09-04-1936",
    deathdate: "26-04-1988",
    nationality: "USA",
    ocupation: "Writer",
    zodiacSign: "Aries",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/en/3/36/Valerie_Solanas.jpg",
    mostAwardWork: {
      title: "SCUM manifesto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LEtCk8UU60zYFFkvdqlntXsdYxGvl8CT4VGhU41cKWvXMzMltiyVFGLG5jPVF33xOJ8&usqp=CAU",
    },
  },
  {
    name: "Valerie Solanas",
    birthdate: "09-04-1936",
    deathdate: "26-04-1988",
    nationality: "USA",
    ocupation: "Writer",
    zodiacSign: "Aries",
    authorImg:
      "https://upload.wikimedia.org/wikipedia/en/3/36/Valerie_Solanas.jpg",
    mostAwardWork: {
      title: "SCUM manifesto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LEtCk8UU60zYFFkvdqlntXsdYxGvl8CT4VGhU41cKWvXMzMltiyVFGLG5jPVF33xOJ8&usqp=CAU",
    },
  },
];

connectDb()
  .then(async () => {
    const allAuthors = await Author.find().lean();

    if (!allAuthors.length) {
      console.log("[seed]: No authors found, continuing...");
    } else {
      console.log(`[seed]: ${allAuthors.length} author(s) found.`);
      await Author.collection.drop();
      console.log("[seed]: Collection 'authors' succesfully removed");
    }
  })
  .catch((error) =>
    console.log("There has been an error removing the authors ---> " + error)
  )
  .then(async () => {
    await Author.insertMany(authors);
    console.log("[seed]: New authors succesfully uploaded to the database");
  })
  .catch((error) =>
    console.log("There has been an error inserting the authors ---> " + error)
  )
  .finally(() => mongoose.disconnect());
