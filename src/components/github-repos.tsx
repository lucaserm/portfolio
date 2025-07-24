'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, GitFork } from 'lucide-react'
import { NAMES } from '@/constants/names'
import { useEffect, useState } from 'react'

export default function GitHubRepos() {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch('api/github')
      const data = await res.json()
      setRepos(data)
    }

    fetchRepos()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <Card key={repo.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-transparent">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {NAMES[repo.name] ?? repo.displayName}
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-slate-400 line-clamp-3">
                  {repo.description || "No description available"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazersCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
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
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
              {repo.homepageUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
