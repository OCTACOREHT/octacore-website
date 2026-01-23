import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Cpu, Headphones } from "lucide-react"

const services = [
  {
    title: "Création de sites web",
    description: "Sites web professionnels et performants adaptés à vos besoins.",
    icon: Globe,
  },
  {
    title: "Solutions digitales",
    description: "Outils numériques pour optimiser votre entreprise.",
    icon: Cpu,
  },
  {
    title: "Support informatique",
    description: "Assistance technique fiable et réactive.",
    icon: Headphones,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Dark Blue */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Dark Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#050520] to-[#03011E]" />
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-bg opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
            <Image 
              src="/logo.png" 
              alt="OCTACORE Logo" 
              width={150} 
              height={150}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
              priority
            />
          </div>

          {/* Title - OCTACORE */}
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-4 animate-fade-up-delay-1">
            OCTACORE
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-6 sm:mb-8 animate-fade-up-delay-2">
            Smart solutions. Real impact.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-up-delay-3 text-pretty px-2">
            Octacore est une entreprise technologique spécialisée dans la conception, la sécurisation et l&apos;optimisation de solutions numériques intelligentes. Nous aidons les organisations à réussir leur transformation digitale et à atteindre un impact réel et mesurable.
          </p>

          {/* CTA Buttons - Core Electric Blue */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up-delay-3 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#0030FF] text-white hover:bg-[#2382FF] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 btn-glow"
            >
              <Link href="/contact">DÉMARRER UN PROJET</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
            >
              <Link href="/services">Nos services</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Teaser - Dark Blue */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#03011E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-4">
              Nos Services
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Solutions numériques de pointe conçues pour la performance, la sécurité et la croissance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-[#0a0a2e] border border-[#2382FF]/20 rounded-xl p-6 sm:p-8 text-center hover:border-[#2382FF]/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#0030FF]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0030FF]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg sm:text-xl text-white mb-3 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#0030FF] text-[#2382FF] hover:bg-[#0030FF]/10 bg-transparent"
            >
              <Link href="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
