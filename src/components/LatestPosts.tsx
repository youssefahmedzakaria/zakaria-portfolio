
import { useState, useEffect } from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data aligned with your professional experience and projects
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Banking Systems with Java Spring Boot",
    excerpt: "Explore the architecture and design patterns behind modern banking systems and how Java Spring Boot can be leveraged to create secure, scalable financial platforms.",
    publishedAt: "2024-05-10",
    tags: ["Java", "Spring Boot", "Banking", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1972&auto=format&fit=crop",
    slug: "building-scalable-banking-systems"
  },
  {
    id: "2",
    title: "Optimizing PostgreSQL for High-Transaction Banking Applications",
    excerpt: "How I achieved a 70% reduction in customer balance retrieval time at Kaf Insurance by implementing advanced PostgreSQL indexing and caching strategies.",
    publishedAt: "2024-04-18",
    tags: ["PostgreSQL", "Performance", "Banking", "Caching"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    slug: "postgresql-optimization-banking"
  },
  {
    id: "3",
    title: "Implementing Secure Authentication in Spring Boot Applications",
    excerpt: "A step-by-step guide to implementing JWT token authentication in Spring Boot applications with best practices for token management and security.",
    publishedAt: "2024-03-25",
    tags: ["Spring Boot", "Security", "JWT", "Authentication"],
    coverImage: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=2052&auto=format&fit=crop",
    slug: "jwt-authentication-spring-boot"
  }
];

const LatestPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const loadPosts = async () => {
      // In the future, this will fetch from Supabase
      setTimeout(() => {
        setPosts(mockPosts);
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
          <Link to="/blog">View All Posts</Link>
        </Button>
      </div>
    </div>
  );
};

export default LatestPosts;
