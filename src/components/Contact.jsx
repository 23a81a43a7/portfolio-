import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader, Home } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_u6ljtvw';
const TEMPLATE_ID = 'template_0z3riyk';
const PUBLIC_KEY = 'nvmeTu3CWYlVOYcsg';

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
                    <p className="text-slate-400">Moyyeru, Andhra Pradesh<br />India - 534 134</p>
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
                {/* GitHub */}
                <a href="https://github.com/23a81a43a7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="GitHub">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ayyappa-korlepara-9876762ba/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="LinkedIn">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                  </svg>
                </a>
                {/* Home */}
                <a href="#hero" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-accent-neon hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer" title="Home">
                  <Home size={22} />
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
