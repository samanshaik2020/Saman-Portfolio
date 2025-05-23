
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useScrollAnimation();
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out
              to me through the contact form or via social media.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <a 
                href="mailto:contact@Saman.dev" 
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" /> contact@Saman.dev
              </a>
              
              <a 
                href="https://github.com/samanshaik2020" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" /> github.com/samanshaik2020
              </a>
              
              <a 
                href="https://www.linkedin.com/in/saman-shaik-15a85222b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" /> linkedin.com/in/saman-shaik-15a85222b
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
