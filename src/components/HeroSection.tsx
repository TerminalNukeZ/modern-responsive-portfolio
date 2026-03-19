import { motion } from 'framer-motion';
import { Download, Code, Terminal, Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import avatar from '@/assets/avatar.jpg';

import badgeActiveDev from '@/assets/badges/active-developer.png';
import badgeNitro from '@/assets/badges/nitro.png';
import badgeHypesquadBravery from '@/assets/badges/hypesquad-bravery.png';
import badgeActiveDevBadge from '@/assets/badges/active-dev-badge.png';
import badgeHypesquadEvents from '@/assets/badges/hypesquad-events.png';
import badgeEarlySupporter from '@/assets/badges/early-supporter.png';
import badgeBugHunter from '@/assets/badges/bug-hunter.png';
import badgeVerifiedBotDev from '@/assets/badges/verified-bot-dev.png';
import badgeServerBooster from '@/assets/badges/server-booster.png';

const discordBadges = [
  { name: 'Active Developer', img: badgeActiveDev },
  { name: 'Nitro Subscriber', img: badgeNitro },
  { name: 'HypeSquad Bravery', img: badgeHypesquadBravery },
  { name: 'Active Dev Badge', img: badgeActiveDevBadge },
  { name: 'HypeSquad Events', img: badgeHypesquadEvents },
  { name: 'Early Supporter', img: badgeEarlySupporter },
  { name: 'Bug Hunter', img: badgeBugHunter },
  { name: 'Verified Bot Dev', img: badgeVerifiedBotDev },
  { name: 'Server Booster', img: badgeServerBooster },
];

// Lo-fi audio URL (royalty-free)
const AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

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
                {/* Discord Idle Moon Status */}
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full border-4 border-card flex items-center justify-center" style={{ backgroundColor: '#FAA61A' }}>
                  <div
                    className="w-4 h-4 rounded-full border-card"
                    style={{
                      background: 'radial-gradient(circle at 35% 40%, transparent 40%, #FAA61A 41%)',
                      boxShadow: 'inset 4px -2px 0px 0px hsl(var(--card))',
                    }}
                  />
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-4xl font-bold tracking-tight">Electroo</h1>
                <p className="text-muted-foreground mt-1">@electroo</p>

                {/* Discord Badges - Real Images */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                  {discordBadges.map(badge => (
                    <motion.div
                      key={badge.name}
                      whileHover={{ scale: 1.3 }}
                      className="w-7 h-7 flex items-center justify-center cursor-pointer"
                      title={badge.name}
                    >
                      <img src={badge.img} alt={badge.name} className="w-6 h-6 object-contain" />
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
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🎵
                  </div>
                </motion.div>
              </div>
              {/* Animated bars when playing */}
              <div className="absolute top-3 right-3 flex items-end gap-0.5 h-5">
                {isPlaying ? (
                  [0, 1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{ height: ['4px', '16px', '8px', '16px', '4px'] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))
                ) : (
                  <span className="bg-card/80 text-xs px-2 py-1 rounded-md text-muted-foreground font-medium">
                    {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
                  </span>
                )}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Coding Lo-Fi</h3>
              <p className="text-muted-foreground text-sm">Chill Vibes Only</p>
              <div className="flex items-center gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                </motion.button>
                <div className="flex-1 flex flex-col gap-1">
                  <div
                    className="w-full h-1.5 bg-muted rounded-full cursor-pointer relative group"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full bg-primary rounded-full transition-all relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{duration ? formatTime(duration) : '0:00'}</span>
                  </div>
                </div>
                <Volume2 size={16} className="text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
