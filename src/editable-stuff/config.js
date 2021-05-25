const navBar = {
  show: true,
};

const mainBody = {
  show: true,
  gradientColors: "#000000, #000000",
  firstName: "Welcome to Astronomica!",
  middleName: "",
  message: "Enter the Elysian Spiral...",
  icons: [
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCx03EedbIJrnWSRjbDTn_jA",
    },
    {
      image: "fa-discord",
      url: "https://discord.com/invite/YaG9yEs",
    },
  ],
};

const news = {
  show: true,
  heading: "Astronomica News",
  news: ["news"],
}

const howToPlay = {
  show: true,
  heading: "How To Play Astronomica",
  url: "https://www.youtube.com/watch?v=FDY4ca5ej0U&ab_channel=AetherGames",
  pdfRulebook: require("../editable-stuff/Astronomica-Rulebook-1.pdf"),
  pdfBeginnerGuide: require("../editable-stuff/Astronomica-Beginners-Guide_4.pdf"),
  text: [
    "Astronomica is an easy game to pick up and learn!",
    "The video to the left is a comprehensive guide to playing your first game.",
    "If you prefer to read, you can check out both the Beginner's Guide and the Full Rulebook.",
    "",
    "",
    "Got a Ruling Question?",
    "Rulings are also included in the Full Rulebook.",
  ],
}

const shop = {
  show: true,
  heading: "Shop Astronomica @ The Game Crafter",
  items: [
    "https://www.tgcwidgets.com/widget.html#id=BE10418A-C861-11E9-AA51-07AEAB9B09E5&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=ABEB204E-7C90-11EB-9666-7DD5C687CE59&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=4BE01050-7215-11EA-9310-A03E94A91A76&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=71E7DD80-804E-11EB-8C6C-D138D46C0BFF&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=F0E78872-7214-11EA-99CC-0F71D87020BB&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=3635DC26-CD24-11E9-A65A-3D82AB9B09E5&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=36DBD75C-CD24-11E9-A65A-4A82AB9B09E5&size=bar&buttons=two",
    "https://www.tgcwidgets.com/widget.html#id=38D0B276-CD24-11E9-8DEB-B000C2B1929C&size=bar&buttons=two",
  ]
}

