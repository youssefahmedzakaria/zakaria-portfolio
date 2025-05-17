import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import BlogCard, { BlogPost } from "@/components/BlogCard";

// Project data aligned with your resume and professional experience
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
  },
  {
    id: "4",
    title: "Data Operations Automation at Kaf Insurance",
    excerpt: "How I developed Python-based solutions using Django and PostgreSQL to streamline data operations and improve efficiency at Kaf Insurance.",
    publishedAt: "2025-04-15",
    tags: ["Python", "Django", "PostgreSQL", "Automation"],
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop",
    slug: "kaf-insurance-data-operations"
  },
  {
    id: "5",
    title: "Database Performance Optimization",
    excerpt: "How I achieved a 70% reduction in customer balance retrieval time at Kaf Insurance by implementing advanced PostgreSQL indexing and caching strategies.",
    publishedAt: "2025-05-02",
    tags: ["PostgreSQL", "Performance", "Caching", "Optimization"],
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
    slug: "database-performance-optimization"
  }
];

const allTags = Array.from(
  new Set(projectPosts.flatMap(post => post.tags))
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
      setTimeout(() => {
        setPosts(projectPosts);
        setFilteredPosts(projectPosts);
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
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">Filter by Technologies:</h3>
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
          
          {/* Project Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
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
