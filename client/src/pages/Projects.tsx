import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { projects } from "@/lib/data";
import { todoAppImage } from "@/lib/images";

const Projects = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-blue-400 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="mt-4 text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A collection of my recent work and projects I've contributed to
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={0.15 * (index % 3)} className="h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-dark-400">{project.title}</h3>
                    <p className="text-dark-200 mb-4 flex-grow">{project.description}</p>
                    
                    {/* YouTube Video Embed */}
                    {'videoId' in project && project.videoId && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <iframe
                          className="w-full aspect-video"
                          src={`https://www.youtube.com/embed/${project.videoId}`}
                          title={`${project.title} Demo Video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    
                    {/* TODO App Design Link */}
                    {'isTodoApp' in project && project.isTodoApp && (
                      <div className="mb-4">
                        <a 
                          href="https://drive.google.com/file/d/1ozW12SsCSvCQZHBTz-tpWZYoVvE3PO2a/view?usp=sharing" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View TODO App Design PDF
                        </a>
                        <p className="mt-2 text-sm text-gray-500 italic">
                          Design prototype created in Figma showing login, task list, and profile screens
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-primary hover:text-blue-700 transition flex items-center"
                        >
                          <FaCode className="mr-1" />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-primary hover:text-blue-700 transition flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          Watch on YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Want to collaborate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-dark-400 mb-4">Interested in Collaborating?</h2>
            <p className="text-dark-200 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition"
            >
              Get In Touch
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Projects;
