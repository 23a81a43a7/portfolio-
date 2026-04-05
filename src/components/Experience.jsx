import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Activity } from 'lucide-react';

const timelineData = [
  {
    type: "activities",
    title: "Participant - Smart India Hackathon",
    organization: "Rajasthan's Technical Education Department",
    date: "October 2024",
    description: "Developed an AI-powered chatbot designed to efficiently handle admission inquiries, offering 24/7 support on fees, scholarships, and admission processes through robust NLP integration.",
    icon: <Activity size={20} />
  },
  {
    type: "activities",
    title: "CSI AI 100K Event Co-Ordinator",
    organization: "JNTUK University",
    date: "Recent",
    description: "Organized and co-ordinated AI-related events, managing teams and ensuring smooth execution of technical sessions.",
    icon: <Briefcase size={20} />
  },
  {
    type: "certifications",
    title: "Professional Certifications",
    organization: "Salesforce / Oracle / NPTEL",
    date: "Completed",
    description: "Earned certifications as a Salesforce Certified Agentforce Specialist, Oracle Certified Generative AI Professional, and obtained an NPTEL Certificate on Introduction to Internet of Things.",
    icon: <Award size={20} />
  },
  {
    type: "education",
    title: "Bachelor's Degree in CSE (AI)",
    organization: "JNTUK University, Kakinada",
    date: "2023 - 2027",
    description: "Currently in 5th Semester. Achieved 74.81% aggregate. Focusing on core Computer Science and Artificial Intelligence concepts.",
    icon: <GraduationCap size={20} />
  },
  {
    type: "education",
    title: "Intermediate Education (MPC)",
    organization: "Pippara Junior College",
    date: "June 2023",
    description: "Board of Intermediate Education. Graduated with 88%. Built a strong foundation in Mathematics, Physics, and Chemistry.",
    icon: <GraduationCap size={20} />
  },
  {
    type: "education",
    title: "Secondary Education",
    organization: "Pippara E M School",
    date: "June 2021",
    description: "Board of Secondary Education. Graduated with 98%. Active participant in extracurricular activities.",
    icon: <GraduationCap size={20} />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-neon">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line - desktop center, mobile left */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-neon -translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node - visible on all screens */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-gradient-to-br from-accent-purple to-accent-blue z-10 text-white hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-6 border-t-2 border-t-white/10 hover:border-t-accent-neon transition-colors duration-300 relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      {item.icon}
                    </div>
                    
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-slate-800 text-accent-neon border border-accent-neon/20">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 font-heading">{item.title}</h3>
                    <h4 className="text-lg text-accent-blue mb-4 font-medium">{item.organization}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
