const mongoose = require("mongoose");
const connectDb = require("../database/db");
const Wave = require("../../api/waves/waves.model");

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
    description: "",
    img: "https://img.elephantjournal.com/wp-content/uploads/2018/01/38928103985_e7b6e132df_z.jpg",
  },
  {
    wave: "The fourth wave",
    century: "XXI",
    description: "Some people think we’re still in the third wave of feminism since the fourth wave isn’t so much of a shift as the continued growth of the movement. However, with the MeToo movement and a resurgence of attacks on women’s rights, many believe we’re living in a new wave. Social media activism has propelled the movement firmly into the technological age. It builds on the third wave’s emphasis on inclusivity and asks hard questions about what empowerment, equality, and freedom really mean. Fourth-wave feminism continues to reckon with intersectionality. Critics of “white feminism,” which ignores the unique struggles of women of color, expose how non-white feminists and ideas have been – and continue to be – suppressed. Trans rights are a big part of the conversation, too. Feminism has often been an unwelcoming and hostile place for trans women and others who reject the gender binary. Many fourth-wave feminists are working to combat this exclusion. As with every wave before it (and any wave that comes after it), the fourth wave is complex. It encompasses many movements that both complement and clash with each other. This tension is unavoidable. While some types of feminism can have harmful impacts, having a variety of voices makes feminism more inclusive and successful.",
    img: "https://www.1069thex.com/files/2022/02/I0eGL3gMu60-605x403.jpg",
  },
];