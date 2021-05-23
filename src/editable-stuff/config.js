// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  show: true,
  gradientColors: "#808080, #000000, #FFFFFF, #98F5FF, #CCAC00",
  firstName: "Welcome to Astronomica!",
  middleName: "",
  home: "Home",
  message: "",
  icons: [
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCx03EedbIJrnWSRjbDTn_jA",
    },
    {
      image: "fa-discord",
      url: "https://discord.gg/bpTp2QfXsQ",
    },
  ],
};

const news = {
  show: true,
  heading: "Astronomica News",
  news: ["news"]
}

const howToPlay = {
  show: true,
  heading: "How To Play",
}

const shop = {
  show: true,
  heading: "Shop",
}

const lore = {
  show: true,
  heading: "Astronomica Lore",
}

const banlist = {
  show: true,
  heading: "Official Ban List",
}

const database = {
  show: true,
  heading: "Card Database",
}

const skills = {
  show: true,
  heading: "Skills",
  skills: [
    "C",
    "Java",
    "C#",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "NoSQL",
    "Elasticsearch",
    "Ceph",
    "Flask"
  ]
};

export { navBar, mainBody, news, howToPlay, shop, lore, banlist, database, skills };
