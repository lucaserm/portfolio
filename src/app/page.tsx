"use client";

import { Briefcase, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Home() {
	return (
		<div className="flex w-full flex-col gap-12">
			<header className="flex min-h-screen w-full items-center justify-center">
				<div className="mx-auto grid max-w-5xl grid-cols-5 gap-3 px-4">
					<div className="col-span-3 text-justify">
						<div className="mb-1 flex flex-wrap gap-2">
							<Badge variant="outline">
								<MapPin className="h-4 w-4" /> Campo Grande, MS
							</Badge>
							<Badge variant="outline">
								<Briefcase className="h-4 w-4" /> Full-Stack Developer
							</Badge>
						</div>
						<h1 className="mb-6 text-5xl font-bold md:text-7xl">
							Lucas Macedo
						</h1>
						<p className="mb-8 text-xl leading-relaxed md:text-2xl">
							Full-Stack Developer
						</p>
						<p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
							Passionate about creating beautiful, functional web applications
							with modern technologies. Specialized in Java, Next.js, and
							TypeScript with a focus on user experience and performance.
						</p>

						<div className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
							<MapPin className="h-4 w-4" />
							<span>Campo Grande, MS</span>
						</div>
					</div>
					<div className="col-span-2">
						<div className="mx-auto mb-3 h-48 w-48 rounded-full border-4 border-white shadow-2xl">
							<Image
								src="/photo.png"
								alt="Profile Photo"
								width={360}
								height={360}
								className="h-full w-full rounded-full object-cover"
								priority
							/>
						</div>

						<div className="flex justify-center gap-4">
							<a
								href="https://github.com/lucaserm"
								className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
								aria-label="GitHub"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://linkedin.com/in/lucaserm"
								className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="mailto:lucas.macedo@ufms.br"
								className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
