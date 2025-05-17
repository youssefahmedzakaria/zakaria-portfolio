
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import Subscribe from "@/components/Subscribe";
import { BlogPost as BlogPostType } from "@/components/BlogCard";

// Temporary mock data until we connect to Supabase
const mockPosts: Record<string, BlogPostType & { content: string }> = {
  "building-scalable-banking-systems": {
    id: "1",
    title: "Building Scalable Banking Systems with Java Spring Boot",
    excerpt: "Explore the architecture and design patterns behind modern banking systems and how Java Spring Boot can be leveraged to create secure, scalable financial platforms.",
    content: `
      <h2>Introduction to Banking System Architecture</h2>
      <p>Modern banking systems require robust, secure, and scalable architectures to handle millions of transactions while maintaining data integrity and security. In this post, I'll share my experience building such systems with Java Spring Boot.</p>
      
      <h2>Key Components of a Banking System</h2>
      <p>A well-designed banking system typically consists of the following components:</p>
      <ul>
        <li>User authentication and authorization</li>
        <li>Account management services</li>
        <li>Transaction processing engine</li>
        <li>Notification system</li>
        <li>Reporting and analytics</li>
        <li>Audit logging</li>
      </ul>
      
      <h2>Spring Boot for Banking Applications</h2>
      <p>Spring Boot provides several advantages for banking applications:</p>
      <ul>
        <li>Robust security features with Spring Security</li>
        <li>Transaction management with @Transactional</li>
        <li>Database integration with Spring Data</li>
        <li>Monitoring with Spring Actuator</li>
        <li>Easy testing with Spring Test</li>
      </ul>
      
      <h2>Implementing Secure Money Transfers</h2>
      <p>One of the most critical aspects of a banking system is secure money transfer. Here's how I implemented it:</p>
      
      <pre><code>
@Service
@Transactional
public class TransferService {
    
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    
    // Constructor injection
    
    public TransferResult executeTransfer(TransferRequest request) {
        // 1. Validate the request
        // 2. Check for sufficient funds
        // 3. Lock the accounts to prevent race conditions
        // 4. Perform the transfer
        // 5. Record the transaction
        // 6. Release the locks
        // 7. Return result
    }
}
      </code></pre>
      
      <h2>Scalability Considerations</h2>
      <p>To ensure our banking system could handle increasing loads, I implemented:</p>
      <ul>
        <li>Horizontal scaling with stateless services</li>
        <li>Caching layers with Redis</li>
        <li>Asynchronous processing for non-critical operations</li>
        <li>Database sharding for large datasets</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable banking systems with Spring Boot requires careful attention to security, transaction management, and performance. By leveraging Spring Boot's features and following best practices, you can create robust systems that meet the strict requirements of the financial industry.</p>
    `,
    publishedAt: "2024-04-15",
    tags: ["Java", "Spring Boot", "Banking", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1972&auto=format&fit=crop",
    slug: "building-scalable-banking-systems"
  },
  "microservices-vs-monoliths": {
    id: "2",
    title: "Microservices vs Monoliths: When to Choose What",
    excerpt: "A deep dive into the trade-offs between microservices and monolithic architectures, with real-world examples from my experience at Kaf Insurance.",
    content: `
      <h2>Understanding Architecture Approaches</h2>
      <p>Choosing between microservices and monolithic architectures is one of the most important decisions when designing a new system. At Kaf Insurance, we faced this decision when rebuilding our core platform.</p>
      
      <h2>Monolithic Architecture: Benefits and Drawbacks</h2>
      <p>A monolithic architecture is simpler to develop, test, and deploy, especially for smaller applications. However, it can become unwieldy as the application grows.</p>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Simpler development experience</li>
        <li>Easier testing</li>
        <li>Straightforward deployment</li>
        <li>Less operational complexity</li>
      </ul>
      
      <h3>Drawbacks:</h3>
      <ul>
        <li>Scaling challenges</li>
        <li>Technology lock-in</li>
        <li>Harder to understand as complexity grows</li>
        <li>Longer build and deployment times</li>
      </ul>
      
      <h2>Microservices Architecture: Benefits and Drawbacks</h2>
      <p>Microservices offer flexibility and scalability but introduce significant complexity in terms of operations, data consistency, and testing.</p>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Independent scaling</li>
        <li>Technology diversity</li>
        <li>Smaller, focused teams</li>
        <li>Fault isolation</li>
      </ul>
      
      <h3>Drawbacks:</h3>
      <ul>
        <li>Operational complexity</li>
        <li>Distributed system challenges</li>
        <li>Data consistency issues</li>
        <li>Testing complexity</li>
      </ul>
      
      <h2>Case Study: Kaf Insurance</h2>
      <p>At Kaf Insurance, we initially built our policy management system as a monolith. As we grew, we encountered several challenges:</p>
      
      <ul>
        <li>Deployment bottlenecks</li>
        <li>Scaling issues during peak periods</li>
        <li>Difficulty integrating new technologies</li>
      </ul>
      
      <p>We decided to gradually migrate to a microservices architecture, starting with extracting the most independent components:</p>
      
      <ol>
        <li>Customer management</li>
        <li>Payment processing</li>
        <li>Document generation</li>
      </ol>
      
      <h2>Decision Framework</h2>
      <p>Based on my experience, here's a framework for deciding between monoliths and microservices:</p>
      
      <p>Choose Monolith when:</p>
      <ul>
        <li>The domain is not well understood</li>
        <li>The team is small</li>
        <li>Time to market is critical</li>
        <li>Operational resources are limited</li>
      </ul>
      
      <p>Choose Microservices when:</p>
      <ul>
        <li>Different components have different scaling needs</li>
        <li>The team is large and distributed</li>
        <li>Different components require different technologies</li>
        <li>Organizational structure supports independent teams</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all answer to the microservices vs monolith question. The right choice depends on your specific context, team, and business requirements. Sometimes, a hybrid approach starting with a modular monolith that can evolve into microservices is the most pragmatic path forward.</p>
    `,
    publishedAt: "2024-03-28",
    tags: ["Microservices", "Architecture", "System Design"],
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop",
    slug: "microservices-vs-monoliths"
  },
  "python-postgresql-optimization": {
    id: "3",
    title: "Python and PostgreSQL: Optimizing Database Performance",
    excerpt: "Learn how I achieved a 70% reduction in customer balance retrieval time by implementing strategic caching and query optimization techniques.",
    content: `
      <h2>The Challenge</h2>
      <p>At Kaf Insurance, we faced a critical performance issue: customer balance retrieval operations were taking too long, especially during peak hours. This was affecting both our customer-facing applications and internal operations.</p>
      
      <h2>Understanding the Problem</h2>
      <p>After analyzing the situation, I identified several issues:</p>
      <ul>
        <li>Inefficient SQL queries with unnecessary joins</li>
        <li>Missing or poorly chosen indexes</li>
        <li>Repeated calculations for frequently accessed data</li>
        <li>No caching strategy</li>
      </ul>
      
      <h2>Step 1: Query Optimization</h2>
      <p>I started by optimizing the SQL queries. Here's an example of how I refactored a particularly problematic query:</p>
      
      <h3>Before:</h3>
      <pre><code>
# Inefficient query
def get_customer_balance(customer_id):
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT c.id, c.name, 
                  (SELECT SUM(amount) FROM payments WHERE customer_id = c.id) as total_paid,
                  (SELECT SUM(amount) FROM invoices WHERE customer_id = c.id) as total_billed
            FROM customers c
            LEFT JOIN accounts a ON c.id = a.customer_id
            LEFT JOIN profiles p ON c.id = p.customer_id
            WHERE c.id = %s
        """, [customer_id])
        return cursor.fetchone()
      </code></pre>
      
      <h3>After:</h3>
      <pre><code>
# Optimized query
def get_customer_balance(customer_id):
    with connection.cursor() as cursor:
        cursor.execute("""
            WITH customer_data AS (
                SELECT id, name FROM customers WHERE id = %s
            ),
            payment_data AS (
                SELECT SUM(amount) as total_paid 
                FROM payments 
                WHERE customer_id = %s
            ),
            invoice_data AS (
                SELECT SUM(amount) as total_billed 
                FROM invoices 
                WHERE customer_id = %s
            )
            SELECT cd.id, cd.name, COALESCE(pd.total_paid, 0), COALESCE(id.total_billed, 0)
            FROM customer_data cd
            CROSS JOIN payment_data pd
            CROSS JOIN invoice_data id
        """, [customer_id, customer_id, customer_id])
        return cursor.fetchone()
      </code></pre>
      
      <h2>Step 2: Adding Proper Indexes</h2>
      <p>I analyzed the query execution plans and added appropriate indexes:</p>
      
      <pre><code>
CREATE INDEX idx_payments_customer_id ON payments(customer_id);
CREATE INDEX idx_invoices_customer_id ON invoices(customer_id);
      </code></pre>
      
      <h2>Step 3: Implementing Redis Caching</h2>
      <p>For frequently accessed customer balances, I implemented a Redis caching layer:</p>
      
      <pre><code>
import redis
import json

redis_client = redis.Redis(host='localhost', port=6379, db=0)
CACHE_TTL = 3600  # 1 hour

def get_customer_balance_with_cache(customer_id):
    cache_key = f"customer_balance:{customer_id}"
    
    # Try to get from cache
    cached_data = redis_client.get(cache_key)
    if cached_data:
        return json.loads(cached_data)
    
    # If not in cache, get from database
    balance_data = get_customer_balance(customer_id)
    
    # Store in cache for future requests
    redis_client.setex(
        cache_key,
        CACHE_TTL,
        json.dumps(balance_data)
    )
    
    return balance_data
      </code></pre>
      
      <h2>Step 4: Invalidation Strategy</h2>
      <p>We needed to ensure cache consistency when balances change:</p>
      
      <pre><code>
def invalidate_customer_balance_cache(customer_id):
    cache_key = f"customer_balance:{customer_id}"
    redis_client.delete(cache_key)
      </code></pre>
      
      <h2>Results</h2>
      <p>After implementing these optimizations:</p>
      <ul>
        <li>Average balance retrieval time decreased from 850ms to 250ms</li>
        <li>For cached results, retrieval time was under 10ms</li>
        <li>Database load reduced by 45% during peak hours</li>
        <li>Customer service representatives reported significantly improved application responsiveness</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Through a combination of query optimization, proper indexing, and strategic caching, we achieved a 70% reduction in customer balance retrieval time. This not only improved the user experience but also reduced our infrastructure costs as we needed fewer resources to handle the same load.</p>
      
      <p>The key takeaway: don't just throw more hardware at performance problems. Often, a careful analysis of your data access patterns and thoughtful optimization can yield dramatic improvements.</p>
    `,
    publishedAt: "2024-02-12",
    tags: ["Python", "PostgreSQL", "Performance", "Optimization"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    slug: "python-postgresql-optimization"
  }
};

const BlogPost = () => {
  const [post, setPost] = useState<(BlogPostType & { content: string }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // Simulate API loading
    const fetchPost = async () => {
      // In the future, this will fetch from Supabase
      setTimeout(() => {
        if (slug && mockPosts[slug]) {
          setPost(mockPosts[slug]);
        }
        setIsLoading(false);
      }, 800);
    };
    
    fetchPost();
  }, [slug]);
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-48 bg-muted animate-pulse rounded mb-4"></div>
            <div className="h-12 w-full bg-muted animate-pulse rounded mb-6"></div>
            <div className="h-6 w-1/3 bg-muted animate-pulse rounded mb-6"></div>
            <div className="w-full h-80 bg-muted animate-pulse rounded-md mb-8"></div>
            
            <div className="space-y-4 mb-8">
              <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded"></div>
              <div className="h-8 w-full bg-muted animate-pulse rounded mt-8"></div>
              <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              Sorry, but the blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to all posts
              </Link>
            </Button>
          </div>
          
          {/* Article header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </time>
            </div>
            
            {post.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
          
          {/* Article content */}
          <article className="prose prose-slate max-w-none dark:prose-invert mb-12 blog-content">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          <Separator className="my-8" />
          
          {/* Share section */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Subscribe section */}
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
