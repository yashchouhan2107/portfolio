import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Index = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
    { category: "Programming", items: ["C", "C++", "Java", "Python"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f329a31a-bf7c-406d-8f57-63e0d08dd268.png" 
              alt="Yash Chouhan - Professional Photo"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Yash Chouhan
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Fresh MCA Graduate | Full Stack Developer
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Passionate fresher with a hunger to join a dynamic company where I can improve my knowledge, 
            enhance my skills, and contribute to innovative projects using modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
           <Button variant="outline" size="lg" className="gap-2" asChild>
  <a href="/resume.pdf" download="resume.pdf">
    <Download className="w-4 h-4" />
    Download Resume
  </a>
</Button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a recent MCA graduate, I bring fresh perspectives and a strong foundation in computer applications. 
                My academic journey has equipped me with comprehensive knowledge of software development, 
                database management, and modern programming paradigms. I'm eager to apply my technical skills 
                in a professional environment and grow alongside experienced developers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Master of Computer Applications (MCA)</CardTitle>
              <CardDescription className="text-lg">
                Fresh Graduate | Ready to Begin Professional Journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completed comprehensive coursework in software development, database systems, 
                web technologies, and programming methodologies. Strong foundation in both 
                theoretical concepts and practical implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Get In Touch</h2>
          <Card className="inline-block">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>yashchauhan2107@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>+91 87706 83366

                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>India</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/yashchouhan2107" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/yash-chouhan-41aa01265" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Yash Chouhan. Ready to contribute and grow in the tech industry.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
