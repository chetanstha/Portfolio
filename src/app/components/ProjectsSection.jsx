"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Python",
    description: "Project 1 description",
    image: "./images/projects/1.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Javascript",
    description: "Project 2 description",
    image: "./images/projects/2.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PowerBI",
    description: "Project 3 description",
    image: "./images/projects/3.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Machine Learning",
    description: "Project 1 description",
    image: "./images/projects/1.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cloud",
    image: "./images/projects/2.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Git",
    image: "./images/projects/3.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "VS Code",
    description: "Project 4 description",
    image: "./images/projects/4.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Power BI",
    description: "Authentication and CRUD operations",
    image: "./images/projects/5.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Jypter Notebook",
    description: "Project 5 description",
    image: "./images/projects/6.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Food Ordering Application2",
    description: "Project 4 description",
    image: "./images/projects/4.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "React Firebase Template2",
    description: "Authentication and CRUD operations",
    image: "./images/projects/5.png",
    tag: ["All", "Skills"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Full-stack Roadmap2",
    description: "Project 5 description",
    image: "./images/projects/6.png",
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
