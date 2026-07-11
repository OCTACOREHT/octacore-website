"use client"

import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { useRef, useState, type ElementType } from "react"
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react"
import {
  RiShieldCheckLine,
  RiGlobalLine,
  RiCpuLine,
  RiBarChartLine,
  RiHeadphoneLine,
  RiSparklingLine,
} from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { HeroLottie } from "@/components/hero-lottie"
import { ActivePartners } from "@/components/active-partners"
import { ServiceCard } from "@/components/service-card"
import { PremiumBackground3D } from "@/components/premium-background-3d"
import { MagneticButton } from "@/components/magnetic-button"

// ── Data (icons are React components, must live in client boundary) ─────────

const metrics = [
  { label: "Target Availability", value: "99.9%", detail: "Monitored architecture and integrated redundancy." },
  { label: "Priority Response", value: "< 1h", detail: "24/7 operational support and mobilizable teams." },
  { label: "Governance", value: "Short Sprints", detail: "Workshops, dashboards and quick decisions." },
]

const services = [
  { title: "Cybersecurity", description: "Protection of systems, data, and infrastructures against digital threats.", icon: RiShieldCheckLine },
  { title: "Web & Mobile Development", description: "Secure, scalable, and high-performance solutions.", icon: RiGlobalLine },
  { title: "Custom Software", description: "Tailored tools designed to meet specific business needs.", icon: RiCpuLine },
  { title: "Data & Analytics", description: "Intelligent data exploitation to support strategic decision-making.", icon: RiBarChartLine },
  { title: "IT Support", description: "Technical assistance, maintenance, infrastructure management, and service continuity.", icon: RiHeadphoneLine },
  { title: "Strategic Consulting", description: "Technological guidance, digital transformation, and process optimization.", icon: RiSparklingLine },
]

const pillars = [
  { title: "Platforms & Experiences", description: "Websites, portals and interfaces that strengthen trust and conversion.", icon: RiGlobalLine },
  { title: "Cloud, Data & Automation", description: "APIs, business integrations, reliable and scalable data pipelines.", icon: RiCpuLine },
  { title: "Security & Continuity", description: "Asset protection, supervision and recovery plans to stay online.", icon: RiShieldCheckLine },
]

const processSteps = [
  { title: "Diagnosis & Ambition", detail: "Quick audit, business workshops and shared success criteria." },
  { title: "Architecture & Design", detail: "User journeys, mockups, technical choices validated together." },
  { title: "Build & Integrations", detail: "Short sprints, continuous QA, CI/CD and security by default." },
  { title: "Operations & Improvement", detail: "Supervision, priority support and product evolution plan." },
]

const commitments = [
  {
    title: "Clarity and Control",
    icon: RiBarChartLine,
    points: [
      "Prioritized roadmap, deliverable milestones and regular committees.",
      "Dashboards on performance and security.",
      "A dedicated contact to streamline decisions.",
    ],
  },
  {
    title: "Reliability and Security",
    icon: RiShieldCheckLine,
    points: [
      "Code review, automated tests and continuous quality control.",
      "Backups, recovery plan and documented procedures.",
      "Strict access management and action logging.",
    ],
  },
  {
    title: "User Experience",
    icon: RiSparklingLine,
    points: [
      "Readable, contrasted and accessible design.",
      "Optimized journeys for desktop and mobile.",
      "Structured content to inspire trust and conversion.",
    ],
  },
]

// ── Animation presets ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.21, 1.02, 0.73, 1] },
  }),
}

// ── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#2382FF]/80 uppercase tracking-[0.28em] text-[10px] font-medium">
      {children}
    </p>
  )
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 1.02, 0.73, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function MetricCard({ label, value, detail, index }: { label: string; value: string; detail: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.21, 1.02, 0.73, 1] }}
      className="metric-card rounded-xl p-5 flex flex-col gap-1.5"
    >
      <p className="text-[10px] text-foreground/45 uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-none">{value}</p>
      <p className="text-xs text-foreground/45 leading-relaxed">{detail}</p>
    </motion.div>
  )
}

