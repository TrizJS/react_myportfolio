import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { socialLinks } from "@/lib/data";

const Contact = () => {

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
            Get In Touch
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
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <MdEmail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <a 
                    href={`mailto:${socialLinks.email}`} 
                    className="text-primary hover:underline transition"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <MdLocationOn className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">Location</p>
                  <p className="text-gray-600">Orlando, Florida</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h4 className="text-xl font-bold mb-6 text-gray-800 text-center">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.linkedin && (
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon-link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                
                {socialLinks.instagram && (
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon-link"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
                
                {socialLinks.github && (
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon-link"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;
