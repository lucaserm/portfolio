import { NAMES } from '@/constants/names';
import GitHubRepository from '@/types/IGithub';
import { Eye } from 'lucide-react';

type Props = {
  project: GitHubRepository;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  return (
    <a href={`${project.html_url}`}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="drop-shadow-orange text-xs text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:text-white">
            {project.updated_at ? (
              <time dateTime={new Date(project.updated_at).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(project.updated_at)
                )}
              </time>
            ) : (
              <span>Em breve</span>
            )}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Eye className="h-4 w-4" />{' '}
            {Intl.NumberFormat('en-US', { notation: 'compact' }).format(Math.round(views))}
          </span>
        </div>
        <h2 className="font-display z-20 text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl">
          {NAMES[project.name] ?? project.name}
        </h2>
        <p className="z-20 mt-4 text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
          {project.description ?? '- Em Breve -'}
        </p>
      </article>
    </a>
  );
};
