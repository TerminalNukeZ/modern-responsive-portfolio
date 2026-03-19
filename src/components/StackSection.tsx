import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

const tools = [
  { name: 'JavaScript', category: 'CORE LANGUAGE', yoe: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', category: 'TYPED SUPERSET', yoe: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', category: 'FRONTEND LIBRARY', yoe: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'FULLSTACK FRAMEWORK', yoe: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Go (Golang)', category: 'BACKEND PERFORMANCE', yoe: 2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'Discord.js', category: 'BOT FRAMEWORK', yoe: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' },
  { name: 'MongoDB', category: 'NOSQL DATABASE', yoe: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind CSS', category: 'UTILITY CSS', yoe: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const StackSection = () => {
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
              Tools & <span className="highlight-text">Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              I specialize in building scalable applications using modern technologies. Here is my preferred stack that I use to bring ideas to life.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium">
                <Github size={16} /> Open Github
              </a>
              <a href="#contact" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium">
                <Mail size={16} /> Get in touch
              </a>
            </div>
          </motion.div>

          <div className="space-y-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="glass-card p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center overflow-hidden p-1.5">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tool.name}</p>
                    <p className="text-muted-foreground text-xs font-mono">{tool.category}</p>
                  </div>
                </div>
                <span className="text-xs bg-muted px-2.5 py-1 rounded-md font-medium text-muted-foreground">
                  {tool.yoe} YOE
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