function ProcessStepCard({ title, detail, index }: { title: string; detail: string; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal delay={index * 0.07}>
      <div
        className="relative rounded-2xl border p-6 flex flex-col gap-4 overflow-hidden h-full transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderColor: hovered ? "rgba(35,130,255,0.35)" : "rgba(255,255,255,0.08)",
          boxShadow: hovered ? "0 4px 32px rgba(0,48,255,0.12)" : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-foreground/35 uppercase tracking-widest">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <div className="step-badge h-8 w-8 rounded-full flex items-center justify-center text-foreground text-xs font-bold">
            {index + 1}
          </div>
        </div>
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <p className="text-foreground/50 text-sm leading-relaxed flex-1">{detail}</p>
        {hovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0030FF] to-[#2382FF]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </div>
    </Reveal>
  )
}

function CommitmentCard({ title, icon: Icon, points, index }: { title: string; icon: ElementType; points: string[]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-card glass-card-hover rounded-2xl p-7 h-full flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="icon-wrap w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="h-5 w-5 text-[#2382FF]" />
          </div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
        </div>
        <div className="space-y-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#2382FF] mt-0.5 flex-shrink-0 opacity-75" />
              <p className="text-foreground/55 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

// ── Main export ─────────────────────────────────────────────────────────────

export function PremiumHomePage() {
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })

  const heroTextY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden min-h-screen flex items-center"
        style={{ paddingTop: "7rem", paddingBottom: "5rem" }}
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] rounded-full bg-[#0030FF] opacity-18 blur-[160px] pointer-events-none" />
        <div className="absolute -right-48 -top-24 w-[680px] h-[680px] rounded-full bg-[#2382FF] opacity-13 blur-[180px] pointer-events-none" />

        <PremiumBackground3D />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-14"
          >
            {/* Left */}
            <motion.div
              className="space-y-7"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-white/[0.04] backdrop-blur-sm"
              >
                <Image src="/logo.png" alt="OCTACORE" width={20} height={20} className="h-5 w-5" priority />
                <span className="text-foreground/65 text-[10px] tracking-[0.3em] uppercase font-medium">Technology Partner</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#2382FF] animate-pulse" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-[family-name:var(--font-heading)] font-bold leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
              >
                <span className="text-foreground block">Technology that</span>
                <span className="block text-gradient-blue">inspires trust.</span>
              </motion.h1>

              {/* Body */}
              <motion.p variants={fadeUp} className="text-lg text-foreground/60 max-w-xl leading-relaxed">
                We design secure, high-performance and elegant digital platforms so that your teams and
                your clients have a smooth experience. Each project is framed, measured and operated
                with the rigor of a long-term partner.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <Button asChild size="lg" className="gradient-cta ring-highlight text-foreground font-semibold px-7 py-6 rounded-xl border-0">
                    <Link href="/contact" className="flex items-center gap-2">
                      Start a project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild size="lg" variant="outline" className="border-foreground/10 text-foreground hover:bg-foreground/5 hover:border-foreground/10 px-6 py-6 rounded-xl backdrop-blur-sm transition-all duration-200">
                    <Link href="/services">Discover our services</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild size="lg" className="bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/5 px-6 py-6 rounded-xl">
                    <Link href="/blog">View the blog</Link>
                  </Button>
                </MagneticButton>
              </motion.div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {metrics.map((item, i) => (
                  <MetricCard key={item.label} {...item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Right — Lottie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 1.02, 0.73, 1] }}
              className="rounded-3xl flex items-center justify-center"
            >
              <HeroLottie
                src="https://lottie.host/18708b3c-fdc8-4c0d-8558-7aacf5bf821e/VKBKd1qfHi.lottie"
                style={{ width: "100%", maxWidth: "900px", height: "580px" }}
              />
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/25"
          >
            <span className="text-[9px] tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / SERVICES OVERVIEW ─────────────────────────────── */}
      <section className="bg-background py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2382FF]/25 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="flex flex-col gap-4 mb-14 max-w-3xl">
            <SectionLabel>About Octacore</SectionLabel>
            <h2
              className="font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Innovating Digital Solutions with Expertise and Security
            </h2>
            <p className="text-foreground/55 text-lg leading-relaxed">
              Octacore is an information technology company specializing in the design, security, and
              optimization of innovative digital solutions — supporting organizations in their digital
              transformation with high-value services.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE / PILLARS ───────────────────────────────────── */}
      <section className="bg-background py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0030FF]/20 to-transparent" />
        <div className="absolute -right-64 top-0 w-[500px] h-[500px] rounded-full bg-[#0030FF] opacity-[0.06] blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-4 max-w-2xl mb-10">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2
              className="font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Services designed for performance and reliability.
            </h2>
            <p className="text-foreground/55 text-lg leading-relaxed">
              We combine design, engineering and security to deliver credible, elegant platforms ready
              to grow with your organization.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-10">
            {["Product Approach", "Security", "Cloud", "Data", "Support"].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full border border-foreground/10 bg-white/[0.03] text-foreground/55 text-xs hover:border-[#2382FF]/40 hover:text-foreground transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <div className="glass-card glass-card-hover rounded-2xl p-7 h-full flex flex-col gap-5">
                    <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border border-foreground/10 bg-white/[0.03] w-fit">
                      <Icon className="h-4 w-4 text-[#2382FF]" />
                      <span className="text-sm text-foreground/80 font-medium">{pillar.title}</span>
                    </div>
                    <p className="text-foreground/55 text-sm leading-relaxed flex-1">{pillar.description}</p>
                    <div className="h-px rounded-full bg-gradient-to-r from-[#0030FF] to-[#2382FF] opacity-50" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2382FF]/15 to-transparent" />
        <div className="absolute -left-64 bottom-0 w-[400px] h-[400px] rounded-full bg-[#2382FF] opacity-[0.06] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-4 max-w-3xl mb-14">
            <SectionLabel>Method</SectionLabel>
            <h2
              className="font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              A controlled approach from diagnosis to continuous improvement.
            </h2>
            <p className="text-foreground/55 text-lg leading-relaxed max-w-2xl">
              We frame each phase to stay aligned: workshops, architecture, short sprints and
              operational follow-up to secure your deadlines and the expected quality.
            </p>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-[#0030FF]/25 via-[#2382FF]/50 to-[#0030FF]/25" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={step.title} title={step.title} detail={step.detail} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0030FF]/20 to-transparent" />
        <div className="absolute octagon-pattern inset-0 opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="flex flex-col gap-4 max-w-3xl mb-14">
            <SectionLabel>Commitments</SectionLabel>
            <h2
              className="font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Reliability, transparency and flawless user experience.
            </h2>
            <p className="text-foreground/55 text-lg leading-relaxed max-w-2xl">
              Our teams manage your projects with constant rigor: security, performance and clear
              communication to build a relationship of trust.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {commitments.map((item, i) => (
              <CommitmentCard key={item.title} title={item.title} icon={item.icon} points={item.points} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────────── */}
      <ActivePartners />
    </>
  )
}
