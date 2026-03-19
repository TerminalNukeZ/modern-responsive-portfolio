import { Github, MessageCircle, Mail } from 'lucide-react';
import avatar from '@/assets/avatar.jpg';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={avatar} alt="Electroo" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-bold text-lg">Electroo</span>
            </div>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs leading-relaxed">
              A Fullstack & Discord Bot Developer passionate about building scalable applications and automation tools.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Journey</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub Profile</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord Community</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2026 Electroo. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
