import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey in Artificial Intelligence and Data Science
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="project-card group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl gradient-text">
                    Bachelor of Engineering in Artificial Intelligence & Data Science
                  </CardTitle>
                  <p className="text-lg text-muted-foreground mt-2">
                    Terna Engineering College, Nerul
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">Nov 2022 - May 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                    <p className="font-semibold">7.54 / 10</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">Mumbai, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border/50">
                <h4 className="font-semibold mb-3 text-primary">Key Focus Areas:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <p className="text-sm">• Machine Learning & Deep Learning</p>
                  <p className="text-sm">• Data Structures & Algorithms</p>
                  <p className="text-sm">• Natural Language Processing</p>
                  <p className="text-sm">• Business Intelligence</p>
                  <p className="text-sm">• Statistical Analysis</p>
                  <p className="text-sm">• Software Engineering</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;