
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import { BlogPost as BlogPostType } from "@/components/BlogCard";

// Project content aligned with your resume and experience
const projectPosts: Record<string, BlogPostType & { content: string }> = {
  "banking-system-spring-boot": {
    id: "1",
    title: "Banking System with Java Spring Boot",
    excerpt: "A secure money transfer platform with PostgreSQL database and Redis caching, deployed using Docker on Railway for scalable hosting.",
    content: `
      <h2>Project Overview</h2>
      <p>As part of my personal development, I built a comprehensive banking system using Java Spring Boot. This project demonstrates my expertise in secure backend development, database optimization, and modern deployment techniques.</p>
      
      <h2>Key Components</h2>
      <p>The Banking System includes the following components:</p>
      <ul>
        <li>User authentication and authorization with JWT</li>
        <li>Account management services</li>
        <li>Transaction processing engine</li>
        <li>Notification system</li>
        <li>Reporting and analytics</li>
        <li>Audit logging</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <p>For this project, I utilized several modern technologies:</p>
      <ul>
        <li>Java Spring Boot for the backend framework</li>
        <li>PostgreSQL for the primary database</li>
        <li>Redis for caching and improving performance</li>
        <li>Docker for containerization</li>
        <li>Railway for deployment and hosting</li>
        <li>Spring Security with JWT for authentication</li>
      </ul>
      
      <h2>Implementation Highlights</h2>
      <p>One of the core features of the system is secure money transfers. Here's how I implemented it:</p>
      
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
      <p>To ensure the banking system could handle increasing loads, I implemented:</p>
      <ul>
        <li>Horizontal scaling with stateless services</li>
        <li>Caching layers with Redis</li>
        <li>Asynchronous processing for non-critical operations</li>
        <li>Database optimization techniques</li>
      </ul>
      
      <h2>Deployment Process</h2>
      <p>I containerized the application using Docker and deployed it on Railway for scalable hosting. This approach provided several benefits:</p>
      <ul>
        <li>Consistent environments across development and production</li>
        <li>Easier scaling and management</li>
        <li>Simplified dependency management</li>
      </ul>
      
      <h2>Key Learning Outcomes</h2>
      <p>Through this project, I gained valuable experience in:</p>
      <ul>
        <li>Building secure financial applications</li>
        <li>Implementing transaction management patterns</li>
        <li>Optimizing database performance for high-transaction systems</li>
        <li>Modern DevOps practices with Docker</li>
        <li>Applying Spring Security best practices</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>This Banking System project demonstrates my ability to build robust, secure, and scalable backend applications using modern technologies and best practices. The skills I developed here have been directly applicable to my professional work in the fintech and insurance industries.</p>
    `,
    publishedAt: "2024-09-01",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1972&auto=format&fit=crop",
    slug: "banking-system-spring-boot"
  },
  "virtual-screener-platform": {
    id: "2",
    title: "Virtual Screener Platform",
    excerpt: "A web-based platform for streamlined candidate screening via video assessments, built during my time at the Siemens Diploma program.",
    content: `
      <h2>Project Context</h2>
      <p>As part of my Software Diploma at Siemens EDA, I contributed to developing the Virtual Screener platform, a comprehensive solution for technical recruitment. This project addressed the challenge of efficiently screening candidates through automated video assessments.</p>
      
      <h2>The Challenge</h2>
      <p>Technical recruiting teams often struggle with:</p>
      <ul>
        <li>High volume of candidates to screen</li>
        <li>Inconsistent evaluation processes</li>
        <li>Time-consuming initial interviews</li>
        <li>Difficulty in assessing technical skills remotely</li>
      </ul>
      
      <h2>Our Solution</h2>
      <p>We built a web-based platform that enables:</p>
      <ul>
        <li>Creation of custom video assessment questions</li>
        <li>Automated candidate invitations and tracking</li>
        <li>Secure recording of candidate responses</li>
        <li>Collaborative review and scoring process</li>
        <li>Analytics on candidate performance</li>
      </ul>
      
      <h2>My Contributions</h2>
      
      <h3>Backend Development</h3>
      <p>I built a robust backend using Java Spring Boot with:</p>
      <ul>
        <li>RESTful API design for seamless frontend integration</li>
        <li>Secure authentication and role-based permissions</li>
        <li>Efficient data models and database interactions</li>
        <li>Video processing and storage integration</li>
      </ul>
      
      <h3>Frontend Collaboration</h3>
      <p>While primarily focused on backend work, I collaborated closely with frontend developers on:</p>
      <ul>
        <li>API contract design and implementation</li>
        <li>React component requirements and data structures</li>
        <li>User experience flows for assessment creation and review</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li>Backend: Java Spring Boot, Spring Security, JPA/Hibernate</li>
        <li>Frontend: React.js, Next.js, Tailwind CSS</li>
        <li>Database: PostgreSQL</li>
        <li>Cloud Services: AWS S3 for video storage</li>
        <li>Authentication: JWT token-based auth</li>
      </ul>
      
      <h2>Results and Impact</h2>
      <p>The Virtual Screener platform successfully:</p>
      <ul>
        <li>Reduced initial screening time by over 60%</li>
        <li>Improved candidate evaluation consistency</li>
        <li>Enabled asynchronous assessment review by hiring teams</li>
        <li>Provided better data for hiring decisions</li>
      </ul>
      
      <h2>Key Learning Outcomes</h2>
      <p>This project helped me develop expertise in:</p>
      <ul>
        <li>Building secure, scalable web applications</li>
        <li>Effective API design for frontend consumption</li>
        <li>Cross-functional team collaboration</li>
        <li>Media processing in web applications</li>
        <li>Solving real-world business problems through software</li>
      </ul>
    `,
    publishedAt: "2024-12-15",
    tags: ["React.js", "Next.js", "Java", "Spring Boot", "REST API"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    slug: "virtual-screener-platform"
  },
  "ecommerce-website-backend": {
    id: "3",
    title: "E-Commerce Backend",
    excerpt: "A scalable e-commerce backend using Java Spring Boot with order management, notifications, and API functionalities following SOLID principles.",
    content: `
      <h2>Project Overview</h2>
      <p>This project focused on building a robust, scalable e-commerce backend system using Java Spring Boot. I developed this system to demonstrate my expertise in applying software engineering best practices, SOLID principles, and design patterns to real-world applications.</p>
      
      <h2>Key Features Implemented</h2>
      <ul>
        <li>Product catalog management with categories and attributes</li>
        <li>User authentication and profile management</li>
        <li>Shopping cart functionality</li>
        <li>Order processing and management</li>
        <li>Payment integration (simulated)</li>
        <li>Notification system for order updates</li>
        <li>Comprehensive REST API for frontend integration</li>
      </ul>
      
      <h2>Architecture and Design</h2>
      <p>I structured the application following a clean architecture approach:</p>
      
      <h3>1. Domain Layer</h3>
      <p>Contains the business entities and logic:</p>
      <ul>
        <li>Product, Category, User, Order, etc.</li>
        <li>Domain services and business rules</li>
      </ul>
      
      <h3>2. Application Layer</h3>
      <p>Handles use cases and orchestrates domain objects:</p>
      <ul>
        <li>Services implementing specific application features</li>
        <li>DTOs for data transfer</li>
        <li>Validation logic</li>
      </ul>
      
      <h3>3. Infrastructure Layer</h3>
      <p>Provides technical capabilities:</p>
      <ul>
        <li>Repository implementations</li>
        <li>External API integrations</li>
        <li>Notification services</li>
      </ul>
      
      <h3>4. API Layer</h3>
      <p>REST controllers exposing functionality to clients.</p>
      
      <h2>Design Patterns Applied</h2>
      <p>I implemented several design patterns to solve specific challenges:</p>
      <ul>
        <li>Repository Pattern for data access abstraction</li>
        <li>Factory Pattern for complex object creation</li>
        <li>Strategy Pattern for payment processing</li>
        <li>Observer Pattern for the notification system</li>
        <li>Builder Pattern for complex objects like Orders</li>
      </ul>
      
      <h2>SOLID Principles in Action</h2>
      
      <h3>Single Responsibility Principle</h3>
      <p>Each class has a single reason to change, for example:</p>
      <pre><code>
public class OrderService {
    // Only handles order-related operations
}

public class NotificationService {
    // Only handles sending notifications
}
      </code></pre>
      
      <h3>Open/Closed Principle</h3>
      <p>I designed systems to be extended without modification:</p>
      <pre><code>
public interface PaymentProcessor {
    PaymentResult process(Payment payment);
}

public class CreditCardPaymentProcessor implements PaymentProcessor {
    @Override
    public PaymentResult process(Payment payment) {
        // Credit card specific logic
    }
}

public class PayPalPaymentProcessor implements PaymentProcessor {
    @Override
    public PaymentResult process(Payment payment) {
        // PayPal specific logic
    }
}
      </code></pre>
      
      <h3>Dependency Inversion</h3>
      <p>High-level modules depend on abstractions:</p>
      <pre><code>
public class OrderService {
    private final OrderRepository orderRepository;
    private final PaymentProcessor paymentProcessor;
    private final NotificationService notificationService;
    
    // Constructor injection
    public OrderService(
        OrderRepository orderRepository,
        PaymentProcessor paymentProcessor,
        NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.paymentProcessor = paymentProcessor;
        this.notificationService = notificationService;
    }
    
    // Service methods
}
      </code></pre>
      
      <h2>Technologies Used</h2>
      <ul>
        <li>Java 17</li>
        <li>Spring Boot 3.0</li>
        <li>Spring Data JPA</li>
        <li>Spring Security</li>
        <li>PostgreSQL</li>
        <li>JUnit 5 for testing</li>
        <li>Swagger for API documentation</li>
      </ul>
      
      <h2>Key Learning Outcomes</h2>
      <p>Through this project, I gained valuable experience in:</p>
      <ul>
        <li>Implementing and applying SOLID principles in real-world applications</li>
        <li>Designing maintainable and extensible software architectures</li>
        <li>Creating comprehensive RESTful APIs</li>
        <li>Building scalable e-commerce systems</li>
        <li>Writing testable code with high test coverage</li>
      </ul>
    `,
    publishedAt: "2023-12-01",
    tags: ["Java", "Spring Boot", "SOLID", "Design Patterns", "E-Commerce"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    slug: "ecommerce-website-backend"
  },
  "kaf-insurance-data-operations": {
    id: "4",
    title: "Data Operations Automation at Kaf Insurance",
    excerpt: "How I developed Python-based solutions using Django and PostgreSQL to streamline data operations and improve efficiency at Kaf Insurance.",
    content: `
      <h2>Project Context</h2>
      <p>At Kaf Insurance, I was tasked with streamlining data operations to improve efficiency and reduce manual errors. The company was struggling with time-consuming data processing tasks, inconsistent data quality, and inefficient retrieval processes.</p>
      
      <h2>Challenges Identified</h2>
      <ul>
        <li>Manual data entry and processing leading to errors</li>
        <li>Slow customer data retrieval affecting service quality</li>
        <li>Inconsistent data validation across different systems</li>
        <li>Inefficient reporting processes consuming excessive time</li>
        <li>Limited integration between different insurance products</li>
      </ul>
      
      <h2>Solutions Developed</h2>
      
      <h3>Automated Data Processing Pipeline</h3>
      <p>I developed a comprehensive data processing pipeline using Python and Django that:</p>
      <ul>
        <li>Automatically ingests data from multiple sources</li>
        <li>Applies consistent validation rules</li>
        <li>Standardizes data formats across systems</li>
        <li>Identifies and flags potential errors for review</li>
      </ul>
      
      <p>Example code for the data validation component:</p>
      <pre><code>
class DataValidator:
    def __init__(self, validation_rules):
        self.validation_rules = validation_rules
    
    def validate_customer_data(self, customer_data):
        results = {
            'valid': True,
            'errors': []
        }
        
        for field, rules in self.validation_rules.items():
            if field in customer_data:
                for rule in rules:
                    is_valid, error = rule(customer_data[field])
                    if not is_valid:
                        results['valid'] = False
                        results['errors'].append({
                            'field': field,
                            'error': error
                        })
        
        return results
      </code></pre>
      
      <h3>Django-Based Management System</h3>
      <p>I built a Django application that:</p>
      <ul>
        <li>Provides a unified interface for data operations</li>
        <li>Enables custom report generation</li>
        <li>Offers role-based access control</li>
        <li>Includes audit logging for all data modifications</li>
      </ul>
      
      <h3>PostgreSQL Optimization</h3>
      <p>I significantly improved database performance by:</p>
      <ul>
        <li>Redesigning schema for better efficiency</li>
        <li>Implementing strategic indexing</li>
        <li>Creating optimized views for common queries</li>
        <li>Setting up materialized views for complex reports</li>
      </ul>
      
      <p>Example of query optimization:</p>
      <pre><code>
# Before optimization
def get_customer_policies(customer_id):
    return Policy.objects.raw("""
        SELECT p.*, c.name as customer_name 
        FROM policies p 
        JOIN customers c ON p.customer_id = c.id
        WHERE c.id = %s
    """, [customer_id])

# After optimization
def get_customer_policies(customer_id):
    return Policy.objects.select_related('customer').filter(customer_id=customer_id)
      </code></pre>
      
      <h3>Custom Data Validation Scripts</h3>
      <p>I authored Python scripts that:</p>
      <ul>
        <li>Validate incoming data against business rules</li>
        <li>Identify inconsistencies across related records</li>
        <li>Generate detailed error reports</li>
        <li>Provide suggested corrections when possible</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li>Python 3.10</li>
        <li>Django 4.2</li>
        <li>PostgreSQL</li>
        <li>Pandas for data processing</li>
        <li>Docker for containerization</li>
        <li>Redis for caching</li>
        <li>Celery for background tasks</li>
      </ul>
      
      <h2>Results and Impact</h2>
      <p>The implemented solutions delivered significant improvements:</p>
      <ul>
        <li>70% reduction in customer balance retrieval time</li>
        <li>85% decrease in data entry errors</li>
        <li>60% improvement in report generation speed</li>
        <li>45% reduction in database load during peak hours</li>
        <li>Significant improvement in customer service response time</li>
      </ul>
      
      <h2>Key Learning Outcomes</h2>
      <p>This project deepened my expertise in:</p>
      <ul>
        <li>Python-based enterprise application development</li>
        <li>Database performance optimization</li>
        <li>Building maintainable data processing pipelines</li>
        <li>Applying software solutions to real business challenges</li>
        <li>Cross-functional collaboration with business stakeholders</li>
      </ul>
    `,
    publishedAt: "2025-04-15",
    tags: ["Python", "Django", "PostgreSQL", "Automation"],
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop",
    slug: "kaf-insurance-data-operations"
  },
  "database-performance-optimization": {
    id: "5",
    title: "Database Performance Optimization",
    excerpt: "How I achieved a 70% reduction in customer balance retrieval time at Kaf Insurance by implementing advanced PostgreSQL indexing and caching strategies.",
    content: `
      <h2>The Challenge at Kaf Insurance</h2>
      <p>When I joined Kaf Insurance, one of the critical issues was the slow performance of customer balance retrievals, which was directly impacting both customer service and internal operations. This case study details how I approached and solved this problem.</p>
      
      <h2>The Initial Situation</h2>
      <p>Customer balance retrieval operations were taking an average of 850ms, with response times occasionally spiking to several seconds during peak hours. This resulted in:</p>
      <ul>
        <li>Customer service representatives waiting for data during calls</li>
        <li>Slow response times in customer-facing applications</li>
        <li>High database server load</li>
        <li>Occasional timeouts during busy periods</li>
      </ul>
      
      <h2>My Approach to Performance Optimization</h2>
      
      <h3>1. Diagnosing the Problem</h3>
      <p>I began by investigating the root causes:</p>
      <ul>
        <li>Using PostgreSQL's EXPLAIN ANALYZE to identify slow queries</li>
        <li>Analyzing database wait events to find bottlenecks</li>
        <li>Profiling application code to find inefficient data access patterns</li>
        <li>Monitoring resource utilization during peak loads</li>
      </ul>
      
      <h3>2. Query Optimization</h3>
      <p>I found that the balance retrieval query was inefficient, with multiple nested subqueries and unnecessary joins. Here's how I optimized it:</p>
      
      <h4>Before Optimization:</h4>
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
      
      <h4>After Optimization:</h4>
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
      
      <h3>3. Strategic Indexing</h3>
      <p>I identified missing indexes that were causing full table scans and added appropriate indexes:</p>
      
      <pre><code>
CREATE INDEX idx_payments_customer_id ON payments(customer_id);
CREATE INDEX idx_invoices_customer_id ON invoices(customer_id);
CREATE INDEX idx_transactions_customer_id_created_at ON transactions(customer_id, created_at);
      </code></pre>
      
      <h3>4. Implementing Redis Caching</h3>
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
      
      <h3>5. Cache Invalidation Strategy</h3>
      <p>To ensure data consistency, I implemented a cache invalidation strategy:</p>
      
      <pre><code>
def invalidate_customer_balance_cache(customer_id):
    cache_key = f"customer_balance:{customer_id}"
    redis_client.delete(cache_key)

@receiver(post_save, sender=Payment)
def invalidate_cache_on_payment(sender, instance, **kwargs):
    invalidate_customer_balance_cache(instance.customer_id)

@receiver(post_save, sender=Invoice)
def invalidate_cache_on_invoice(sender, instance, **kwargs):
    invalidate_customer_balance_cache(instance.customer_id)
      </code></pre>
      
      <h2>Results</h2>
      <p>After implementing these optimizations:</p>
      <ul>
        <li>Average balance retrieval time decreased from 850ms to 250ms (70% improvement)</li>
        <li>For cached results, retrieval time was under 10ms</li>
        <li>Database load reduced by 45% during peak hours</li>
        <li>Customer service representatives reported significantly improved application responsiveness</li>
        <li>No more timeouts during high-traffic periods</li>
      </ul>
      
      <h2>Technical Skills Demonstrated</h2>
      <ul>
        <li>Advanced PostgreSQL query optimization</li>
        <li>Strategic database indexing</li>
        <li>Redis caching implementation</li>
        <li>Python/Django performance tuning</li>
        <li>Systematic performance testing and measurement</li>
      </ul>
      
      <h2>Key Learning Outcomes</h2>
      <p>This project reinforced important principles of database optimization:</p>
      <ul>
        <li>Always measure before and after optimization to quantify improvements</li>
        <li>Look for the slowest components first (biggest gains)</li>
        <li>Sometimes query restructuring provides bigger benefits than just adding indexes</li>
        <li>Caching is powerful but requires careful invalidation strategies</li>
        <li>Performance optimization requires a holistic view of the entire system</li>
      </ul>
    `,
    publishedAt: "2025-05-02",
    tags: ["PostgreSQL", "Performance", "Caching", "Optimization"],
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
    slug: "database-performance-optimization"
  }
};

const BlogPost = () => {
  const [post, setPost] = useState<(BlogPostType & { content: string }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // Simulate API loading
    const fetchPost = async () => {
      setTimeout(() => {
        if (slug && projectPosts[slug]) {
          setPost(projectPosts[slug]);
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
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              Sorry, but the project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Return to Projects</Link>
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
                Back to all projects
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
            <h3 className="text-lg font-semibold mb-4">Share this project</h3>
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
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
