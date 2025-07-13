import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 left-20 w-72 h-72 gradient-bg rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-accent-bg rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '-3s' }}></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full gradient-bg flex items-center justify-center text-6xl font-bold text-white glow-effect animate-pulse-glow">
            SS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sahil Saste</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            AI & Data Science Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Data Science undergraduate with hands-on experience in building ML-powered apps and BI dashboards. 
            Passionate about solving real-world business problems through artificial intelligence and data-driven insights.
          </p>
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="gradient-bg glow-effect">
              <a href="https://mail.google.com/mail/?view=cm&to=sahilsaste2304@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/sahil-saste-a97248296/" target="_blank" rel="noopener noreferrer" onClick={() => console.log('Hero LinkedIn clicked')}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="https://github.com/Sahil-Saste" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="tel:+917249041134">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </a>
            </Button>
          </div>
          
          {/* Resume download */}
          <Button asChild size="lg" className="gradient-accent-bg glow-accent-effect">
            <a href="/SahilSasteResume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;