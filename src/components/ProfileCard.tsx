
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
      className={`profile-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-card-highlight" />
      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar className="w-32 h-32 mb-4 border-2 border-primary/20 overflow-hidden ring-2 ring-primary/10 ring-offset-2 ring-offset-background shadow-lg">
            {avatar ? (
              <AvatarImage 
                src={avatar} 
                alt={name} 
                className="object-cover object-center w-full h-full" 
              />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="w-12 h-12" />
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h2 className="text-3xl font-display font-bold">{name}</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span>{title}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-muted-foreground">{bio}</p>

        <div className="profile-stats justify-center mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box animate-on-scroll" data-delay={index * 100}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center mt-8">
          {socialLinks.github && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Github size={20} />
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
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Linkedin size={20} />
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
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  <Mail size={20} />
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
