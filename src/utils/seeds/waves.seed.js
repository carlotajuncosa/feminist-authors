const mongoose = require("mongoose");
const connectDb = require("../database/db");
const Wave = require("../../api/waves/waves.models");

const waves = [
  {
    wave: "The first wave",
    century: "XIX",
    description:
      "The first wave in the late 19th-century was not the first appearance of feminist ideals, but it was the first real political movement for the Western world. In 1792, Mary Wollstonecraft published the revolutionary Vindication of the Rights of Woman. In 1848, about 200 women met in a church. They came up with 12 resolutions asking for specific rights, such as the right to vote. Reproductive rights also became an important issue for early feminists. After years of feminist activism, Congress finally passed the 19th amendment in 1920 and gave women the vote. This was almost 30 years after New Zealand became the first country where women could vote.First-wave feminism had a fairly simple goal: have society recognize that women are humans, not property. While the leaders of 1st-wave feminism were abolitionists, their focus was on white women’s rights. This exclusion would haunt feminism for years to come.",
    img: "https://cdn.vox-cdn.com/thumbor/LwMamJUpNq2liABJNNpdBAnFl3c=/0x0:4170x2780/1200x0/filters:focal(0x0:4170x2780):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10449045/GettyImages_514900826.jpg",
  },
  {
    wave: "The second wave",
    century: "XX",
    description:
      "Second-wave feminism took place in the 1960s and ‘70s. It built on first-wave feminism and challenged what women’s role in society should be. Inspired by the Civil Rights movement and protests against the Vietnam War, activists focused on the institutions that held women back. This meant taking a closer look at why women were oppressed. Traditional gender and family roles were questioned. Queer theory became more established. There were major victories in this era including the Equal Pay Act of 1963, Roe v. Wade in 1973, and other Supreme Court cases. Three main types of feminism emerged: mainstream/liberal, radical, and cultural. Mainstream feminism focused on institutional reforms, which meant reducing gender discrimination, giving women access to male-dominated spaces, and promoting equality. Radical feminism wanted to reshape society entirely, saying that the system was inherently patriarchal and only an overhaul would bring liberation. It resisted the belief that men and women were basically the same. Cultural feminism had a similar view and taught that there’s a “female essence” that’s distinct from men.",
    img: "https://cdn.vox-cdn.com/thumbor/FoRNaSAuNxTPE0xWufLv93zLp-A=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10449281/GettyImages_634778694.jpg",
  },
  {
    wave: "The third wave",
    century: "XX",
    description: "Thanks to the institutional victories of second-wave feminism, women enjoyed more rights and power going into the 1990s. They were able to think about other aspects of their identity, welcoming individuality and rebellion. This was an era of reclaiming. Important cultural touchstones include Eve Ensler’s The Vagina Monologues, the Guerilla Girls, and punk rock riot grrls. Many women more freely expressed their sexuality in how they spoke, dressed, and acted. This sometimes bewildered 2nd-wave feminists, many of whom had resisted traditional femininity. While many ideas and mini-movements swirled around in this time, the one “rule” was that there weren’t rules. A woman should choose how she lived her life. Third-wave feminism also became more conscious of race. Kimberle Crenshaw, a gender and critical-race scholar, coined the phrase “intersectionality” in 1989. The term refers to how different kinds of oppression – like those based on gender and race – intersect with each other. While mainstream first and second-wave feminism had largely ignored or neglected racial disparities within gender, the Third wave paid more attention.  The phrase “third-wave feminism” was coined in 1992 by Rebecca Walker, a 23-year old Black bisexual woman. When the internet became more commonplace, it was even easier to hear perspectives and ideas from feminists around the world. Feminism was expanding.",
    img: "https://img.elephantjournal.com/wp-content/uploads/2018/01/38928103985_e7b6e132df_z.jpg",
  },
  {
    wave: "The fourth wave",
    century: "XXI",
    description: "Some people think we’re still in the third wave of feminism since the fourth wave isn’t so much of a shift as the continued growth of the movement. However, with the MeToo movement and a resurgence of attacks on women’s rights, many believe we’re living in a new wave. Social media activism has propelled the movement firmly into the technological age. It builds on the third wave’s emphasis on inclusivity and asks hard questions about what empowerment, equality, and freedom really mean. Fourth-wave feminism continues to reckon with intersectionality. Critics of “white feminism,” which ignores the unique struggles of women of color, expose how non-white feminists and ideas have been – and continue to be – suppressed. Trans rights are a big part of the conversation, too. Feminism has often been an unwelcoming and hostile place for trans women and others who reject the gender binary. Many fourth-wave feminists are working to combat this exclusion. As with every wave before it (and any wave that comes after it), the fourth wave is complex. It encompasses many movements that both complement and clash with each other. This tension is unavoidable. While some types of feminism can have harmful impacts, having a variety of voices makes feminism more inclusive and successful.",
    img: "https://www.1069thex.com/files/2022/02/I0eGL3gMu60-605x403.jpg",
  },
];


connectDb()
  .then(async () => {
    const allWaves = await Wave.find().lean();

    if (!allWaves.length) {
      console.log("[seed]: No waves found, continuing...");
    } else {
      console.log(`[seed]: ${allWaves.length} wave(s) found.`);
      await Author.collection.drop();
      console.log("[seed]: Collection 'waves' succesfully removed");
    }
  })
  .catch((error) =>
    console.log("There has been an error removing the waves ---> " + error)
  )
  .then(async () => {
    await Wave.insertMany(waves);
    console.log("[seed]: New waves succesfully uploaded to the database");
  })
  .catch((error) =>
    console.log("There has been an error inserting the waves ---> " + error)
  )
  .finally(() => mongoose.disconnect());