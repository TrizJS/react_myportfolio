import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { personalInfo, skills, education, experience } from "@/lib/data";

const About = () => {
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
            About Me
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Developer portrait"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <h2 className="text-3xl font-bold text-dark-400 mb-6">Who I Am</h2>
              <div className="text-dark-200 space-y-4">
                <p>{personalInfo.bio}</p>
                <p>
                  I specialize in creating responsive websites and applications
                  that provide exceptional user experiences. My goal is to build
                  digital products that not only look great but also solve real
                  problems.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="page-title-container">
            <h2 className="page-title">My Skills</h2>
            <div className="page-title-underline"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation className="bg-white p-8 rounded-lg shadow-sm" delay={0.2}>
              <h3 className="text-xl font-bold mb-4 text-dark-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => 
                  ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'TypeScript', 'Next.js'].includes(skill)
                ).map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="bg-white p-8 rounded-lg shadow-sm" delay={0.4}>
              <h3 className="text-xl font-bold mb-4 text-dark-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => 
                  ['Node.js', 'Express', 'MongoDB', 'SQL', 'API Development'].includes(skill)
                ).map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation className="bg-white p-8 rounded-lg shadow-sm" delay={0.6}>
              <h3 className="text-xl font-bold mb-4 text-dark-400">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => 
                  ['Git', 'GitHub', 'VS Code', 'Responsive Design', 'Agile/Scrum'].includes(skill)
                ).map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="page-title-container text-left">
                <h2 className="page-title">Experience</h2>
                <div className="page-title-underline mx-0"></div>
              </div>
              
              <div className="mt-8 space-y-12">
                {experience.map((job, index) => (
                  <ScrollAnimation key={index} delay={0.2 * index}>
                    <div className="border-l-4 border-primary pl-6 pb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-sm rounded-full mb-2">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold text-dark-400">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-dark-200 mt-2">{job.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="page-title-container text-left">
                <h2 className="page-title">Education</h2>
                <div className="page-title-underline mx-0"></div>
              </div>
              
              <div className="mt-8 space-y-12">
                {education.map((edu, index) => (
                  <ScrollAnimation key={index} delay={0.2 * index}>
                    <div className="border-l-4 border-primary pl-6 pb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-sm rounded-full mb-2">
                        {edu.period}
                      </span>
                      <h3 className="text-xl font-bold text-dark-400">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-dark-200 mt-2">{edu.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="page-title-container">
              <h2 className="page-title">When I'm Not Coding</h2>
              <div className="page-title-underline"></div>
            </div>
            
            <div className="mt-8">
              <p className="text-center text-dark-200 max-w-3xl mx-auto">
                {personalInfo.interests}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default About;
