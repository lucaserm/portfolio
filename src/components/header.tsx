import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Header() {
	return (
		<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white">
			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
				<div className="mb-8 relative">
					<div className="w-32 h-32 relative mx-auto rounded-full border-4 border-white shadow-2xl">
						<div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white" />
						<Image
							src="/photo.png"
							alt="Profile Photo"
							width={128}
							height={128}
							className="w-full h-full object-cover rounded-full"
							priority
						/>
					</div>
				</div>

				<h1 className="text-5xl md:text-7xl font-bold mb-6">Lucas Macedo</h1>

				<p className="text-xl md:text-2xl mb-8 leading-relaxed">
					Full-Stack Developer
				</p>

				<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
					Passionate about creating beautiful, functional web applications with
					modern technologies. Specialized in Java, Next.js, and TypeScript with
					a focus on user experience and performance.
				</p>

				<div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
					<MapPin className="w-4 h-4" />
					<span>Campo Grande, MS</span>
				</div>

				<div className="flex justify-center gap-6">
					<a
						href="https://github.com/lucaserm"
						className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
						aria-label="GitHub Profile"
					>
						<Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
					</a>
					<a
						href="https://linkedin.com/in/lucaserm"
						className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
						aria-label="LinkedIn Profile"
					>
						<Linkedin className="w-6 h-6 text-blue-600" />
					</a>
					<a
						href="mailto:lucas.macedo@ufms.br"
						className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
						aria-label="Email Contact"
					>
						<Mail className="w-6 h-6 text-green-600" />
					</a>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-pulse" />
				</div>
			</div>
		</header>
	);
}
