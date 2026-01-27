import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/logotype"
import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Globe,
  Headphones,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const metrics = [
  { label: "Disponibilité cible", value: "99,9%", detail: "Architecture surveillée et redondance intégrée." },
  { label: "Réponse prioritaire", value: "< 1h", detail: "Support opérationnel et équipes mobilisables 24/7." },
  { label: "Gouvernance", value: "Sprints courts", detail: "Ateliers, tableaux de bord et décisions rapides." },
]

const pillars = [
  {
    title: "Plateformes & expériences",
    description: "Sites, portails et interfaces qui renforcent la confiance et la conversion.",
    icon: Globe,
  },
  {
    title: "Cloud, data & automatisation",
    description: "APIs, intégrations métiers, pipelines de données fiables et scalables.",
    icon: Cpu,
  },
  {
    title: "Sécurité & continuité",
    description: "Protection des actifs, supervision et plans de reprise pour rester en ligne.",
    icon: ShieldCheck,
  },
]

const solutionAreas = [
  {
    title: "Sites et portails web",
    description: "Expériences sur mesure, rapides et faciles à faire évoluer.",
    bullets: ["Core Web Vitals optimisés", "Parcours client mesurables", "Accessibilité et SEO technique"],
    icon: Sparkles,
  },
  {
    title: "Intégration & automatisation",
    description: "APIs, interconnexions métiers et workflows fluides.",
    bullets: ["Architecture orientée services", "Workflows automatisés et alertés", "Monitoring temps réel"],
    icon: Layers,
  },
  {
    title: "Cloud & données",
    description: "Infrastructure modulable, données protégées et utiles.",
    bullets: [
      "Environnements sécurisés et observables",
      "Sauvegardes, PRA et tests de restauration",
      "Tableaux de bord pour la décision",
    ],
    icon: Cloud,
  },
  {
    title: "Support & cybersécurité",
    description: "Astreinte, durcissement et accompagnement utilisateurs.",
    bullets: [
      "Supervision 24/7 et remédiation documentée",
      "Tests de sécurité réguliers",
      "Runbooks et formation des équipes",
    ],
    icon: Headphones,
  },
]

const processSteps = [
  {
    title: "Diagnostic & ambition",
    detail: "Audit express, ateliers métiers et critères de succès partagés.",
  },
  {
    title: "Architecture & design",
    detail: "Parcours utilisateurs, maquettes, choix techniques validés ensemble.",
  },
  {
    title: "Build & intégrations",
    detail: "Sprints courts, QA continue, CI/CD et sécurité par défaut.",
  },
  {
    title: "Opérations & amélioration",
    detail: "Supervision, support prioritaire et plan d’évolution produit.",
  },
]

