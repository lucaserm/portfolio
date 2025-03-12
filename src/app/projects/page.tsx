import { Card } from '@/components/card';
import { Navigation } from '@/components/nav';
import { NAMES } from '@/constants/names';
import { GitHubSearchResponse } from '@/types/IGithub';
import axios from 'axios';
import { Eye } from 'lucide-react';
import { Article } from './article';

export const revalidate = 60;
export default async function ProjectsPage() {
  const { data } = await axios.get<GitHubSearchResponse>(
    'https://api.github.com/search/repositories?q=user%3Alucaserm'
  );
  const items = data.items.filter((repo) => repo.name !== 'portfolio');
  const principal = items ? items.find((repo) => repo.name === 'skyblog') : null;
  const top2 = items ? items.find((repo) => repo.name === 'biblioteca-springboot') : null;
  const top3 = items ? items.find((repo) => repo.name === 'sinmos-remastered-react-native') : null;

  if (!items || !principal || !top2 || !top3) return <div>Loading...</div>;
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projetos</h2>
          <p className="mt-4 text-zinc-400">
            Todos esses projetos foram desenvolvidos pensando em ampliar conhecimentos para tê-los
            como portfólio.
          </p>
        </div>
        <div className="h-px w-full bg-zinc-800" />

        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <a href={`${principal.html_url}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {principal.updated_at ? (
                      <time dateTime={new Date(principal.updated_at).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: 'medium',
                        }).format(new Date(principal.updated_at))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="h-4 w-4" />{' '}
                    {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                      Math.round(Math.random() * 100)
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="font-display mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl"
                >
                  {NAMES[principal.name] ?? principal.name}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                  {principal.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </a>
          </Card>

          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              <Card key={project.id}>
                <Article project={project} views={Math.round(Math.random() * 100)} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid gap-4 md:grid-cols-1 lg:mx-0">
          <div className="grid grid-cols-3 gap-4">
            {items.map((repo) => (
              <Card key={repo.id}>
                <Article project={repo} views={Math.random() * 100} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
