import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Building2, Headphones, Share2, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Découvrez nos services: création de sites web professionnels, solutions digitales pour entreprises, support informatique, présence digitale et solutions technologiques sur mesure.",
}

const services = [
  {
    title: "Création de Sites Web Professionnels",
    description: "Nous concevons des sites web modernes et performants adaptés à tous les appareils. Chaque site reflète votre identité et atteint vos objectifs commerciaux.",
    icon: Globe,
    features: [
      "Design moderne et responsive",
      "Optimisation SEO",
      "Performance et rapidité",
      "Interface intuitive",
    ],
  },
  {
    title: "Solutions Digitales pour Entreprises",
    description: "Nous développons des outils numériques personnalisés pour optimiser vos processus internes et améliorer votre productivité.",
    icon: Building2,
    features: [
      "Applications web sur mesure",
      "Systèmes de gestion",
      "Automatisation des processus",
      "Intégrations tierces",
    ],
  },
  {
    title: "Support et Assistance Informatique",
    description: "Notre équipe vous aide à résoudre vos problèmes techniques et à maintenir vos systèmes informatiques avec un support fiable et réactif.",
    icon: Headphones,
    features: [
      "Support technique réactif",
      "Maintenance préventive",
      "Dépannage à distance",
      "Conseil et formation",
    ],
  },
  {
    title: "Présence Digitale & Stratégie",
    description: "Nous vous aidons à développer et optimiser votre présence en ligne pour atteindre efficacement votre audience cible.",
    icon: Share2,
    features: [
      "Stratégie de contenu",
      "Gestion réseaux sociaux",
      "Identité visuelle digitale",
      "Analyses et rapports",
    ],
  },
  {
    title: "Solutions Technologiques Sur Mesure",
    description: "Pour des besoins spécifiques, nous concevons des solutions technologiques adaptées à vos exigences particulières.",
    icon: Wrench,
    features: [
      "Développement personnalisé",
      "Architecture technique",
      "Migration de systèmes",
      "Conseil technologique",
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
            NOS SERVICES
          </h1>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-up-delay-1 text-balance">
            Solutions numériques de pointe conçues pour la performance, la sécurité et la croissance.
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
                  <Link href="/contact">Demander infos</Link>
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
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons accompagner votre transformation digitale.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 btn-glow"
          >
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
