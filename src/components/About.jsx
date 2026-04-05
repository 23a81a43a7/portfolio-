import { motion } from 'framer-motion';
import { Download, User, MapPin, Mail, Calendar, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-neon">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-neon rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-[400px] w-[320px] sm:w-[400px] rounded-2xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/passportsize.jpeg"
                    alt="Ayyappa Korlepara Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-accent-neon">Ayyappa Korlepara</span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              I am a motivated and hardworking student currently pursuing a Bachelor's Degree in Computer Science with a specialization in Artificial Intelligence at JNTUK University.
              I am seeking an opportunity to utilize my technical skills in Java, Web Development, and Machine Learning to grow professionally while contributing to the success of an organization.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Alongside my academics, I enjoy taking part in hackathons, such as the Smart India Hackathon where I contributed to developing AI-powered solutions, and organizing tech events.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-slate-300">
                <User size={20} className="text-accent-purple mr-3 flex-shrink-0" />
                <span>K N J K Ayyappa</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <span>Kakinada, AP, India</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail size={20} className="text-accent-neon mr-3 flex-shrink-0" />
                <a href="mailto:korleparaayyappa@gmail.com" className="hover:text-accent-neon transition-colors text-sm break-all">korleparaayyappa@gmail.com</a>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <a href="tel:+918143223346" className="hover:text-accent-neon transition-colors">+91 81432 23346</a>
              </div>
              <div className="flex items-center text-slate-300 sm:col-span-2">
                <Calendar size={20} className="text-accent-purple mr-3 flex-shrink-0" />
                <span>Student (2023-2027)</span>
              </div>
            </div>

            <a
              href="/Ayyappa_Korlepara_Resume.pdf"
              download="Ayyappa_Korlepara_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] cursor-pointer"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
