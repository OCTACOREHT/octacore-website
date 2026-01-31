import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Building2, Headphones, Share2, Wrench } from "lucide-react"

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] to-[#03011E]" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4 sm:mb-6 animate-fade-up">
            OUR SERVICES
          </h1>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-up-delay-1 text-balance">
            Cutting-edge digital solutions designed for performance, security and growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#03011E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-[#0a0a2e] border border-[#2382FF]/20 rounded-xl p-6 sm:p-8 hover:border-[#2382FF]/50 transition-all duration-300 flex flex-col"
              >
                {/* Icon - Core Electric Blue */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg sm:text-xl text-white mb-3 sm:mb-4 uppercase">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-5 sm:mb-6 flex-grow text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5 sm:mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0a0a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-4 sm:mb-6">
            Ready to start your project?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us to discuss your needs and discover how we can support your digital transformation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 btn-glow"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
