import { ExternalLink, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const projects = [
	{
		id: 1,
		title: "ComedyHub App",
		description:
			"A social media application built with React Native. Features include account management, posts, comments and chat.",
		link: "https://play.google.com/store/apps/details?id=br.com.thecomedyhub&hl=pt_BR",
		technologies: ["React Native", "TypeScript"],
		type: "Mobile App",
		icon: Smartphone,
	},
	// {
	//   id: 2,
	//   title: "Open Source UI Library",
	//   description:
	//     "A comprehensive React component library with 50+ components, TypeScript support, and extensive documentation.",
	//   link: "https://github.com/username/ui-library",
	//   technologies: ["React", "TypeScript", "Storybook", "Rollup"],
	//   type: "Open Source",
	//   icon: Code,
	// },
	// {
	//   id: 3,
	//   title: "Team Collaboration Tool",
	//   description:
	//     "A real-time collaboration platform for remote teams with video calls, file sharing, and project management features.",
	//   link: "https://teamtool.example.com",
	//   technologies: ["Vue.js", "Socket.io", "WebRTC", "MongoDB"],
	//   type: "Web App",
	//   icon: Users,
	// },
	// {
	//   id: 4,
	//   title: "AI-Powered Analytics",
	//   description:
	//     "Machine learning platform for business analytics with predictive modeling and automated insights generation.",
	//   link: "https://analytics.example.com",
	//   technologies: ["Python", "TensorFlow", "FastAPI", "React"],
	//   type: "AI/ML",
	//   icon: Code,
	// },
];

export default function OtherProjects() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{projects.map((project) => {
				const IconComponent = project.icon;
				return (
					<Card
						key={project.id}
						className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 "
					>
						<CardHeader className="px-6 w-full">
							<div className="flex items-start gap-">
								<div className="hidden p-3 mr-2 md:flex rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
									<IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-2 mb-2">
										<CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
											{project.title}
										</CardTitle>
										<Badge variant="secondary" className="text-xs">
											{project.type}
										</Badge>
									</div>
									<CardDescription className="text-slate-600 dark:text-slate-400 text-wrap">
										{project.description}
									</CardDescription>
								</div>
							</div>
						</CardHeader>

						<CardContent>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<Badge key={tech} variant="outline" className="text-xs">
										{tech}
									</Badge>
								))}
							</div>

							<Button asChild className="w-full">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="w-4 h-4 mr-2" />
									View Project
								</a>
							</Button>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
