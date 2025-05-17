
import { useState, useEffect } from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Temporary mock data until we connect to Supabase
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Banking Systems with Java Spring Boot",
    excerpt: "Explore the architecture and design patterns behind modern banking systems and how Java Spring Boot can be leveraged to create secure, scalable financial platforms.",
    publishedAt: "2024-04-15",
    tags: ["Java", "Spring Boot", "Banking", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1972&auto=format&fit=crop",
    slug: "building-scalable-banking-systems"
  },
  {
    id: "2",
    title: "Microservices vs Monoliths: When to Choose What",
    excerpt: "A deep dive into the trade-offs between microservices and monolithic architectures, with real-world examples from my experience at Kaf Insurance.",
    publishedAt: "2024-03-28",
    tags: ["Microservices", "Architecture", "System Design"],
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop",
    slug: "microservices-vs-monoliths"
  },
  {
    id: "3",
    title: "Python and PostgreSQL: Optimizing Database Performance",
    excerpt: "Learn how I achieved a 70% reduction in customer balance retrieval time by implementing strategic caching and query optimization techniques.",
    publishedAt: "2024-02-12",
    tags: ["Python", "PostgreSQL", "Performance", "Optimization"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    slug: "python-postgresql-optimization"
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
