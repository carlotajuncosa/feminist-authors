const mongoose = require("mongoose");
const connectDb = require("../database/db");
const Hacker = require("../../api/hackers/hackers.models");


const hackers = [
    {   
    name: "Digital Dignity",
    description:"Among other projects they work to erase porn revenge. More info: https://amiinporn.org/es/",
    url:"https://digitaldignity.io/en",
    img:""
      },
    {   
    name: "Women who code",
    description:"Their mission is to inspire women to excel in technology careers",
    url:"https://www.womenwhocode.com/",
    img:""
      },
    {   
    name: "LinuxChix",
    description:"LinuxChix is a community for women who like Linux and for anyone who wants to support women in computing.",
    url:"https://www.linuxchix.org/index.html",
    img:""
      },

    ]



connectDb()
.then(async () => {
  const allHackers = await Hacker.find().lean();

  if (!allHackers.length) {
    console.log("[seed]: No entries found, continuing...");
  } else {
    console.log(`[seed]: ${allHackers.length} hacker(s) found.`);
    await Hacker.collection.drop();
    console.log("[seed]: Collection 'hackers' succesfully removed");
  }
})
.catch((error) =>
  console.log("There has been an error removing the hackers ---> " + error)
)
.then(async () => {
  await Hacker.insertMany(hackers);
  console.log("[seed]: New waves succesfully uploaded to the database");
})
.catch((error) =>
  console.log("There has been an error inserting the hackers ---> " + error)
)
.finally(() => mongoose.disconnect());


    