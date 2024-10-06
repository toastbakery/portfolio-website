"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "2048 Game",
    description: "A classic 2048 game.",
    image: "/images/projects/2048-game.JPG",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/toastbakery/2048-game",
    previewUrl: "https://toastbakery.github.io/2048-game/",
  },
  {
    id: 2,
    title: "Monthly Wallpaper",
    description:
      "A website that generates monthly wallpapers inspired by seasonal color palettes.",
    image: "/images/projects/monthly-wallpaper.JPG",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/toastbakery/monthly-wallpaper",
    previewUrl: "https://toastbakery.github.io/monthly-wallpaper/",
  },
  {
    id: 3,
    title: "Digital Store",
    description:
      "An e-commerce platform where users can browse products, complete purchases, and receive order confirmations.",
    image: "/images/projects/digital-store.JPG",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/toastbakery/digital-store",
    previewUrl: "https://toastbakery.github.io/digital-store/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  {
    /* indicates whether the element associated with ref is currently within the viewport. */
  }
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    /* ref is attached to the section element and represents the DOM element that you want to observe */
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Front-end"
          onClick={handleTagChange}
          isSelected={tag === "Front-end"}
        />
        <ProjectTag
          name="Full Stack"
          onClick={handleTagChange}
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
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
