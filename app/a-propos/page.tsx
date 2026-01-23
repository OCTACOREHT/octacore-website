import type { Metadata } from "next"
import Image from "next/image"
import { Lightbulb, Target, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos",
  description: "Octacore est une entreprise technologique spécialisée dans la conception, la sécurisation et l'optimisation de solutions numériques intelligentes. Port-au-Prince, Haïti.",
}

const values = [
  {
    title: "Innovation",
    description: "Nous combinons innovation et précision pour offrir des solutions de pointe.",
    icon: Lightbulb,
  },
  {
    title: "Précision",
    description: "Chaque projet est développé avec rigueur et attention aux détails.",
    icon: Target,
  },
  {
    title: "Sécurité",
    description: "La protection des données est au coeur de tout ce que nous construisons.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "Une approche centrée sur l'humain guide nos solutions numériques.",
    icon: Users,
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Blue Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] to-[#03011E]" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4 sm:mb-6 animate-fade-up">
            À PROPOS D&apos;OCTACORE
          </h1>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-up-delay-1">
            Smart solutions. Real impact.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#03011E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-6">
                Qui sommes-nous
              </h2>
              <div className="space-y-5 sm:space-y-6 text-white/80 text-base sm:text-lg leading-relaxed">
                <p>
                  Octacore est une entreprise technologique spécialisée dans la conception, la sécurisation et l&apos;optimisation de solutions numériques intelligentes. Notre marque combine innovation, précision et une approche centrée sur l&apos;humain pour aider les organisations à réussir leur transformation digitale et à atteindre un impact réel et mesurable.
                </p>
                <p>
                  Octacore fournit des systèmes numériques de pointe conçus pour la performance, la sécurité et la croissance.
                </p>
                <p className="text-white/60 text-sm sm:text-base">
                  Basé à Port-au-Prince, Haïti — Opérant localement et internationalement.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-square max-w-xs sm:max-w-md mx-auto relative">
                <div className="absolute inset-0 octagon-pattern rounded-2xl opacity-50" />
                <div className="absolute inset-4 bg-[#0a0a2e]/80 rounded-xl border border-[#2382FF]/20 flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0a0a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-4">
              Notre approche
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Les valeurs qui guident chacun de nos projets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#03011E] border border-[#2382FF]/20 rounded-xl p-5 sm:p-6 text-center hover:border-[#2382FF]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3 uppercase">
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
