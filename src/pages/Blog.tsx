
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import BlogCard, { BlogPost } from "@/components/BlogCard";

// Updated mock data aligned with your professional experience and projects
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
  },
  {
    id: "4",
    title: "Microservices vs Monoliths in Banking Applications",
    excerpt: "A deep dive into the trade-offs between microservices and monolithic architectures, with real-world examples from my experience implementing banking systems.",
    publishedAt: "2024-02-20",
    tags: ["Microservices", "Architecture", "System Design", "Banking"],
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop",
    slug: "microservices-vs-monoliths-banking"
  },
  {
    id: "5",
    title: "Containerizing Spring Boot Applications with Docker",
    excerpt: "Learn how to containerize your Spring Boot applications using Docker for consistent development environments and simplified deployment processes.",
    publishedAt: "2024-01-15",
    tags: ["Docker", "Spring Boot", "DevOps", "Deployment"],
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
    slug: "docker-spring-boot-deployment"
  },
  {
    id: "6",
    title: "Building a Video Assessment Platform for Technical Interviews",
    excerpt: "My experience creating the Virtual Screener platform, a web-based solution for streamlined candidate screening using React.js, Next.js, and Spring Boot.",
    publishedAt: "2023-12-05",
    tags: ["React", "Spring Boot", "Recruitment", "Full Stack"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    slug: "virtual-screener-platform"
  }
];

const allTags = Array.from(
  new Set(mockPosts.flatMap(post => post.tags))
).sort();

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  
  useEffect(() => {
    // Simulate API loading
    const fetchPosts = async () => {
      // In the future, this will fetch from Supabase
      setTimeout(() => {
        setPosts(mockPosts);
        setFilteredPosts(mockPosts);
        setIsLoading(false);
      }, 800);
    };
    
    fetchPosts();
  }, []);
  
  useEffect(() => {
    let result = [...posts];
    
    // Filter by search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        post => post.title.toLowerCase().includes(term) || 
               post.excerpt.toLowerCase().includes(term)
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, selectedTags, posts]);
  
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 w-48 bg-muted animate-pulse rounded mb-8"></div>
            <div className="h-10 w-full bg-muted animate-pulse rounded mb-6"></div>
            <div className="h-8 w-full bg-muted animate-pulse rounded mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">Filter by Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
                {selectedTags.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedTags([])}
                    className="text-xs h-7"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {setSearchTerm(""); setSelectedTags([])}}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
