'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 ${
          isIntersecting ? 'border-transparent bg-zinc-900/0' : 'border-zinc-800 bg-zinc-900/500'
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <Link href="/projects" className="text-zinc-400 duration-200 hover:text-zinc-100">
              Projetos
            </Link>
            <Link href="/online" className="text-zinc-400 duration-200 hover:text-zinc-100">
              Online
            </Link>
            <Link href="/contact" className="text-zinc-400 duration-200 hover:text-zinc-100">
              Contato
            </Link>
          </div>

          <Link href="/" className="text-zinc-300 duration-200 hover:text-zinc-100">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