const lore = {
  show: true,
  heading: "Astronomica Lore - Beneath the Cards",
  url: "https://www.youtube.com/watch?v=YzpPcWtqf9c&ab_channel=AetherGames",
  playlistLink: "https://www.youtube.com/watch?v=YzpPcWtqf9c&list=PLrJfi0O6oJYkD4aRCpFTpNaduqqE_3Kc6&ab_channel=AetherGames",
  loreTextItems: [
    "In the distant past, at a time when life on other plants was a mere fairytale, the galaxy was home to an ancient race known as the Precursors. They had control of both the primal forces of the universe, and hyper-advanced technology unlike anything known to the modern races. Their empire stretched across the Elysian Spiral, inhabiting hundreds of worlds. Their inquisitive nature led to them tinkering with life across many planets.",
    "Each planet had species created specifically to suit its environment, and were given the resources to progress faster than nature would’ve allowed for. Within merely thousands of years, they evolved into fully formed, albeit primitive, societies.",
    "Around 6,000 BCS, an age of stagnation began, as poor leadership and disparity ran rampant. The central Elysium-based government fragmented into smaller factions, leading to an era of endless wars. The technological network that kept the Empire together began to fall apart. As their influence shrank, colonies far from the galactic center began to die off.",
    "After the extinction of the Precursors, their created races grew and prospered, even coming across ancient Precursor artifacts. Some formed religions and cults that worshipped the technology as magic, while others attempted to reverse-engineer them. Many of these races kept a faint idea of Elysium deep in their collective memories, and thus incorporated the mysterious planet into their primal religions.",
    "After several millenia, these newly formed societies began to re-discover the secrets of efficient interstellar travel. As members of these races began to take bold steps into the future, new factions were formed and new worlds were colonized.",
    "The Legion Corps formed out of an alliance between Elves and Humans, two races who lived in the same system - the Elves lived on Proxima Centauri, while the Humans made their home on Alpha Centauri. Both races valued wealth and prosperity above all else. Some time later, a race of Androids arose to power within the Legion Corps, eventually establishing themselves as their own distinct species.",
    "The Babylon Force formed after the Orcs and Drakens fought each other to a standstill. After finally making peace, the two races grew closer, through their reverence of the Precursors as divine entities. Other races were brought into the alliance by way of colonization and religious conversion. They worship the Pantheon, a council of godlike beings.",
    "The Kakytos Council was formed out of a pact between the Cyclonians and the Hellions, after a disastrous war between the two groups left the Hellion race beaten and scattered. They share a mutual appreciation of magical knowledge and look to unlock the secrets of the universe.",
    "The Eternal Wayfinders were formed by a group of secretive aquatic races. Finding their home in a back corner of the galaxy, they almost always kept to themselves, only venturing forth into other factions' territory when they absolutely needed to.",
    "The Stemata were a major colonial power, led by a powerful monarchy. During the early years, their empire spanned a large amount of space. However, their homeworld was eventually destroyed by rebelling colonies, leaving only a small part of the Armada intact. During the escape, the remnants entered a cosmic storm, which split the fleet in half.",
    "In 0 IDS, after centuries of conflict and tension across the galaxy, the three remaining major factions formed a peace treaty, and a weak central government called the Celestial Senate is established on the planet of Diyu. With this, an uneasy peacetime begins.",
    "(Astronomica Timeline)",
    "Approximately 1,500 years later, in 1541 IDS, a mysterious energy wave suddenly ripples throughout the galaxy, causing many Precursor relics to respond irrationally. Rumors from deep within the Magnetic Wastes talk of a planet which seemingly appeared out of nowhere. Scholars and cartographers speculate that this planet could be the long-lost Elysium.",
    "The three major factions (Legion Corps, Babylon Force, and Kakytos Council) each send their own groups to investigate the rumors, beginning the great search for Elysium.",
    "(Set 1: Elysium Expedition)",
    "Around the same time, chaos erupts in the halls of the Celestial Senate due to increased tensions and skirmishes between factions. A special assembly of senators is called to discuss the warfare and other important matters on the planet Diyu.",
    "At the same time as the special assembly, rebellions start to form in the lower layers of Diyu’s cities. The major city on Diyu is Hyperius, a city dealing with large wealth disparity.",
    "Sabre Industries is tasked by the government to keep the Rebels at bay; and with Magnus Lance at the wheel in Alice’s absence, Hyperius becomes a battleground.",
    "(Set 2: Hyperius Fallen)",
  ]
}

const banlist = {
  show: true,
  heading: "Official Ban List",
}

const database = {
  show: true,
  heading: "Card Database",
  cards: [
    "https://cdn.discordapp.com/attachments/656673917007822849/693197459995754496/1_-_Express_Shot_Marine.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693197476265459733/2_-_Ibis_Veil.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199146269802536/3_-_Rebellions_Pulsar.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199158835937360/4_-_Exploration_Vanguard.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199180449185802/5_-_Precinct_Drone_Master.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199191857561600/6_-_Aurelite_Manipulator.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199633354326046/7_-_Cybernetic_Stalker.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199651540566037/8_-_Siren_Belt_Mercenary.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199668493942984/9_-_Android_Superior.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693199685778931812/10_-_Yarrow_Ace_Pilot.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693201823632457840/11_-_Camus_Ace_Capitalist.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693201827339960380/12_-_Alice_Church_Ceo.png",
    "https://cdn.discordapp.com/attachments/656673917007822849/693201829420597267/13_-_Ephermal_Breaker.png",
  ],
}

export { navBar, mainBody, news, howToPlay, shop, lore, banlist, database };
