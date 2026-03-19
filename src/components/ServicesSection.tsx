import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> MY SERVICES
            </p>
            <h2 className="text-4xl font-bold mt-2">
              Creative<br />
              <span className="highlight-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              Elevate your digital presence with tailored strategies. I help you build robust applications and automate your community workflow.
            </p>
            <ul className="mt-6 space-y-3">
              {['High Performance & Scalable', 'Custom & Tailored Features', 'Modern UI/UX Design'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <Check size={16} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-6 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Get Started <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>

          <div className="space-y-4">
            {[
              { title: 'Web Development', cat: 'DESIGN & DEVELOPMENT', desc: 'Modern, responsive, and high-performance websites built with React, Next.js, and Tailwind CSS.' },
              { title: 'Discord Bot', cat: 'AUTOMATION & COMMUNITY', desc: 'Advanced Discord bots with moderation, music, economy, and custom features using Discord.js.' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-primary text-xs font-mono mt-1">{service.cat}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
