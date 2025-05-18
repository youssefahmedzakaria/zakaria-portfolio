import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

// Updated mock data with correct GitHub links
const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "MoneyTransfer",
    description: "A secure money transfer platform with PostgreSQL database and Redis caching, deployed using Docker on Railway for scalable hosting.",
    html_url: "https://github.com/youssefahmedzakaria/MoneyTransfer",
    stargazers_count: 2,
    forks_count: 0,
    language: "Java",
    updated_at: "2024-12-05T09:12:45Z"
  },
  {
    id: 2,
    name: "Online-store",
    description: "E-commerce backend API built with Java Spring Boot following SOLID principles and clean architecture patterns",
    html_url: "https://github.com/youssefahmedzakaria/Online-store",
    stargazers_count: 2,
    forks_count: 0,
    language: "Java",
    updated_at: "2024-12-10T18:35:22Z"
  },
  {
    id: 3,
    name: "VS_platform",
    description: "Virtual Screener Platform developed during Siemens Diploma - a web-based solution for candidate assessment (Private Repository)",
    html_url: "#",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2024-09-15T14:27:35Z"
  }
];

const languageColors: Record<string, string> = {
  Java: "bg-orange-600",
  TypeScript: "bg-blue-600",
  JavaScript: "bg-yellow-500",
  Python: "bg-blue-500",
  C: "bg-gray-600",
  "C++": "bg-pink-600",
  Go: "bg-cyan-500",
  Ruby: "bg-red-600",
  PHP: "bg-indigo-500",
  Default: "bg-gray-500"
};

const GitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const fetchRepos = async () => {
      // In the future, this will use the GitHub API
      setTimeout(() => {
        setRepos(mockRepos);
        setIsLoading(false);
      }, 800);
    };
    
    fetchRepos();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
            <CardFooter className="pt-2">
              <Skeleton className="h-5 w-1/3" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {repos.map((repo) => (
        repo.html_url === "#" ? (
          // Non-clickable card for Virtual Screener project
          <Card 
            key={repo.id}
            className="h-full overflow-hidden border-border/50 backdrop-blur-sm bg-background/80"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                <CardTitle className="text-lg font-semibold flex items-center">
                  {repo.name}
                  <Badge variant="outline" className="ml-2 text-xs bg-secondary/50">Private</Badge>
                </CardTitle>
              </div>
              <CardDescription className="flex items-center text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {format(new Date(repo.updated_at), 'MMM d, yyyy')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm line-clamp-2">{repo.description}</p>
            </CardContent>
            <CardFooter className="pt-2 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm">
                  <Star className="h-3.5 w-3.5 mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center text-sm">
                  <GitFork className="h-3.5 w-3.5 mr-1" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
              {repo.language && (
                <Badge variant="secondary" className="text-xs">
                  <span 
                    className={`w-2 h-2 rounded-full mr-1.5 ${languageColors[repo.language] || languageColors.Default}`}
                  ></span>
                  {repo.language}
                </Badge>
              )}
            </CardFooter>
          </Card>
        ) : (
          // Clickable card for public repositories
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors backdrop-blur-sm bg-background/80">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  <CardTitle className="text-lg font-semibold">{repo.name}</CardTitle>
                </div>
                <CardDescription className="flex items-center text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {format(new Date(repo.updated_at), 'MMM d, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm line-clamp-2">{repo.description}</p>
              </CardContent>
              <CardFooter className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm">
                    <Star className="h-3.5 w-3.5 mr-1" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <GitFork className="h-3.5 w-3.5 mr-1" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
                {repo.language && (
                  <Badge variant="secondary" className="text-xs">
                    <span 
                      className={`w-2 h-2 rounded-full mr-1.5 ${languageColors[repo.language] || languageColors.Default}`}
                    ></span>
                    {repo.language}
                  </Badge>
                )}
              </CardFooter>
            </Card>
          </a>
        )
      ))}
    </div>
  );
};

export default GitHubRepos;
