import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Code2, Briefcase, Camera, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_u6ljtvw';
const TEMPLATE_ID = 'template_0z3riyk';
const PUBLIC_KEY  = 'nvmeTu3CWYlVOYcsg';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-accent-blue">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent-purple mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
             Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">Let's Connect</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent-neon border border-accent-neon/20 mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-slate-400">Kakinada, Andhra Pradesh<br/>India - 533 001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent-purple border border-accent-purple/20 mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <p className="text-slate-400"><a href="mailto:korleparaayyappa@gmail.com" className="hover:text-accent-neon transition-colors">korleparaayyappa@gmail.com</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent-blue border border-accent-blue/20 mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <p className="text-slate-400"><a href="tel:+918143223346" className="hover:text-accent-neon transition-colors">+91 81432 23346</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/ayyappa-korlepara" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="GitHub">
                  <Code2 size={22} />
                </a>
                <a href="https://linkedin.com/in/ayyappa-korlepara" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="LinkedIn">
                  <Briefcase size={22} />
                </a>
                <a href="https://www.geeksforgeeks.org/user/korleparaayyappa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-[#2f8d46] hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="GeeksforGeeks">
                  <Camera size={22} />
                </a>
                <a href="https://leetcode.com/korleparaayyappa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FFA116] hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="LeetCode">
                  <X size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full filter blur-[80px] -z-10 group-hover:bg-accent-blue/10 transition-colors"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full filter blur-[80px] -z-10 group-hover:bg-accent-purple/10 transition-colors"></div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-shadow"
                    placeholder="Ayyappa Korlepara"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-shadow"
                    placeholder="korleparaayyappa@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-neon transition-shadow resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                {/* Status Toast */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-sm"
                  >
                    <CheckCircle size={18} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-sm"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-neon text-white rounded-lg font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <><Loader size={20} className="mr-2 animate-spin" />Sending...</>
                  ) : (
                    <><Send size={20} className="mr-2" />Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
