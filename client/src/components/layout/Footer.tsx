import { useLocation } from "wouter";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

const Footer = () => {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <h3 className="text-xl font-accent font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              A showcase of my work, skills, and experiences as a web developer.
            </p>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="footer-link">
                  <FaLinkedin size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="footer-link">
                  <FaInstagram size={20} />
                </a>
              )}
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="footer-link">
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate("/")} 
                  className="footer-link text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/about")} 
                  className="footer-link text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/projects")} 
                  className="footer-link text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/contact")} 
                  className="footer-link text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MdEmail className="h-5 w-5 mr-2 text-gray-300" />
                <a href={`mailto:${socialLinks.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {socialLinks.email}
                </a>
              </li>
              <li className="flex items-start">
                <MdLocationOn className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">Orlando, Florida</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Tristan Goodwin. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
