import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7249041134",
      href: "tel:+917249041134"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sahilsaste2304@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=sahilsaste2304@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sahil-saste-a97248296",
      href: "https://www.linkedin.com/in/sahil-saste-a97248296/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sahil-Saste",
      href: "https://github.com/Sahil-Saste"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI and data science projects? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="project-card">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center glow-effect">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how I can help bring your data science ideas to life.
              </p>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project collaboration, job opportunity, etc."
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <Button className="w-full gradient-bg glow-effect">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle className="text-xl gradient-text mb-4">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and collaborations in the field of AI and data science.
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => console.log(`Clicking ${contact.label} with href: ${contact.href}`)}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{contact.label}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability Card */}
            <Card className="skill-card">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold">Available for Projects</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Currently pursuing B.E. in AI & Data Science and available for:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Internship opportunities</li>
                    <li>• Freelance data science projects</li>
                    <li>• Research collaborations</li>
                    <li>• Open source contributions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Call to Action */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="text-lg font-semibold mb-2 gradient-text">Ready to Start?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Let's turn data into actionable insights together
              </p>
              <Button asChild className="gradient-accent-bg glow-accent-effect">
                <a href="https://mail.google.com/mail/?view=cm&to=sahilsaste2304@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Start Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;