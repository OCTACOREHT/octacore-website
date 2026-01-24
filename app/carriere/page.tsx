import type { Metadata } from "next"
import { ArrowUpRight, Briefcase, Clock, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Carrière",
  description: "Découvrez les postes ouverts chez Octacore et rejoignez une équipe qui construit des solutions digitales fiables et élégantes.",
}

const jobs = [
  {
    title: "Développeur·se Fullstack (TypeScript/Next.js)",
    location: "Remote / Port-au-Prince",
    type: "Temps plein",
    perks: ["Front + API", "CI/CD", "Sécurité by design"],
  },
  {
    title: "Product Designer (UX/UI)",
    location: "Remote",
    type: "Contrat",
    perks: ["Design system", "Prototypage", "Recherche utilisateur"],
  },
  {
    title: "Ingénieur·e Cloud & SRE",
    location: "Remote / Port-au-Prince",
    type: "Temps plein",
    perks: ["Azure / AWS", "Observabilité", "PRA & sauvegardes"],
  },
]

const values = [
  { icon: Sparkles, title: "Exigence produit", text: "Design soigné, performances mesurées, expérience sans friction." },
  { icon: ShieldCheck, title: "Sécurité native", text: "Accès maîtrisés, revue de code, automatisation et résilience." },
  { icon: Briefcase, title: "Croissance", text: "Coaching, formations ciblées et missions à fort impact." },
]

export default function CarrierePage() {
  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#050520] to-[#03011E]" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <Image
            src="/Horizontal-lockup%20V2.png"
            alt="Octacore"
            width={210}
            height={90}
            className="h-auto w-[210px]"
            priority
          />
          <p className="text-white/70 uppercase tracking-[0.22em] text-xs">Rejoindre l'équipe</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Construisons la prochaine génération de solutions digitales.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            Nous recrutons des talents qui aiment concevoir, sécuriser et opérer des expériences numériques élégantes.
            Parcourez les postes ouverts ou écrivez-nous une candidature spontanée.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
            >
              <Link href="#offres">Voir les offres</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="mailto:octacore.haiti@gmail.com?subject=Candidature%20spontanée">Candidature spontanée</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="offres" className="py-16 sm:py-20 lg:py-24 bg-[#03011E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-8 sm:mb-10">
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Postes ouverts</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Des missions où design, code et fiabilité se rencontrent.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Nous privilégions des profils autonomes, curieux et rigoureux sur la qualité. Remote-friendly, avec un
              noyau d’équipe basé à Port-au-Prince.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-[#2382FF]/25 bg-[#0a0a2e]/80 p-6 sm:p-7 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase text-white/60 tracking-[0.18em]">Octacore</p>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <div className="flex items-center gap-3 text-white/60 text-sm mt-2">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.perks.map((perk) => (
                    <span key={perk} className="px-3 py-1 text-xs font-medium bg-[#0030FF]/10 text-[#2382FF] rounded-full">
                      {perk}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-white/70 text-sm">
                    Envoyez votre CV et quelques projets récents à{" "}
                    <a className="text-[#2382FF] hover:underline" href="mailto:octacore.haiti@gmail.com">
                      octacore.haiti@gmail.com
                    </a>
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold"
                  >
                    <Link href="mailto:octacore.haiti@gmail.com?subject=Candidature%20-%20Octacore">Postuler</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#050520]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-4">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Travailler chez Octacore</p>
              <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
                Un environnement qui valorise la qualité et la progression.
              </h3>
              <p className="text-white/70 text-lg">
                On met l’accent sur la clarté des missions, la documentation et la relecture collective. Les livrables
                doivent être fiables, élégants et faciles à faire évoluer.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Remote-friendly", "Process clair", "Design system", "Revues de code", "Sécurité by default"].map((chip) => (
                  <span key={chip} className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#2382FF]/20 bg-[#0a0a2e]/80 p-4 flex flex-col gap-2">
                  <item.icon className="h-6 w-6 text-[#2382FF]" />
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
