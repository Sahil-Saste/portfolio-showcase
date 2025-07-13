import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, BarChart3, Users, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Screening System",
      icon: Brain,
      description: "Built a resume screening app using Streamlit that compares resumes with job descriptions using regex and NLP.",
      longDescription: [
        "Integrated Sentence-BERT to compute semantic similarity, enabling context-aware matching",
        "Displayed skill match, semantic score, and combined score with visual charts for recruiter-friendly output",
        "Parsed resumes from PDFs and highlighted missing skills with personalized suggestions"
      ],
      technologies: ["Python", "NLP", "Streamlit", "Sentence-BERT", "PDF Processing"],
      category: "AI/ML",
      github: "https://github.com/Sahil-Saste/Resume-Screening-AI"
    },
    {
      title: "Employee Attrition Analysis",
      icon: BarChart3,
      description: "Built an interactive Power BI dashboard analyzing attrition patterns across 1,480 employees.",
      longDescription: [
        "Used SQL queries to preprocess employee data and create calculated columns for attrition trends",
        "Applied DAX measures to calculate attrition rates, employee tenure, and job satisfaction impact",
        "Provided data-driven insights to help HR teams improve retention strategies and employee engagement"
      ],
      technologies: ["Power BI", "SQL", "DAX", "Excel", "Data Analysis"],
      category: "Data Analytics",
      github: "https://github.com/Sahil-Saste/Employee-Attrition-Analysis"
    },
    {
      title: "Customer Segmentation",
      icon: Users,
      description: "Applied a K-means clustering model to segment customers based on spending patterns.",
      longDescription: [
        "Analyzed clusters and labeled them to provide actionable insights into customer behavior",
        "Visualized spending trends and cluster characteristics for better business insights",
        "Optimized cluster count using the elbow method, improving segmentation accuracy"
      ],
      technologies: ["Python", "K-means Clustering", "Matplotlib", "Seaborn", "Data Visualization"],
      category: "Machine Learning"
    },
    {
      title: "Spam Email Detection",
      icon: Shield,
      description: "Developed an SVM model achieving 93% classification accuracy on 5,000+ email samples.",
      longDescription: [
        "Preprocessed email data to extract features and integrated Scikit-learn pipelines for efficient modeling",
        "Designed an intuitive interface for users to input email text and get instant predictions",
        "Implemented comprehensive feature engineering for improved model performance"
      ],
      technologies: ["Python", "SVM", "Scikit-learn", "HTML", "CSS", "Machine Learning"],
      category: "Machine Learning"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-tech-purple/10 text-[hsl(var(--tech-purple))] border-[hsl(var(--tech-purple))]/30";
      case "Data Analytics": return "bg-tech-blue/10 text-[hsl(var(--tech-blue))] border-[hsl(var(--tech-blue))]/30";
      case "Machine Learning": return "bg-tech-cyan/10 text-[hsl(var(--tech-cyan))] border-[hsl(var(--tech-cyan))]/30";
      default: return "bg-primary/10 text-primary border-primary/30";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of AI and data science to solve business problems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="project-card group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl gradient-text mb-2">
                          {project.title}
                        </CardTitle>
                        <Badge className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.longDescription.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild 
                      className="gradient-bg flex-1 glow-effect hover:shadow-lg"
                    >
                      <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            asChild 
            size="lg" 
            className="gradient-accent-bg glow-accent-effect"
          >
            <a href="https://github.com/Sahil-Saste" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;