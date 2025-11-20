"use client";
import { useEffect, useState } from "react";
import GitHubRepos from "@/components/github-repos";
import Header from "@/components/header";
import LiveWebsites from "@/components/live-website";
import OtherProjects from "@/components/other-projects";
import Particles from "@/components/particles";

export default function Home() {
	const [geolocation, setGeolocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [geolocationError, setGeolocationError] = useState<string | null>(null);
	const [hasReportedGeolocation, setHasReportedGeolocation] =
		useState<boolean>(false);

	useEffect(() => {
		function getGeolocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						setGeolocation({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						});
					},
					(error) => {
						switch (error.code) {
							case error.PERMISSION_DENIED:
								setGeolocationError("User denied the request for Geolocation.");
								break;
							case error.POSITION_UNAVAILABLE:
								setGeolocationError("Location information is unavailable.");
								break;
							case error.TIMEOUT:
								setGeolocationError(
									"The request to get user location timed out.",
								);
								break;
							default:
								setGeolocationError("An unknown error occurred.");
								break;
						}
					},
					{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
				);
			} else {
				setGeolocationError("Geolocation is not supported by this browser.");
			}
		}

		getGeolocation();
	}, []);

	useEffect(() => {
		if (
			(geolocation !== null || geolocationError !== null) &&
			!hasReportedGeolocation
		) {
			async function sendAnalytics() {
				try {
					const userAgent = navigator.userAgent;
					const time = new Date().toLocaleString();
					const page = window.location.href;

					await fetch("api/analytics", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							userAgent,
							time,
							page,
							geolocation,
							geolocationError,
						}),
					});
					setHasReportedGeolocation(true);
				} catch (error) {
					console.error("Error sending analytics to API route:", error);
				}
			}

			sendAnalytics();
		}
	}, [geolocation, geolocationError, hasReportedGeolocation]);

	return (
		<div className="bg-gradient-to-tl w-full from-black via-zinc-600/20 to-black">
			<div className="animate-glow animate-fade-left hidden h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
			<Particles
				className="animate-fade-in absolute inset-0 -z-10 h-full"
				quantity={1000}
			/>
			<Header />

			<section id="websites" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 bg-clip-text whitespace-nowrap text-transparent bg-white">
						Live Websites
					</h2>
					<LiveWebsites />
				</div>
			</section>

			<section id="repositories" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-white">
						GitHub Repositories
					</h2>
					<GitHubRepos />
				</div>
			</section>

			<section id="projects" className="py-20 scroll-mt-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 bg-clip-text whitespace-nowrap text-transparent bg-white">
						Other Projects
					</h2>
					<OtherProjects />
				</div>
			</section>

			<div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
		</div>
	);
}
