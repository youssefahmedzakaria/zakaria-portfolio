import { useState, useEffect } from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Projects data aligned with your resume
const projectPosts: BlogPost[] = [
  {
    id: "1",
    title: "Banking System with Java Spring Boot",
    excerpt: "A secure money transfer platform with PostgreSQL database and Redis caching, deployed using Docker on Railway for scalable hosting.",
    publishedAt: "2024-09-01",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1972&auto=format&fit=crop",
    slug: "banking-system-spring-boot"
  },
  {
    id: "2",
    title: "Virtual Screener Platform",
    excerpt: "A web-based platform for streamlined candidate screening via video assessments, built during my time at the Siemens Diploma program.",
    publishedAt: "2024-12-15",
    tags: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    slug: "virtual-screener-platform"
  },
  {
    id: "3",
    title: "E-Commerce Backend",
    excerpt: "A scalable e-commerce backend using Java Spring Boot with order management, notifications, and API functionalities following SOLID principles.",
    publishedAt: "2023-12-01",
    tags: ["Java", "Spring Boot", "SOLID", "Design Patterns", "E-Commerce"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    slug: "ecommerce-website-backend"
  }
];

const LatestPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const loadPosts = async () => {
      setTimeout(() => {
        setPosts(projectPosts);
        setIsLoading(false);
      }, 500);
    };
    
    loadPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="w-full h-48 bg-muted animate-pulse rounded-md"></div>
            <div className="h-4 bg-muted animate-pulse rounded"></div>
            <div className="h-8 bg-muted animate-pulse rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted animate-pulse rounded"></div>
              <div className="h-4 bg-muted animate-pulse rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link to="/blog">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default LatestPosts;
