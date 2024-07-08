import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";


export const HERO_CONTENT = `Final year student | Full Stack Developer | AI & ML Enthusiast | Tech Enthusiast`;

export const ABOUT_TEXT = `Enthusiastic Bachelors in Computer Science degree student with a solid foundation in fundamentals of Computer science. Proficient in Python, C++ and Java, adept at leveraging data structures and algorithms to solve complex problems. Hands-on experience in developing web applications during academic projects, showcasing analytical and problem-solving abilities. Quick learner with a passion for staying abreast of emerging technologies. Strong teamwork and communication skills fostered through collaborative projects. Eager to contribute innovative solutions as a developer, leveraging academic knowledge and practical skills. Adept at adapting to evolving challenges, committed to delivering high-quality code, and motivated to contribute effectively to a dynamic and collaborative development environment.`;

export const EDUCATION = [
  {
    year: "2021 - Present",
    degree: "B.Tech in Computer Science (spl in AI & DS)",
    university: "SASTRA Deemed University - Thanjavur",
    description: `CGPA as of 6th sem: 8.927/10`,
    link: "https://www.sastra.edu/",
  },
  {
    year: "2020 - 2021",
    degree: "Higher Secondary School",
    university: "Montfort School - Kattur",
    description: `Percentage: 94.8%`,
    link:"https://montforttrichy.com/",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School",
    university: "Montfort School - Kattur",
    description: `Percentage: 91.6%`,
    link:"https://montforttrichy.com/",
  },
];

export const EXPERIENCE = [
  {
    year: "2021 - 2023",
    role: "Marketing Executive",
    company: "DAKSH Marketing Team - SASTRA Deemed University",
    description: `DAKSH is an inter-college Tech fest which is conducted by the student community. I have contributed to the Club by bringing sponsors for our events`,
    skills: ["Communication","Teamwork","TIme Management"],
  }
];

export const PROJECTS = [
  {
    title: "Youtube toxic comments removal",
    image: project1,
    description:
      "A LSTM model that detects the sentiments of the comments and removes the toxic comments from the youtube comments section using the Youtube Data API V3. Containerized the model using Docker and deployed it on Render",
    technologies: ["Flask", "Python", "Youtube Data API v3" ,"Postman","Tensorflow","Docker"],
    link:"https://github.com/pkperi123/YT_toxic_comment_removal",
  },
  {
    title: "PDF-BOT",
    image: project2,
    description:
      "Using LLM(LaMini-T5-738M) model from Hugging face answering the question related to the PDF which is fed to the model.",
    technologies: ["Python","Natural Language Processing"],
    link:"https://github.com/pkperi123/PDF-Bot",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind CSS","HTML"],
    link:"https://github.com/pkperi123/Portfolio-website"
  },
  {
    title: "Store API",
    image: project4,
    description:
      "A RESTful API for an online store that allows users to view, add, update, and delete products using CRUD operations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
    link:"https://github.com/pkperi123/Store-API"
  },
  {
    title: "Task Manager API",
    image: project5,
    description:
      "A RESTful API for managing tasks that allows users to create, read, update, and delete tasks using CRUD operations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
    link:"https://github.com/pkperi123/Task_Manager_API"
  },
  {
    title: "Tindog Website",
    image: project6,
    description:
      "Utilized bootstrap framework to develop the website and implemented a basic a http server for handling GET request",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link:"https://github.com/pkperi123/bootstrap-tindog"
  },

];

export const CONTACT = {
  address: "Trichy, Tamil Nadu, India",
  phoneNo: "+91 8667272746 ",
  email: "pkperi1210@gmail.com",
};