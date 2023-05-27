import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import { Article, NAMES } from './article';
import { Eye } from 'lucide-react';
import axios from 'axios';

export const revalidate = 60;
export default async function ProjectsPage() {
	const res = await axios.get(
		'https://api.github.com/search/repositories?q=user%3Alucaserm'
	);
	let items: any[] = res.data.items;

	const principal = items
		? items.find((repo) => repo.name === 'sinmos-remastered-api')
		: null;

	const top2 = items
		? items.find((repo) => repo.name === 'biblioteca-springboot')
		: null;
	const top3 = items
		? items.find((repo) => repo.name === 'sinmos-remastered-react-native')
		: null;

	return (
		<div className='relative pb-16'>
			<Navigation />
			<div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
				<div className='max-w-2xl mx-auto lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
						Projetos
					</h2>
					<p className='mt-4 text-zinc-400'>
						Todos esses projetos foram desenvolvidos pensando em ampliar
						conhecimentos para tê-los como portfólio.
					</p>
				</div>
				<div className='w-full h-px bg-zinc-800' />

				<div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
					<Card>
						<a href={`${principal.html_url}`}>
							<article className='relative w-full h-full p-4 md:p-8'>
								<div className='flex items-center justify-between gap-2'>
									<div className='text-xs text-zinc-100'>
										{principal.updated_at ? (
											<time
												dateTime={new Date(principal.updated_at).toISOString()}
											>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: 'medium',
												}).format(new Date(principal.updated_at))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className='flex items-center gap-1 text-xs text-zinc-500'>
										<Eye className='w-4 h-4' /> 0
									</span>
								</div>

								<h2
									id='featured-post'
									className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
								>
									{(NAMES as any)[principal.name]}
								</h2>
								<p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
									{principal.description}
								</p>
								<div className='absolute bottom-4 md:bottom-8'>
									<p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
										Read more <span aria-hidden='true'>&rarr;</span>
									</p>
								</div>
							</article>
						</a>
					</Card>

					<div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '>
						{[top2, top3].map((project) => (
							<Card key={project.id}>
								<Article project={project} views={0} />
							</Card>
						))}
					</div>
				</div>
				<div className='hidden w-full h-px md:block bg-zinc-800' />

				<div className='grid gap-4 mx-auto lg:mx-0 md:grid-cols-1'>
					<div className='grid grid-cols-3 gap-4'>
						{items.map((repo) => (
							<Card key={repo.id}>
								<Article project={repo} views={0} />
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
