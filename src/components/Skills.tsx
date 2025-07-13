import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  BookOpen, 
  Users, 
  Clock,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "SQL"],
      color: "tech-purple"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
      color: "tech-blue"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "tech-cyan"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Linear Regression", "Logistic Regression", "Decision Trees", "K-Means Clustering"],
      color: "tech-purple"
    },
    {
      title: "Libraries & Frameworks",
      icon: BookOpen,
      skills: ["Scikit Learn", "Pandas", "Numpy", "OpenCV", "NLTK", "Streamlit"],
      color: "tech-blue"
    },
    {
      title: "Tools & Technologies",
      icon: Lightbulb,
      skills: ["Git", "Docker", "Jupyter Notebook", "Excel", "Google Colab"],
      color: "tech-cyan"
    }
  ];

  const softSkills = [
    "Analytical Thinking",
    "Team Collaboration", 
    "Time Management",
    "Problem Solving",
    "Data Storytelling"
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I use to build data-driven solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="skill-card group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg gradient-bg flex items-center justify-center glow-effect group-hover:animate-pulse-glow`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="skill-card">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg gradient-accent-bg flex items-center justify-center glow-accent-effect">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/50 text-primary hover:bg-primary/10 transition-colors text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-xl font-semibold mb-3 gradient-text">Core Competencies</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Data Science undergraduate with a strong interest in <strong>Artificial Intelligence</strong> and hands-on experience 
            in building <strong>ML-powered applications</strong> and <strong>BI dashboards</strong>. Developed an AI Resume Screening System 
            using NLP and S-BERT, and created an interactive Power BI dashboard for HR analytics. Skilled in Python, SQL, and data storytelling, 
            with a passion for applying AI and data-driven solutions to real-world business problems. Continuously exploring emerging AI technologies to drive innovation and impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;