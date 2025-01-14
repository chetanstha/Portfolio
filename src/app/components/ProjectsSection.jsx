"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Facial Biometrics-Based Attendance Tracking System",
    description:
      " Implementing face recognition technology for automated attendance tracking using machine learning algorithms.",
    image: "./images/projects/attendance.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title:
      "Skin Disease Detection using advanced Machine Learning and Deep Learning",
    description:
      "Using deep learning models to analyze skin images and detect various skin conditions with high accuracy.s",
    image: "./images/projects/skin.jpg",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Text Sumarization Using NLP",
    description:
      "Applying natural language processing techniques to condense lengthy text into concise summaries while retaining key information.",
    image: "./images/projects/text.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Web Development",
    description:
      "Building interactive websites using HTML, CSS, JavaScript, and frameworks like React.",
    image: "./images/projects/web.jpg",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Data Visualization using Power BI",
    description:
      "Creating reports and dashboards to make data insights accessible.",
    image: "./images/projects/powerbi.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Python Automation",
    description:
      "Writing scripts to automate tasks and improve workflow efficiency",
    image: "./images/projects/automat.jpg",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "UI/UX Design | Development",
    description: "Designing user-friendly and visually appealing interfaces.",
    image: "./images/projects/ui.jpg",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Cloud Computing",
    description: "Utilizing cloud platforms to deploy and manage applications.",
    image: "./images/projects/cloud.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Machine Learning | AI",
    description: "Developing models to analyze data and make predictions.",
    image: "./images/projects/ai.jpg",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Project | Skills
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Skills"
          isSelected={tag === "Skills"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