const commitments = [
  {
    title: "Clarté et pilotage",
    icon: LineChart,
    points: [
      "Roadmap priorisée, jalons livrables et comités réguliers.",
      "Tableaux de bord sur la performance et la sécurité.",
      "Un interlocuteur dédié pour fluidifier les décisions.",
    ],
  },
  {
    title: "Fiabilité et sécurité",
    icon: ShieldCheck,
    points: [
      "Revue de code, tests automatisés et contrôle qualité continu.",
      "Backups, plan de reprise et procédures documentées.",
      "Gestion stricte des accès et journalisation des actions.",
    ],
  },
  {
    title: "Expérience utilisateur",
    icon: Sparkles,
    points: [
      "Design lisible, contrasté et accessible.",
      "Parcours optimisés pour desktop et mobile.",
      "Contenus structurés pour inspirer confiance et conversion.",
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js"
        type="module"
        strategy="afterInteractive"
      />
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center pt-28 pb-16">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-[#0030FF] opacity-25 blur-[140px]" />
        <div className="absolute -right-48 -top-24 w-[520px] h-[520px] rounded-full bg-[#2382FF] opacity-20 blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] items-center gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full subtle-border bg-white/5 text-white/80 text-[11px] tracking-[0.3em] uppercase">
                <Image src="/logo.png" alt="OCTACORE" width={24} height={24} className="h-6 w-6" priority />
                <span>Partenaire technologique</span>
              </div>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold leading-tight">
                La technologie qui inspire <span className="text-white drop-shadow-[0_0_18px_rgba(35,130,255,0.35)]">confiance</span>.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
                Nous concevons des plateformes digitales sécurisées, performantes et élégantes pour que vos équipes et
                vos clients vivent une expérience fluide. Chaque projet est cadré, mesuré et opéré avec la rigueur d’un
                partenaire long terme.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold px-7 py-6 gradient-cta ring-highlight"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Lancer un projet <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-6 py-6"
                >
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/6 border border-white/10 text-white hover:bg-white/10 px-6 py-6 font-semibold"
                >
                  <Link href="/blog">Voir le blog</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {metrics.map((item) => (
                  <div key={item.label} className="brand-glass rounded-xl p-4">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-2xl font-semibold text-white mt-1">{item.value}</p>
                    <p className="text-xs text-white/60 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl min-h-[600px] flex items-center justify-center">
              <dotlottie-wc
                src="https://lottie.host/18708b3c-fdc8-4c0d-8558-7aacf5bf821e/VKBKd1qfHi.lottie"
                style={{ width: "100%", maxWidth: "1100px", height: "620px" }}
                autoplay
                loop
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03011E] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Nos expertises</p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
                Des services pensés pour la performance et la fiabilité.
              </h2>
              <p className="text-white/70 text-lg">
                Nous combinons design, ingénierie et sécurité pour livrer des plateformes crédibles, élégantes et prêtes
                à grandir avec votre organisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Approche produit", "Sécurité", "Cloud", "Data", "Support"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="brand-glass rounded-2xl p-6 h-full flex flex-col gap-4">
                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                  <pillar.icon className="h-5 w-5 text-[#2382FF]" />
                  <span className="text-sm text-white">{pillar.title}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                <div className="h-1 w-16 bg-gradient-to-r from-[#0030FF] to-[#2382FF] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[#050520]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Solutions clés</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Des parcours digitaux qui donnent envie de travailler avec vous.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Chaque solution est conçue avec une ligne éditoriale claire, des performances mesurées et une sécurité
              intégrée, pour inspirer confiance à vos utilisateurs et partenaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutionAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-[#2382FF]/25 bg-[#0a0a2e]/80 p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <area.icon className="h-10 w-10 text-[#2382FF]" />
                    <div>
                      <Wordmark size="xs" className="h-5 w-auto" />
                      <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  {area.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#2382FF] mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[#03011E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Méthode</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Une approche maîtrisée du diagnostic à l’amélioration continue.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Nous cadrons chaque phase pour rester alignés : ateliers, architecture, sprints courts et suivi opérationnel
              pour sécuriser vos délais et la qualité attendue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-[#0a0a2e]/80 p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Étape {String(index + 1).padStart(2, "0")}</span>
                  <div className="h-8 w-8 rounded-full bg-[#0030FF]/20 border border-[#0030FF]/40 text-white flex items-center justify-center text-xs">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[#050520]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Engagements</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Fiabilité, transparence et expérience utilisateur irréprochable.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Nos équipes pilotent vos projets avec une exigence constante : sécurité, performance et communication claire
              pour bâtir une relation de confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item) => (
              <div key={item.title} className="brand-glass rounded-2xl p-6 h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-[#2382FF]" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <div className="space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#2382FF] mt-0.5" />
                      <p className="text-white/75 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#03011E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brand-glass rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Parlons-en</p>
              <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
                Prêt à construire le prochain chapitre digital de votre organisation '
              </h3>
              <p className="text-white/70 text-lg max-w-3xl">
                Décrivez vos enjeux, nous revenons vers vous avec une proposition structurée et un plan d’action rapide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold px-7 py-6 gradient-cta ring-highlight w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Programmer un échange <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-6 w-full sm:w-auto"
              >
                <Link href="/portfolio">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
