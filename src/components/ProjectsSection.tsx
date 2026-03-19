import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Moonveil Landing Page',
    desc: 'A modern and sleek landing page for a Discord bot, built with React and Tailwind.',
    tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Moonveil Bot',
    desc: 'An advanced all-in-one Discord bot packed with powerful features, designed for both utility and entertainment.',
    tags: ['DISCORD.JS', 'JAVASCRIPT', 'MONGODB'],
    color: 'from-primary/10 to-transparent',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Featured <span className="highlight-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              A glimpse of my recent work. Check out the full portfolio for more.
            </p>
          </motion.div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-3/4 h-3/4 rounded-lg bg-card/50 backdrop-blur border border-border/50 p-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Preview</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border mt-4 pt-4 flex items-center gap-4">
                  <a href="#" className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                    <GitBranch size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
