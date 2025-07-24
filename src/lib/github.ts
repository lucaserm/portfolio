import { z } from "zod"

const GitHubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  homepage: z.preprocess(
    (val) => (val === "" ? null : val),
    z.string().url().nullable()
  ),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  archived: z.boolean(),
  disabled: z.boolean(),
  private: z.boolean(),
})

const GitHubReposArraySchema = z.array(GitHubRepoSchema)

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>

export interface ProcessedRepo {
  id: number
  name: string
  displayName: string
  description: string | null
  htmlUrl: string
  homepageUrl: string | null
  language: string | null
  stargazersCount: number
  forksCount: number
  createdAt: string
  updatedAt: string
  pushedAt: string
}

const PROJECT_NAME_MAPPINGS: Record<string, string> = {
  "my-awesome-project": "Awesome Project",
  "react-todo-app": "React Todo Application",
  "nextjs-blog": "Next.js Blog Platform",
  "portfolio-website": "Portfolio Website",
  "ecommerce-store": "E-Commerce Store",
}

export async function getGitHubRepos(): Promise<ProcessedRepo[]> {
  try {
    const response = await fetch("https://api.github.com/users/lucaserm/repos?sort=updated&per_page=50", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    const validatedRepos = GitHubReposArraySchema.parse(data)

    const publicRepos = validatedRepos.filter((repo) => !repo.private && !repo.archived && !repo.disabled)

    const processedRepos: ProcessedRepo[] = publicRepos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      displayName: PROJECT_NAME_MAPPINGS[repo.name] || formatRepoName(repo.name),
      description: repo.description,
      htmlUrl: repo.html_url,
      homepageUrl: repo.homepage,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      pushedAt: repo.pushed_at,
    }))

    return processedRepos.sort((a, b) => {
      if (b.stargazersCount !== a.stargazersCount) {
        return b.stargazersCount - a.stargazersCount
      }
      return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
    })
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)

    return []
  }
}

function formatRepoName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export async function getGitHubRepo(repoName: string): Promise<ProcessedRepo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/lucaserm/${repoName}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    const validatedRepo = GitHubRepoSchema.parse(data)

    return {
      id: validatedRepo.id,
      name: validatedRepo.name,
      displayName: PROJECT_NAME_MAPPINGS[validatedRepo.name] || formatRepoName(validatedRepo.name),
      description: validatedRepo.description,
      htmlUrl: validatedRepo.html_url,
      homepageUrl: validatedRepo.homepage,
      language: validatedRepo.language,
      stargazersCount: validatedRepo.stargazers_count,
      forksCount: validatedRepo.forks_count,
      createdAt: validatedRepo.created_at,
      updatedAt: validatedRepo.updated_at,
      pushedAt: validatedRepo.pushed_at,
    }
  } catch (error) {
    console.error(`Error fetching repository ${repoName}:`, error)
    return null
  }
}
