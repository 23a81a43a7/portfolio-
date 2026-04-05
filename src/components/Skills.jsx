import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench
} from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 size={24} />,
    color: "text-accent-blue",
    skills: [
      { name: "Java", level: 70 },
      { name: "C Programming", level: 50 },
      { name: "HTML & CSS", level: 50 },
      { name: "JavaScript", level: 50 }
    ]
  },
  {
    category: "Databases & AI",
    icon: <Database size={24} />,
    color: "text-accent-purple",
    skills: [
      { name: "MySQL", level: 60 },
      { name: "MongoDB", level: 70 },
      { name: "Machine Learning", level: 70 },
      { name: "Python", level: 60 }
    ]
  },
  {
    category: "Certifications",
    icon: <BrainCircuit size={24} />,
    color: "text-accent-neon",
    skills: [
      { name: "Agentforce Specialist", level: 100 },
      { name: "Oracle Gen AI", level: 100 },
      { name: "NPTEL IoT", level: 73 }
    ]
  },
  {
    category: "Soft Skills",
    icon: <Wrench size={24} />,
    color: "text-slate-300",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication Skills", level: 70 },
      { name: "Team Collaboration", level: 95 },
      { name: "Event Management", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-accent-blue transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 shadow-lg border border-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 font-heading">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className={`h-2 rounded-full bg-gradient-to-r ${idx === 0 ? 'from-blue-600 to-accent-blue' :
                            idx === 1 ? 'from-purple-600 to-accent-purple' :
                              idx === 2 ? 'from-sky-600 to-accent-neon' :
                                'from-slate-500 to-slate-300'
                          }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
