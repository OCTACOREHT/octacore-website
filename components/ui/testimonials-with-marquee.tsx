import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-slate-50 text-foreground",
      "py-20 overflow-hidden relative border-y border-border",
      className
    )}>
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="mx-auto flex flex-col items-center gap-4 text-center sm:gap-12 relative z-10">
        <div className="flex flex-col items-center gap-4 px-4">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl uppercase text-foreground mb-2">
            {title}
          </h2>
          <p className="text-foreground/70 max-w-2xl font-medium sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 gap-6">
          {/* Row 1: Left */}
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row w-full [--duration:50s] transform-gpu">
            {[...Array(6)].map((_, setIndex) => (
              <div key={`r1-set-${setIndex}`} className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`r1-${setIndex}-${i}`} {...testimonial} />
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Right (Reverse) */}
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row w-full [--duration:60s] transform-gpu">
            {[...Array(6)].map((_, setIndex) => (
              <div key={`r2-set-${setIndex}`} className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee [animation-direction:reverse] flex-row group-hover:[animation-play-state:paused]">
                {[...testimonials].reverse().map((testimonial, i) => (
                  <TestimonialCard key={`r2-${setIndex}-${i}`} {...testimonial} />
                ))}
              </div>
            ))}
          </div>

          {/* Row 3: Left (Offset) */}
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row w-full [--duration:55s] transform-gpu">
            {[...Array(6)].map((_, setIndex) => (
              <div key={`r3-set-${setIndex}`} className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...testimonials.slice(3), ...testimonials.slice(0, 3)].map((testimonial, i) => (
                  <TestimonialCard key={`r3-${setIndex}-${i}`} {...testimonial} />
                ))}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-slate-50 to-transparent md:block z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-slate-50 to-transparent md:block z-20" />
        </div>
      </div>
    </section>
  )
}
