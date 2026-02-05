'use client';

import { ExternalLink, GitFork, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NAMES } from '@/constants/names';
import type { ProcessedRepo } from '@/lib/github';

export default function Repositories() {
  const [repos, setRepos] = useState<ProcessedRepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch('api/github');
      const data = await res.json();
      setRepos(data);
    }

    fetchRepos();
  }, []);
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-12">
        <h2 className="mb-12 text-4xl font-bold">GitHub Repositories</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="group bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold transition-colors group-hover:text-black/70">
                      {NAMES[repo.name] ?? repo.displayName}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 line-clamp-3 text-sm">
                      {repo.description || 'No description available'}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazersCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forksCount}</span>
                    </div>
                  </div>

                  {repo.language && (
                    <Badge variant="secondary" className="text-xs">
                      {repo.language}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <a href={repo.htmlUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  {repo.homepageUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
