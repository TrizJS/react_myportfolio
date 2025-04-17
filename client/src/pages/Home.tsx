import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { personalInfo, skills, projects } from "@/lib/data";

const Home = () => {
  const [, navigate] = useLocation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')`,
            filter: 'brightness(0.3)'
          }}
        ></div>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-accent font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Hello, I'm
            </motion.span>
            <motion.span className="block text-primary mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {personalInfo.name}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {personalInfo.headline}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button 
              onClick={() => navigate("/projects")}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition"
            >
              View My Work
            </button>
            <button 
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition"
            >
              Contact Me
            </button>
          </motion.div>
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="#about-preview" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="page-title-container">
            <h2 className="page-title">About Me</h2>
            <div className="page-title-underline"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="order-2 lg:order-1" delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                {personalInfo.shortBio}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => navigate("/about")}
                className="inline-flex items-center px-6 py-2 text-primary font-medium"
              >
                Learn more about me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </ScrollAnimation>
            <ScrollAnimation className="order-1 lg:order-2" delay={0.4}>
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Developer coding"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="page-title-container">
            <h2 className="page-title">Featured Projects</h2>
            <div className="page-title-underline"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ScrollAnimation key={project.id} delay={0.2 * index} className="h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
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
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-12">
            <ScrollAnimation delay={0.6}>
              <button 
                onClick={() => navigate("/projects")}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition"
              >
                View All Projects
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <div className="text-center">
              <button 
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition"
              >
                Contact Me
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Home;