import { Share2, Link2, Twitter, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareProps {
  title: string;
  url?: string;
  className?: string;
}

const ShareButtons = ({ title, url, className = "" }: ShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pageUrl = url || window.location.href;
  
  const shareLinks = [
    {
      name: "Copy Link",
      icon: <Link2 className="h-4 w-4 mr-2" />,
      action: () => {
        navigator.clipboard.writeText(pageUrl);
        toast.success("Link copied to clipboard!");
        setIsOpen(false);
      }
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4 mr-2" />,
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(pageUrl)}`, "_blank");
      }
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4 mr-2" />,
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, "_blank");
      }
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4 mr-2" />,
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`, "_blank");
      }
    }
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-2 rounded-full ${className}`}
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="space-y-1">
          {shareLinks.map((item) => (
            <Button 
              key={item.name}
              variant="ghost" 
              className="w-full justify-start text-sm"
              onClick={item.action}
            >
              {item.icon}
              {item.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButtons;
