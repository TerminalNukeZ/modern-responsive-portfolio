import { motion } from 'framer-motion';
import { Download, Code, Terminal } from 'lucide-react';
import avatar from '@/assets/avatar.jpg';

const discordBadges = [
  { name: 'Active Developer', color: '#57F287' },
  { name: 'Early Supporter', color: '#FFD700' },
  { name: 'HypeSquad Bravery', color: '#9B59B6' },
  { name: 'Nitro Subscriber', color: '#F47FFF' },
  { name: 'Server Booster', color: '#FF73FA' },
  { name: 'Verified Bot Dev', color: '#5865F2' },
  { name: 'Early Verified Bot Dev', color: '#7289DA' },
  { name: 'Bug Hunter', color: '#3BA55D' },
  { name: 'HypeSquad Events', color: '#FAA61A' },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Electroo"
                  className="w-36 h-36 rounded-full border-4 border-primary/30 object-cover"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-card" title="Idle" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-4xl font-bold tracking-tight">Electroo</h1>
                <p className="text-muted-foreground mt-1">@electroo</p>

                {/* Discord Badges */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                  {discordBadges.map(badge => (
                    <motion.div
                      key={badge.name}
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: badge.color + '22', color: badge.color }}
                      title={badge.name}
                    >
                      {badge.name.charAt(0)}
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-border mt-4 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                    <Code size={16} className="text-primary" />
                    <span>Fullstack Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                    <Terminal size={16} className="text-primary" />
                    <span>Discord Bot Developer</span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Hi, I'm Electroo. A developer focusing on Discord Bot and Web Development. I enjoy exploring new technologies!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg flex items-center gap-2 mx-auto sm:mx-0 font-medium"
                >
                  <Download size={16} />
                  Download CV
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Music Player Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-0 overflow-hidden flex flex-col"
          >
            <div className="relative flex-1 min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🎵
                  </div>
                </motion.div>
              </div>
              <div className="absolute top-3 right-3 bg-card/80 text-xs px-2 py-1 rounded-md text-muted-foreground font-medium">
                PAUSED
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Coding Lo-Fi</h3>
              <p className="text-muted-foreground text-sm">Chill Vibes Only</p>
              <div className="flex items-center gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                >
                  ▶
                </motion.button>
                <div className="flex-1 h-1 bg-muted rounded-full">
                  <div className="w-1/3 h-full bg-primary rounded-full" />
                </div>
                <span className="text-muted-foreground text-xs">🔊</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
