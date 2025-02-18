export const info = {
  name: "Nathan Grilliot",
  brief_description:
    "I'm a passionate software developer pursuing a Bachelor of Science in Computer Science with a certificate in Sofware Engineering.",
  role: "Full Stack Developer",
  picture: "profile.jpg",
  picture_alt: "Nathan Grilliot",
  location: "Cincinnati, OH, USA",
  cv: "/Grilliot_Nathan_Resume_Spring2025.pdf",

  about: {
    description: `I’m a Computer Science student at the University of Cincinnati, graduating 
                  in May 2026 with a minor in Software Engineering. With a strong foundation 
                  in Python, SQL, C++, and web development, I’ve gained hands-on experience 
                  through internships at Medpace and ElectraMet, where I worked on data visualization, 
                  dashboard development, and internal software tools that streamlined operations and 
                  improved user interactions. My skills include web development (Flask, HTML, CSS, JavaScript, PHP), 
                  cloud deployment (AWS, Docker), and data analysis (R, Pandas, SciKit Learn). I’m passionate about 
                  building software that makes data-driven decisions more accessible and efficient.`,
    education: [
      {
        title: "Bachelor of Science in Computer Science",
        date: "2022 - Present",
        location: "University of Cincinnati",
        gpa: "3.77/4.00",
        thesis: "",
      },
    ],
    experience: [
      {
        title: "Informatics Analyst Intern",
        date: "Aug 2024 - Dec 2024",
        location: "Medpace",
        description:
          "Developed scripts to analyze and transform clinical trial data to aid in the aquisition of new business deals.",
      },
      {
        title: "Computer Science Intern",
        date: "Apr 2023 - Apr 2024",
        location: "ElectraMet",
        description: `Improved efficiency of internal processes using advanced software skills and developed
          an internal product configurator site to increase understanding of system requirements.`,
      },
    ],

    skills: ["Python", "AWS", "Docker"], // not used yet
  },

  projects: [
    {
      title: "DevBits",
      date: "Nov 2024 - Present",
      description:
        "An X and LinkedIn crossover for posting real content about your projects, semi-formally",
      link: "https://github.com/devbits-go/DevBits",
      tech: ["ReactNative", "Node.js", "PostgreSQL", "Go"],
      img_alt: "DevBits", // need to update
      img_path: "DevBits.svg", // need to update
    },
    {
      title: "Resume2Web",
      date: "Nov 2024",
      description:
        "Create an interactive and customizable website simply by uploading your resume!",
      link: "https://github.com/grillinr/Resume2Web",
      tech: ["React", "Node.js", "Flask", "Python"],
      img_alt: "Resume2Web", // need to update
      img_path: "Resume2Web.jpeg", // need to update
    },
  ],

  contact: {
    email: "grillinr@mail.uc.edu",
    linkedin: "https://www.linkedin.com/in/nathan-grilliot/",
    github: "https://www.github.com/grillinr",
    twitter: "https://www.twitter.com/",
  },
};
