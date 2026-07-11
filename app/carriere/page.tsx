import type { Metadata } from "next"
import { ArrowUpRight, Briefcase, Clock, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers",
  description: "Discover open positions at Octacore and join a team that builds reliable and elegant digital solutions.",
}

const jobs = [
  {
    title: "Fullstack Developer (TypeScript/Next.js)",
    location: "Remote / Port-au-Prince",
    type: "Full-time",
    perks: ["Front + API", "CI/CD", "Security by design"],
  },
  {
    title: "Product Designer (UX/UI)",
    location: "Remote",
    type: "Contract",
    perks: ["Design system", "Prototyping", "User research"],
  },
  {
    title: "Cloud & SRE Engineer",
    location: "Remote / Port-au-Prince",
    type: "Full-time",
    perks: ["Azure / AWS", "Observability", "DR & backups"],
  },
]

const values = [
  { icon: Sparkles, title: "Product excellence", text: "Careful design, measured performance, frictionless experience." },
  { icon: ShieldCheck, title: "Native security", text: "Controlled access, code review, automation and resilience." },
  { icon: Briefcase, title: "Growth", text: "Coaching, targeted training and high-impact missions." },
]

export default function CarrierePage() {
  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <Image
            src="/horizontal-lockup-v1.png"
            alt="Octacore"
            width={210}
            height={90}
            className="h-auto w-[210px]"
            priority
          />
          <p className="text-foreground/70 uppercase tracking-[0.22em] text-xs">Join the team</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
            Let's build the next generation of digital solutions.
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl">
            We recruit talents who love designing, securing and operating elegant digital experiences.
            Browse the open positions or send us a spontaneous application.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
            >
              <Link href="#offres">View offers</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-foreground/10 text-foreground hover:bg-foreground/5"
            >
              <Link href="mailto:info@octacore.com?subject=Spontaneous%20application">Spontaneous application</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="offres" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-8 sm:mb-10">
            <p className="text-foreground/60 uppercase tracking-[0.2em] text-xs">Open positions</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight">
              Missions where design, code and reliability meet.
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl">
              We favor autonomous, curious and rigorous profiles on quality. Remote-friendly, with a
              core team based in Port-au-Prince.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-[#2382FF]/25 bg-background/80 p-6 sm:p-7 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase text-foreground/60 tracking-[0.18em]">Octacore</p>
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-3 text-foreground/60 text-sm mt-2">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center text-foreground/70">
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
                  <p className="text-foreground/70 text-sm">
                    Send your CV and some recent projects to{" "}
                    <a className="text-[#2382FF] hover:underline" href="mailto:info@octacore.com">
                      info@octacore.com
                    </a>
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold"
                  >
                    <Link href="mailto:info@octacore.com?subject=Application%20-%20Octacore">Apply</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-4">
              <p className="text-foreground/60 uppercase tracking-[0.2em] text-xs">Working at Octacore</p>
              <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight">
                An environment that values quality and progress.
              </h3>
              <p className="text-foreground/70 text-lg">
                We emphasize clarity of missions, documentation and collective review. Deliverables
                must be reliable, elegant and easy to evolve.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Remote-friendly", "Clear process", "Design system", "Code reviews", "Security by default"].map((chip) => (
                  <span key={chip} className="px-3 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/70 text-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#2382FF]/20 bg-background/80 p-4 flex flex-col gap-2">
                  <item.icon className="h-6 w-6 text-[#2382FF]" />
                  <h4 className="text-foreground font-semibold">{item.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
