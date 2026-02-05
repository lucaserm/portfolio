import { ExternalLink, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'ComedyHub App',
    description:
      'A social media application built with React Native. Features include account management, posts, comments and chat.',
    link: 'https://play.google.com/store/apps/details?id=br.com.thecomedyhub&hl=pt_BR',
    technologies: ['React Native', 'TypeScript'],
    type: 'Mobile App',
    icon: Smartphone,
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-12">
        <h2 className="mb-12 text-4xl font-bold">Other Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="w-full px-6">
                  <div className="gap- flex items-start">
                    <div className="mr-2 hidden rounded-lg bg-blue-100 p-3 transition-colors group-hover:bg-blue-200 md:flex dark:bg-blue-900/30 dark:group-hover:bg-blue-900/50">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-wrap text-slate-600 dark:text-slate-400">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
