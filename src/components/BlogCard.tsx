
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  publishedAt: string;
  tags: string[];
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <Card className={`h-full overflow-hidden transform transition-all duration-300 hover:shadow-md ${featured ? 'border-primary/20' : ''}`}>
        {post.coverImage && (
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <div className="text-sm text-muted-foreground mb-1">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </div>
          <h3 className={`font-semibold ${featured ? 'text-2xl' : 'text-xl'} line-clamp-2`}>
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
