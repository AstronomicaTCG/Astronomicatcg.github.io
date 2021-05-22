// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f",
  firstName: "Astronomica",
  middleName: "",
  lastName: "TCG",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/yang573",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yang573/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//b) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//c) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/yyang.png"),
  imageSize: 375,
  message:
    " I am a senior studying computer science and sociology. \
    Many of my past projects have focused on backend and cloud services, \
    but I have also dabbled with some full-stack projects. \
    I am most passionate about the cloud and systems, \
    and I hope to land a career in one of these fields. \
    I'm currently assisting a lab with designing benchmarks for cloud-native storage.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch that number of your most recently updated projects.
// You can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display additional, specfic projects, add the repository names.
//      i.e ["repository-1", "repo-2"]
// Be careful not to include the same repo twice
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "yang573", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "yang573/yang573.github.io", "yang573/MYSpace-Deployment",
    "yang573/club-membership-py", "alexfchin/roombalistic"
  ],
};

const news = {
  show: true,
}

const howToPlay = {
  show: true,
}

const shop = {
  show: true,
}

const lore = {
  show: true,
}

const banlist = {
  show: true,
}

const database = {
  show: true,
}


const manualProjects = [
  {
    name: "Picking a Keyed Padlock",
    description: "Practicing user instruction write-ups through locksport.",
    url: "https://docs.google.com/document/d/1RI36PJYbEzbTaWqkow3LzRTZ0Pj_-GGmcAgrRUnPyUs/edit?usp=sharing",
    classId: "CSE 300",
    date: "November 2020"
  },
  {
    name: "SB Engaged, Reimagined",
    description: "Ideas for improving SBU club platforms to increase student participation.",
    url: "https://drive.google.com/file/d/12IXf0dkHxbQvB_d-Yp_ERpdY_qj5J1_7/view?usp=sharing",
    classId: "CSE 300",
    date: "November 2020"
  }
];

// Leadership SECTION
const leadership = {
  show: false, // Not enabled
  heading: "Leadership",
  message:
    "Generic leadership message.",
  images: [
    { 
      img: require("../editable-stuff/yyang.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/yyang.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
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

export { navBar, mainBody, about, repos, manualProjects, skills, leadership, news, howToPlay, shop, lore, banlist, database };
