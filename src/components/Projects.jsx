import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projectsData = [
  {
    title: "Crop Prediction using Machine Learning",
    description: "Developed a crop recommendation system using a Random Forest Classifier trained on soil nutrients, weather, and environmental parameters. Achieved 99.3% accuracy in predicting the most suitable crop for given conditions. Implemented data visualization, correlation analysis, and a prediction function using Python.",
    image: "/crop_prediction_ml.png",
    tech: ["Python", "Pandas", "Seaborn", "Scikit-Learn", "Machine Learning"],
    github: "#",
    demo: "#"
  },
  {
    title: "Employee Salary Prediction",
    description: "Developed a machine learning model to predict employee salaries using Python. Performed data preprocessing and feature selection, and implemented algorithms such as Linear Regression and Random Forest. Evaluated the model using performance metrics to improve prediction accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Regression"],
    github: "#",
    demo: "#"
  },
  {
    title: "Currency Converter Application",
    description: "A Java-based application that converts an amount from one currency to another using exchange rates. Implemented using Java Swing for the graphical user interface.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    tech: ["Java", "Java Swing", "API Integration", "OOP"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay links */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                  <a href={project.github} className="p-3 bg-slate-800 text-white rounded-full hover:bg-accent-purple transition-colors hover:scale-110">
                    <Code2 size={24} />
                  </a>
                  <a href={project.demo} className="p-3 bg-slate-800 text-white rounded-full hover:bg-accent-blue transition-colors hover:scale-110">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-accent-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs font-medium px-3 py-1 bg-slate-800/50 text-accent-blue rounded-full border border-accent-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
