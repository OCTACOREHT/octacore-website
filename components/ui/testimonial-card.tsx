import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border border-border/50",
        "bg-background shadow-sm",
        "p-6 text-start relative overflow-hidden",
        "w-[350px] max-w-[350px] shrink-0 transform-gpu",
        className
      )}
    >
      <div className="flex items-center gap-4 relative z-10">
        {author?.avatar && (
          <img 
            src={author.avatar} 
            alt={author?.name} 
            className="h-12 w-auto object-contain max-w-[100px]" 
          />
        )}
        <div className="flex flex-col items-start overflow-hidden">
          <h3 className="text-base font-semibold leading-none text-foreground truncate w-full">
            {author.name}
          </h3>
          <p className="text-sm font-medium text-[#2382FF] mt-1.5 truncate w-full">
            {author.handle}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mt-5 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="w-4 h-4 fill-amber-400 text-amber-500 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" 
          />
        ))}
      </div>
      <p className="mt-5 text-sm text-foreground/80 leading-relaxed font-medium relative z-10">
        "{text}"
      </p>
    </Card>
  )
}
