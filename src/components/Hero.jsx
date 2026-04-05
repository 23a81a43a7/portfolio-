import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-neon/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-neon font-mono text-lg mb-4 tracking-wider"
        >
           Welcome to my portfolio!
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight"
        >
          I am <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-neon to-accent-blue">Ayyappa Korlepara</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl md:text-3xl font-light text-slate-300 mb-8 min-h-[3rem] flex items-center justify-center"
        >
          <span>A </span>
          <span className="font-semibold text-white">
            <Typewriter
              words={['AI & Machine Learning Enthusiast', 'Java & C Programmer', 'Web Developer', 'Tech Innovator']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Building intelligent, scalable, and visually stunning web applications with modern technologies. Let's create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="projects" smooth={true} duration={500}>
            <button className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="px-8 py-4 glass border border-white/20 text-white rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
      >
        <Link to="about" smooth={true} duration={500}>
          <ChevronDown size={32} className="text-slate-400 hover:text-white transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
