"use client"; 
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectsData = [
    {
      id: 1,
      title: "CodeBook",
      description: "The Ultimate Ebook Store. React, e-commerce website",
      image: "/images/projects/2.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/sawaby/CodeBook",
      previewUrl: "http://codebook-m.netlify.app",
    },
    {
      id: 2,
      title: "CineMate",
      description: "Displays list of movies using TMDB API",
      image: "/images/projects/3.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/sawaby/cinemate",
      previewUrl: "http://cinemate-m.netlify.app",
    },
    {
      id: 3,
      title: "Shopping Cart",
      description: "REACT Shopping cart using context and reducer.",
      image: "/images/projects/5.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/sawaby/shopmatecr",
      previewUrl: "http://shopmatecr-m.netlify.app",
    },
    {
      id: 4,
      title: "Article Blog",
      description: "Login, reate or remove articles. Using Firebase.",
      image: "/images/projects/4.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/sawaby/ArticleBlog",
      previewUrl: "http://articleblog-m.netlify.app/",
    },
    {
      id: 5,
      title: "ToDo App",
      description: "A React project that add, remove, edit and save tasks.",
      image: "/images/projects/6.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/sawaby/TaskMate",
      previewUrl: "http://todoapp-f.netlify.app/",
    },
    {
      id: 6,
      title: "Kechie ERP Software",
      description: "A fully scalable cloud ERP system. Been part of this amazing software.",
      image: "/images/projects/kechie.png",
      tag: ["All", "Progress"],
      gitUrl: "/",
      previewUrl: "https://www.myofficeapps.com/",
    },
  ];
  
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1},
    }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"} />
            <ProjectTag onClick={handleTagChange} name="Progress" isSelected={tag === "Progress"} />
        </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
            <motion.li 
                key={index} 
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4}}
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
  )
}

export default ProjectsSection