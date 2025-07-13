import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Sahil-Saste"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sahil-saste-a97248296/"
    },
    {
      name: "Email",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=sahilsaste2304@gmail.com"
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+917249041134"
    }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center glow-effect">
                <span className="font-bold text-white">SS</span>
              </div>
              <span className="font-bold text-xl gradient-text">Sahil Saste</span>
            </div>
            <p className="text-muted-foreground">
              AI & Data Science Engineer passionate about turning data into actionable insights 
              and building intelligent solutions for real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Education", "Certifications", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Let's Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={() => console.log(`Footer ${social.name} clicked with href: ${social.href}`)}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for internships, freelance projects, and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Sahil Saste. Made with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and lots of data
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>B.E. AI & Data Science</span>
              <span>•</span>
              <span>Mumbai, India</span>
              <span>•</span>
              <span>CGPA: 7.54/10</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;