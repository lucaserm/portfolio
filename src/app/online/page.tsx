import { Card } from '@/components/card';
import { projects } from '@/constants/projects';

export default function OnlinePage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto my-16 grid w-full grid-cols-2 gap-8 sm:grid-cols-2 lg:gap-16">
        {projects.map(({ href, handle, label }) => (
          <Card key={href}>
            <a
              href={href}
              target="_blank"
              className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16 md:py-24 lg:pb-48"
            >
              <span
                className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <div className="z-10 flex flex-col items-center">
                <span className="font-display text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-3xl">
                  {handle}
                </span>
                <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                  {label}
                </span>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
