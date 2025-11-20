import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type WebsiteType = {
	id: number;
	name: string;
	description: string;
	url: URL;
	image: URL | string;
	technologies: string[];
	status: "Live" | "Offline";
};

const domain = "lmacedo.site";

const websites: WebsiteType[] = [
	{
		id: 0,
		name: "ComedyHub",
		description:
			"A social media platform focused on humor and entertainment, featuring user-generated content, moderation tools, and interactive engagement.",
		url: new URL("https://thecomedyhub.com.br"),
		image: "/chub.png",
		technologies: ["Java", "Spring", "PostgreSQL", "Docker"],
		status: "Live",
	},
	{
		id: 1,
		name: "Portfolio Landing Page",
		description:
			"A personal portfolio landing page showcasing projects, skills, and contact information in a clean and responsive layout.",
		url: new URL(`https://landing-page.${domain}`),
		image: "/landing-page.png",
		technologies: ["HTML", "CSS", "GitHub", "Netlify"],
		status: "Live",
	},
	{
		id: 2,
		name: "ComedyHub News Blog",
		description:
			"A blog for posting updates and announcements related to the ComedyHub platform. Last updated in February.",
		url: new URL(`https://comedyblog.${domain}/blog`),
		image: "/chub-blog.png",
		technologies: ["React", "TypeScript", "Docusaurus"],
		status: "Live",
	},
	{
		id: 3,
		name: "Personal Tech Blog",
		description:
			"A personal blog for sharing articles, notes, and ideas. Last updated in February.",
		url: new URL(`https://blog.${domain}/blog`),
		image: "/personal-blog.png",
		technologies: ["React", "TypeScript", "Docusaurus"],
		status: "Live",
	},
	{
		id: 4,
		name: "Market Data Dashboard",
		description:
			"A financial dashboard for viewing real-time price data of assets listed on Brazilian and U.S. stock markets.",
		url: new URL(`https://finance.${domain}`),
		image: "/finance.png",
		technologies: ["React", "Next.js"],
		status: "Live",
	},
	{
		id: 5,
		name: "Pomodoro Timer",
		description:
			"A simple and clean Pomodoro timer app to boost productivity with customizable work and break intervals.",
		url: new URL(`https://pomodoro.${domain}`),
		image: "/pomodoro.png",
		technologies: ["React", "TypeScript"],
		status: "Live",
	},
	{
		id: 6,
		name: "Economic Doctrines Project",
		description:
			"An educational website created for a high school history presentation, covering key economic doctrines.",
		url: new URL(`https://example-landing.${domain}`),
		image: "/landing-page-econ.png",
		technologies: ["HTML", "CSS", "GitHub", "Netlify"],
		status: "Live",
	},
	{
		id: 7,
		name: "Basic Calculator",
		description:
			"A simple web calculator built with JavaScript for performing basic arithmetic operations.",
		url: new URL(`https://calc.${domain}`),
		image: "/calc.png",
		technologies: ["HTML", "CSS", "JavaScript", "GitHub", "Netlify"],
		status: "Live",
	},
];

export default function LiveWebsites() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
			{websites.map((website) => (
				<Card
					key={website.id}
					className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-transparent"
				>
					<div className="relative overflow-hidden">
						<Image
							src={website.image.toString() || "/placeholder.svg"}
							alt={`${website.name} screenshot`}
							width={400}
							height={200}
							className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
						/>
						<div className="absolute top-4 right-4">
							<Badge
								className={`${website.status === "Live" ? "bg-green-500" : "bg-red-500"} text-white`}
							>
								<Globe className="w-3 h-3 mr-1" />
								{website.status}
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle className="text-xl font-semibold text-slate-200">
							{website.name}
						</CardTitle>
						<CardDescription className="text-slate-400">
							{website.description}
						</CardDescription>
					</CardHeader>

					<CardContent>
						<div className="flex flex-wrap gap-2 mb-4">
							{website.technologies.map((tech) => (
								<Badge
									key={tech}
									variant="outline"
									className="text-xs text-slate-200"
								>
									{tech}
								</Badge>
							))}
						</div>

						<Button asChild className="w-full">
							<a
								href={website.url.toString()}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="w-4 h-4 mr-2" />
								Visit Website
							</a>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
