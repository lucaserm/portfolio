'use client';
import { Card } from '@/components/card';
import { socials } from '@/constants/socials';
import Link from 'next/link';

export default function Example() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto my-16 grid w-full grid-cols-2 gap-8 sm:grid-cols-2 lg:gap-16">
        {socials.map(({ href, icon, handle, label }) => (
          <Card key={href}>
            <Link
              href={href}
              target="_blank"
              className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16 md:py-24 lg:pb-48"
            >
              <span
                className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                {icon}
              </span>{' '}
              <div className="z-10 flex flex-col items-center">
                <span className="font-display text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-3xl">
                  {handle}
                </span>
                <span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
                  {label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
