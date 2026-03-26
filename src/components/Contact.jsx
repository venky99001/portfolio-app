import React from 'react';
import { userData } from '../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container py-24 lg:py-32 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-text">
                Let's<br />
                <span className="text-accent underline decoration-1 underline-offset-8">Connect</span>
              </h2>
              <div className="w-16 h-1 bg-accent/40 mt-4 rounded-full"></div>
            </div>
            
            <p className="text-xl text-text/70 font-light max-w-md leading-relaxed">
              Currently open to new opportunities and interesting collaborations. Reach out if you have a project in mind or just want to chat.
            </p>
          </div>

          <div className="space-y-8 pt-4">
            {/* Email Block */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold">Direct Inquiry</p>
                <a href={`mailto:${userData.email}`} className="text-lg font-bold text-text hover:text-accent transition-colors">
                  {userData.email}
                </a>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold">Voice / WhatsApp</p>
                <a href={`tel:${userData.phone}`} className="text-lg font-bold text-text hover:text-accent transition-colors">
                  {userData.phone}
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold">Current Base</p>
                <p className="text-lg font-bold text-text">
                  Phagwara, Punjab
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          {/* Decorative background for the card */}
          <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] blur-3xl -z-10 rotate-3"></div>
          
          <div className="bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all text-text placeholder:text-text/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all text-text placeholder:text-text/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-text/40 font-bold ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Feel free to reach out..."
                  className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl px-6 py-4 outline-none focus:border-accent/30 transition-all text-text placeholder:text-text/20 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-black dark:bg-white text-white dark:text-black rounded-2xl py-5 flex items-center justify-center gap-3 font-bold tracking-widest uppercase text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10 dark:shadow-white/5 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Contact;
