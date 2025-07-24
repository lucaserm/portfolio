import { getGitHubRepos } from '@/lib/github'
import { NextResponse } from 'next/server'

export async function GET() {
  const repos = await getGitHubRepos()
  return NextResponse.json(repos)
}