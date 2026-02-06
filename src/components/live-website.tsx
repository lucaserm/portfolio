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
import { domain } from "@/constants/projects";

type WebsiteType = {
	name: string;
	description: string;
	url: URL;
	image: URL | string;
	technologies: string[];
	status: "Live" | "Offline";
};

const websites: WebsiteType[] = [
	{
		name: "ComedyHub",
		description:
			"A social media platform focused on humor and entertainment, featuring user-generated content, moderation tools, and interactive engagement.",
		url: new URL("https://thecomedyhub.com.br"),
		image: "/chub.png",
		technologies: ["Java", "Spring", "PostgreSQL", "Docker"],
		status: "Live",
	},
	{
		name: "Bewear",
		description:
			"A clothes e-commerce platform with a focus on sustainability and ethical fashion, offering a curated selection of eco-friendly clothing and accessories.",
		url: new URL(`https://bewear.${domain}`),
		image: "/bewear.png",
		technologies: ["NextJS", "Typescript", "Tailwind", "Drizzle"],
		status: "Live",
	},
	{
		name: "BarberPro",
		description:
			"A barber shop management system with appointment scheduling, customer management, and inventory tracking features.",
		url: new URL(`https://next-barber-mu.vercel.app/`),
		image: "/barber-pro.png",
		technologies: ["NextJS", "Typescript", "Tailwind", "Drizzle"],
		status: "Live",
	},
	{
		name: "ComedyHub News Blog",
		description:
			"A blog for posting updates and announcements related to the ComedyHub platform. Last updated in February.",
		url: new URL(`https://comedyblog.${domain}/blog`),
		image: "/chub-blog.png",
		technologies: ["React", "TypeScript", "Docusaurus"],
		status: "Live",
	},
	{
		name: "Personal Tech Blog",
		description:
			"A personal blog for sharing articles, notes, and ideas. Last updated in February.",
		url: new URL(`https://blog.${domain}/docs`),
		image: "/personal-blog.png",
		technologies: ["React", "TypeScript", "Docusaurus"],
		status: "Live",
	},
	{
		name: "Market Data Dashboard",
		description:
			"A financial dashboard for viewing real-time price data of assets listed on Brazilian and U.S. stock markets.",
		url: new URL(`https://finance.${domain}`),
		image: "/finance.png",
		technologies: ["React", "Next.js"],
		status: "Live",
	},
	{
		name: "Portfolio Landing Page",
		description:
			"A personal portfolio landing page showcasing projects, skills, and contact information in a clean and responsive layout.",
		url: new URL(`https://landing-page.${domain}`),
		image: "/landing-page.png",
		technologies: ["HTML", "CSS", "GitHub", "Netlify"],
		status: "Live",
	},
	{
		name: "Pomodoro Timer",
		description:
			"A simple and clean Pomodoro timer app to boost productivity with customizable work and break intervals.",
		url: new URL(`https://pomodoro.${domain}`),
		image: "/pomodoro.png",
		technologies: ["React", "TypeScript"],
		status: "Live",
	},
	{
		name: "Economic Doctrines Project",
		description:
			"An educational website created for a high school history presentation, covering key economic doctrines.",
		url: new URL(`https://example-landing.${domain}`),
		image: "/landing-page-econ.png",
		technologies: ["HTML", "CSS", "GitHub", "Netlify"],
		status: "Live",
	},
	{
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
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{websites.map((website) => (
				<Card
					key={website.name}
					className="group overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div className="relative overflow-hidden">
						<Image
							src={website.image.toString() || "/placeholder.svg"}
							alt={`${website.name} screenshot`}
							width={400}
							height={200}
							className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute top-4 right-4">
							<Badge
								className={`${website.status === "Live" ? "bg-green-500" : "bg-red-500"} text-secondary`}
							>
								<Globe className="mr-1 h-3 w-3" />
								{website.status}
							</Badge>
						</div>
					</div>

					<CardHeader>
						<CardTitle className="text-xl font-semibold">
							{website.name}
						</CardTitle>
						<CardDescription className="text-muted-foreground h-16">
							{website.description}
						</CardDescription>
					</CardHeader>

					<CardContent>
						<div className="mb-4 flex flex-wrap gap-2">
							{website.technologies.map((tech) => (
								<Badge
									key={tech}
									variant="outline"
									className="text-muted-foreground text-xs"
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
								<ExternalLink className="mr-2 h-4 w-4" />
								Visit Website
							</a>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
