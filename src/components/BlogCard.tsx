import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Tag } from "lucide-react";

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
    <Link to={`/blog/${post.slug}`} className="block h-full group">
      <Card className={`h-full overflow-hidden card-hover ${featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : 'card-glass'}`}>
        {post.coverImage && (
          <div className="aspect-[16/9] overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </div>
          <h3 className={`font-bold leading-tight ${featured ? 'text-2xl' : 'text-xl'} line-clamp-2 group-hover:text-primary transition-colors duration-300`}>
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="line-clamp-3 text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="w-full">
            <div className="flex items-center mb-3">
              <Tag className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
              Read more
              <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
