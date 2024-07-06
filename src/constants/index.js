import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Undergrad student with a mindset of learning and developing skills of emerging technologies.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2021 - Present",
    role: "B.Tech in Computer Science(SPL in AI & DS)",
    company: "SASTRA Deemed University-Thanjavur",
    description: `CGPA as of 6th sem: 8.927/10`,
    link: "https://www.sastra.edu/",
  },
  {
    year: "2020 - 2021",
    role: "Higher Secondary School",
    company: "Montfort School - Kattur",
    description: `Percentage: 94.8%`,
    link:"https://montforttrichy.com/",
  },
  {
    year: "2019 - 2020",
    role: "Secondary School",
    company: "Montfort School - Kattur",
    description: `Percentage: 91.6%`,
    link:"https://montforttrichy.com/",
  },
];

export const PROJECTS = [
  {
    title: "Youtube toxic comments remmoval",
    image: project1,
    description:
      "A LSTM model with detectts the sentiments of the comments and removes the toxic comments from the youtube comments section using the Youtube Data API V3. Containerized the model using Docker and deployed it on Render",
    technologies: ["Flask", "Python", "Youtube Data API v3" ,"Postamn","Tensorflow","Docker"],
    link:"https://github.com/pkperi123/YT_toxic_comment_removal",
  },
  {
    title: "PDF-BOT",
    image: project2,
    description:
      "Using LLM(LaMini-T5-738M) model fromHugging face answering the question related to the PDF which is fed to the model.",
    technologies: ["Python","Natural Language Processing"],
    link:"https://github.com/pkperi123/PDF-Bot",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion", "Tailwind CSS"],
    link:"ggg"
  },
  {
    title: "Store API",
    image: project4,
    description:
      "A RESTful API for an online store that allows users to view, add, update, and delete products using CRUD operations.",
    technologies: ["HTML", "CSS", "node.js", "Express.js", "MongoDB", "Postman"],
    link:"https://github.com/pkperi123/Store-API"
  },
  {
    title: "Task Manager API",
    image: project4,
    description:
      "A RESTful API for managing tasks that allows users to create, read, update, and delete tasks using CRUD operations.",
    technologies: ["HTML", "CSS", "node.js", "Express.js", "MongoDB", "Postman"],
    link:"https://github.com/pkperi123/Task_Manager_API"
  },
  {
    title: "Tindog Website",
    image: project4,
    description:
      "Utilized bootstrap framework to develop thewebsite and Implemented a basic a http server forhandling GET request",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link:"https://github.com/pkperi123/bootstrap-tindog"
  },

];

export const CONTACT = {
  address: "Trichy, Tamil Nadu, India",
  phoneNo: "+12 4555 666 00 ",
  email: "pkperi1210@gmail.com",
};