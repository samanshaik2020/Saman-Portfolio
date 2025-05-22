
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileStat {
  value: string;
  label: string;
}

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  stats: ProfileStat[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  className?: string;
}

const ProfileCard = ({
  name,
  title,
  bio,
  avatar,
  stats,
  socialLinks,
  className,
}: ProfileCardProps) => {
  return (
    <motion.div 
      className={`profile-card sticky top-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-card-highlight" />
      <div className="p-6">
        <div className="flex gap-4 items-center">
          <Avatar className="w-20 h-20 border-2 border-primary/20">
            {avatar ? (
              <AvatarImage src={avatar} alt={name} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="w-8 h-8" />
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h2 className="text-2xl font-display font-bold">{name}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span>{title}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground">{bio}</p>

        <div className="profile-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box animate-on-scroll" data-delay={index * 100}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          {socialLinks.github && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Github size={16} />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <p className="text-sm">GitHub Profile</p>
              </HoverCardContent>
            </HoverCard>
          )}
          {socialLinks.linkedin && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <p className="text-sm">LinkedIn Profile</p>
              </HoverCardContent>
            </HoverCard>
          )}
          {socialLinks.email && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={`mailto:${socialLinks.email}`} 
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <p className="text-sm">Email Me</p>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
