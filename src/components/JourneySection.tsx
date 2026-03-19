import { motion } from 'framer-motion';
import { CheckCircle, Server, FileCode, Zap, Layout, Quote } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    description: 'Expanding my skills into Fullstack Development and modern UI/UX design.',
    items: [
      { icon: Layout, text: 'Modern Portfolio', sub: 'Built with React, Tailwind, and Framer Motion.' },
      { icon: Zap, text: 'Advanced Bots', sub: 'Developing complex Discord bots with dashboard integration.' },
    ],
  },
  {
    year: '2023',
    description: 'Deep dived into Discord API and verified my first bot. Started gaining traction in the community.',
    items: [
      { icon: CheckCircle, text: 'Verified Bot Developer Badge' },
      { icon: Server, text: 'Reached 100+ Server Installs' },
      { icon: FileCode, text: 'Learned TypeScript & Node.js' },
    ],
  },
  {
    year: '2022',
    description: 'The beginning of my coding journey. Started with simple scripts and Minecraft plugins.',
    quote: '"Hello World" was just the start.',
  },
];

const JourneySection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            My <span className="highlight-text">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            A timeline of my growth from a curious beginner to a Fullstack & Bot Developer.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {timelineData.map((entry, i) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-16 pb-20 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <div className="highlight-text text-2xl font-bold mb-4">{entry.year}</div>
              <p className="text-muted-foreground max-w-2xl mb-6">{entry.description}</p>

              {entry.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {entry.items.map(item => (
                    <motion.div
                      key={item.text}
                      whileHover={{ y: -2 }}
                      className="glass-card p-4 flex items-start gap-3"
                    >
                      <item.icon size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{item.text}</p>
                        {item.sub && <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {entry.quote && (
                <div className="glass-card p-4 flex items-center gap-2 max-w-lg">
                  <Quote size={16} className="text-primary shrink-0" />
                  <p className="text-muted-foreground italic text-sm">{entry.quote}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
