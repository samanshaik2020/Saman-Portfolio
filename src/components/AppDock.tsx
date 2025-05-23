
import { 
  Code, 
  Github, 
  Home, 
  Inbox, 
  Laptop, 
  Layers, 
  Mail, 
  User 
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const dockItems = [
  {
    title: "Home",
    icon: <Home className="h-full w-full text-primary" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <User className="h-full w-full text-primary" />,
    href: "#about",
  },
  {
    title: "Projects",
    icon: <Laptop className="h-full w-full text-primary" />,
    href: "#projects",
  },
  {
    title: "Skills",
    icon: <Code className="h-full w-full text-primary" />,
    href: "#skills",
  },
  {
    title: "Experience",
    icon: <Layers className="h-full w-full text-primary" />,
    href: "#experience",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-primary" />,
    href: "#contact",
  },
  {
    title: "GitHub",
    icon: <Github className="h-full w-full text-primary" />,
    href: "https://github.com/samanshaik2020",
    external: true,
  },
];

export function AppDock() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 max-w-full -translate-x-1/2 transform">
      <Dock className="items-end pb-3">
        {dockItems.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg transition-colors hover:bg-secondary"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <a 
                href={item.href}
                target={item.external ? "_blank" : undefined} 
                rel={item.external ? "noopener noreferrer" : undefined}
                className="size-full p-2 flex items-center justify-center"
              >
                {item.icon}
              </a>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
