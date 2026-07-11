import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/logotype"
import { Globe, Building2, Headphones, Share2, Wrench, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { RiSparklingLine, RiStackLine, RiCloudLine, RiHeadphoneLine } from "react-icons/ri"
import { AnimatedGroup, AnimatedItem } from "@/components/ui/animated-group"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { AnimatedText } from "@/components/ui/animated-text"

export const metadata: Metadata = {
  title: "Services",
  description: "Discover our services: creation of professional websites, digital solutions for businesses, IT support, digital presence and custom technological solutions.",
}

const services = [
  {
    title: "Professional Website Creation",
    description: "We design modern and high-performance websites adapted to all devices. Each site reflects your identity and achieves your business goals.",
    icon: Globe,
    features: [
      "Modern and responsive design",
      "SEO optimization",
      "Performance and speed",
      "Intuitive interface",
    ],
  },
  {
    title: "Digital Solutions for Businesses",
    description: "We develop customized digital tools to optimize your internal processes and improve your productivity.",
    icon: Building2,
    features: [
      "Custom web applications",
      "Management systems",
      "Process automation",
      "Third-party integrations",
    ],
  },
  {
    title: "IT Support and Assistance",
    description: "Our team helps you solve your technical problems and maintain your computer systems with reliable and responsive support.",
    icon: Headphones,
    features: [
      "Responsive technical support",
      "Preventive maintenance",
      "Remote troubleshooting",
      "Advice and training",
    ],
  },
  {
    title: "Digital Presence & Strategy",
    description: "We help you develop and optimize your online presence to effectively reach your target audience.",
    icon: Share2,
    features: [
      "Content strategy",
      "Social media management",
      "Digital visual identity",
      "Analytics and reports",
    ],
  },
  {
    title: "Custom Technological Solutions",
    description: "For specific needs, we design technological solutions adapted to your particular requirements.",
    icon: Wrench,
    features: [
      "Custom development",
      "Technical architecture",
      "System migration",
      "Technology consulting",
    ],
  },
]

const solutionAreas = [
  {
    title: "Web Sites and Portals",
    description: "Custom experiences, fast and easy to evolve.",
    bullets: ["Optimized Core Web Vitals", "Measurable customer journeys", "Accessibility and technical SEO"],
    icon: RiSparklingLine,
  },
  {
    title: "Integration & Automation",
    description: "APIs, business interconnections and smooth workflows.",
    bullets: ["Service-oriented architecture", "Automated and alerted workflows", "Real-time monitoring"],
    icon: RiStackLine,
  },
  {
    title: "Cloud & Data",
    description: "Modular infrastructure, protected and useful data.",
    bullets: [
      "Secure and observable environments",
      "Backups, DRP and restoration tests",
      "Decision dashboards",
    ],
    icon: RiCloudLine,
  },
  {
    title: "Support & Cybersecurity",
    description: "On-call, hardening and user support.",
    bullets: [
      "24/7 supervision and documented remediation",
      "Regular security tests",
      "Runbooks and team training",
    ],
    icon: RiHeadphoneLine,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <AnimatedGroup showBlueEllipse={false}>
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedTitle as="h1" className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-foreground mb-4 sm:mb-6">
            OUR SERVICES
          </AnimatedTitle>
          <AnimatedText animationNum={0} as="p" className="text-lg sm:text-xl text-foreground/80 text-balance mx-auto">
            Cutting-edge digital solutions designed for performance, security and growth.
          </AnimatedText>
        </div>
        </AnimatedGroup>
      </section>

      <section className="py-20 sm:py-24 bg-background overflow-hidden relative">
        <AnimatedGroup showBlueEllipse={true} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <AnimatedItem animationNum={0} as="p" className="text-foreground/60 uppercase tracking-[0.2em] text-xs">Key Solutions</AnimatedItem>
            <AnimatedTitle as="h2" className="text-3xl sm:text-4xl text-foreground leading-tight">
              Digital journeys that make people want to work with you.
            </AnimatedTitle>
            <AnimatedText animationNum={1} as="p" className="text-foreground/70 text-lg max-w-3xl">
              Each solution is designed with a clear editorial line, measured performance and integrated security,
              to inspire confidence in your users and partners.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutionAreas.map((area, index) => (
              <AnimatedItem animationNum={2 + index} key={area.title} className="rounded-2xl border border-[#2382FF]/25 bg-background/80 p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <area.icon className="h-10 w-10 text-[#2382FF]" />
                    <div>
                      <Wordmark size="xs" className="h-5 w-auto" />
                      <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center text-foreground/70">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  {area.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#2382FF] mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedGroup>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background overflow-hidden relative">
        <AnimatedGroup showBlueEllipse={false} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <AnimatedItem animationNum={index}
                key={service.title}
                className="group bg-background border border-[#2382FF]/20 rounded-xl p-6 sm:p-8 hover:border-[#2382FF]/50 transition-all duration-300 flex flex-col"
              >
                {/* Icon - Core Electric Blue */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg sm:text-xl text-foreground mb-3 sm:mb-4 uppercase">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed mb-5 sm:mb-6 flex-grow text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5 sm:mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0030FF] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-[#0030FF]/10 text-[#2382FF] hover:bg-[#0030FF]/20 border border-[#0030FF]/30"
                >
                  <Link href="/contact">Request info</Link>
                </Button>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedGroup>
      </section>
    </>
  )
}
