import type { Metadata } from "next"
import Image from "next/image"
import { Lightbulb, Target, Shield, Users } from "lucide-react"
import { Wordmark } from "@/components/logotype"
import { AnimatedGroup, AnimatedItem } from "@/components/ui/animated-group"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { AnimatedText } from "@/components/ui/animated-text"

export const metadata: Metadata = {
  title: "About",
  description: "Octacore is a technology company specializing in the design, security and optimization of intelligent digital solutions. Port-au-Prince, Haiti.",
}

const values = [
  {
    title: "Innovation",
    description: "We combine innovation and precision to offer cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Precision",
    description: "Each project is developed with rigor and attention to detail.",
    icon: Target,
  },
  {
    title: "Security",
    description: "Data protection is at the heart of everything we build.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "A human-centered approach guides our digital solutions.",
    icon: Users,
  },
]

export default function AProposPage() {
  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 circuit-bg opacity-30" />
        
        <AnimatedGroup showBlueEllipse={false}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4">
          <AnimatedItem animationNum={0} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/80 text-[11px] tracking-[0.3em] uppercase">
            <Image src="/logo.png" alt="OCTACORE" width={24} height={24} className="h-6 w-6" priority />
            <span>Technology Partner</span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-foreground animate-fade-up">
            ABOUT
          </h1>
          <div className="animate-fade-up-delay-1">
            <Wordmark size="md" className="mx-auto h-auto w-auto" />
          </div>
          <p className="text-lg sm:text-xl text-foreground/80 animate-fade-up-delay-2">
            Smart solutions. Real impact.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background overflow-hidden relative">
        <AnimatedGroup showBlueEllipse={true} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <AnimatedTitle as="h2" className="text-2xl sm:text-3xl md:text-4xl uppercase text-foreground mb-6">
                Who we are
              </AnimatedTitle>
              <div className="space-y-5 sm:space-y-6 text-foreground/80 text-base sm:text-lg leading-relaxed">
                <AnimatedText animationNum={0} as="p">
                  Octacore is a technology company specializing in the design, security and optimization of intelligent digital solutions. Our brand combines innovation, precision and a human-centered approach to help organizations succeed in their digital transformation and achieve real and measurable impact.
                </AnimatedText>
                <AnimatedText animationNum={1} as="p">
                  Octacore provides cutting-edge digital systems designed for performance, security and growth.
                </AnimatedText>
                <AnimatedText animationNum={2} as="p" className="text-foreground/60 text-sm sm:text-base">
                  Based in Port-au-Prince, Haiti — Operating locally and internationally.
                </AnimatedText>
              </div>
            </div>

            {/* Visual Element */}
            <AnimatedItem animationNum={3} className="relative order-first lg:order-last">
              <div className="aspect-square max-w-xs sm:max-w-md mx-auto relative">
                <div className="absolute inset-0 octagon-pattern rounded-2xl opacity-50" />
                <div className="absolute inset-4 bg-background/80 rounded-xl border border-[#2382FF]/20 flex items-center justify-center">
                  <Image 
                    src="/logo.png" 
                    alt="OCTACORE Logo" 
                    width={160} 
                    height={160}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  />
                </div>
                {/* Blue Glow effects */}
                <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-[#0030FF]/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-[#2382FF]/20 rounded-full blur-2xl" />
              </div>
            </AnimatedItem>
          </div>
        </AnimatedGroup>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background overflow-hidden relative">
        <AnimatedGroup showBlueEllipse={false} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedTitle as="h2" className="text-2xl sm:text-3xl md:text-4xl uppercase text-foreground mb-4">
              Our approach
            </AnimatedTitle>
            <AnimatedText animationNum={0} as="p" className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
              The values that guide each of our projects
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <AnimatedItem animationNum={1 + index}
                key={value.title}
                className="bg-background border border-[#2382FF]/20 rounded-xl p-5 sm:p-6 text-center hover:border-[#2382FF]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3 uppercase">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedGroup>
      </section>
    </>
  )
}
