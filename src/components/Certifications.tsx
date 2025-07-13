import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink, Building2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      provider: "Deloitte via Forage",
      date: "March 2025",
      type: "Job Simulation",
      skills: ["Data Analytics", "Tableau", "Excel", "Forensic Technology"],
      description: [
        "Completed a comprehensive Deloitte job simulation involving data analysis and forensic technology",
        "Created an interactive data dashboard using Tableau for business insights",
        "Utilized Excel for advanced data classification and business conclusion derivation"
      ],
      badge: "Professional"
    },
    {
      title: "Foundations: Data, Data Everywhere",
      provider: "Google via Coursera",
      date: "February 2025",
      type: "Professional Certificate",
      skills: ["Data Analysis", "Data Science Foundations", "Analytics"],
      description: [
        "Comprehensive introduction to data analytics and its applications",
        "Understanding of data lifecycle and analytical thinking",
        "Hands-on experience with data tools and methodologies"
      ],
      badge: "Google Certified"
    },
    {
      title: "Introduction to Data Science",
      provider: "Cisco Networking Academy",
      date: "January 2025",
      type: "Course Certificate",
      skills: ["Data Science", "Python", "Statistical Analysis"],
      description: [
        "Fundamental concepts of data science and statistical analysis",
        "Python programming for data manipulation and analysis",
        "Real-world applications of data science principles"
      ],
      badge: "Cisco"
    },
    {
      title: "Data Structures and Algorithms with Java",
      provider: "Apna College",
      date: "December 2024",
      type: "Course Certificate",
      skills: ["Java", "DSA", "Problem Solving", "Algorithms"],
      description: [
        "Comprehensive coverage of data structures and algorithms using Java",
        "Problem-solving techniques and algorithm optimization",
        "Practical implementation of complex data structures"
      ],
      badge: "Technical"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Professional": return "bg-tech-purple/10 text-[hsl(var(--tech-purple))] border-[hsl(var(--tech-purple))]/30";
      case "Google Certified": return "bg-tech-blue/10 text-[hsl(var(--tech-blue))] border-[hsl(var(--tech-blue))]/30";
      case "Cisco": return "bg-tech-cyan/10 text-[hsl(var(--tech-cyan))] border-[hsl(var(--tech-cyan))]/30";
      case "Technical": return "bg-primary/10 text-primary border-primary/30";
      default: return "bg-muted/10 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in data science and technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="project-card group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg gradient-text mb-2 leading-tight">
                        {cert.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className={getBadgeColor(cert.badge)}>
                          {cert.badge}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{cert.provider}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Key Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {cert.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Commitment to Growth</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            I believe in continuous learning and staying updated with the latest trends in AI and data science. 
            These certifications represent my dedication to professional growth and expertise in cutting-edge technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
              4+ Certifications
            </Badge>
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
              Industry Leaders
            </Badge>
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
              Hands-on Experience
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;