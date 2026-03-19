import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'minecraft-basic-tips',
    desc: 'A few tips and tricks I learned while managing my own Minecraft community server.',
    date: 'NOVEMBER 25, 2025',
    gradient: 'from-green-500/20 to-emerald-500/10',
    emoji: '⛏️',
  },
  {
    title: 'discord-bots-basic',
    desc: 'Creating your own Discord bot isn\'t as complicated as it might sound. With a basic understanding of JavaScript and the...',
    date: 'NOVEMBER 24, 2025',
    gradient: 'from-primary/20 to-primary/5',
    emoji: '🤖',
  },
];

const UpdatesSection = () => {
  return (
    <section id="updates" className="py-20">
      <div className="section-container">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Latest <span className="highlight-text">Updates</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Insights, thoughts, and tutorials from my development journey.
            </p>
          </motion.div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
            View All Posts <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className={`h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-5xl`}>
                {post.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} /> {post.date}
                </div>
                <h3 className="font-bold mt-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{post.desc}</p>
                <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
