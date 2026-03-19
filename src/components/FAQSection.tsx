import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: 'What services do you offer?', a: 'I specialize in Fullstack Web Development (React, Next.js) and advanced Discord Bot development. I can build custom websites, automation tools, and community management bots tailored to your needs.' },
  { q: 'How much do you charge for a project?', a: 'Pricing depends on the project scope and complexity. Contact me for a custom quote tailored to your needs.' },
  { q: 'What tech stack do you use?', a: 'I primarily use React, Next.js, TypeScript, Tailwind CSS for frontend, and Node.js, Go, MongoDB for backend. For Discord bots, I use Discord.js.' },
  { q: 'Do you provide support after deployment?', a: 'Yes! I offer ongoing support and maintenance to ensure your project runs smoothly after launch.' },
  { q: 'How can I hire you?', a: 'Simply fill out the contact form below or reach out via Discord. I\'ll get back to you within 24 hours.' },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Need <span className="highlight-text">Help?</span>
            </h2>
            <p className="text-2xl text-muted-foreground mt-1">We're here to assist.</p>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Still have questions? Feel free to contact our friendly support team specialists.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-6 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Contact Support →
            </motion.a>
          </motion.div>

          <div className="glass-card divide-y divide-border">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 cursor-pointer"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium text-sm ${open === i ? 'text-primary' : ''}`}>{faq.q}</span>
                  <div className="shrink-0 ml-2">
                    {open === i ? <Minus size={16} className="text-primary" /> : <Plus size={16} className="text-muted-foreground" />}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
