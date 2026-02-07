import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/logotype"
import { HeroLottie } from "@/components/hero-lottie"
import { ActivePartners } from "@/components/active-partners"
import {
  RiShieldCheckLine,
  RiGlobalLine,
  RiCpuLine,
  RiBarChartLine,
  RiHeadphoneLine,
  RiSparklingLine,
  RiCloudLine,
  RiStackLine,
} from "react-icons/ri"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const metrics = [
  { label: "Target Availability", value: "99.9%", detail: "Monitored architecture and integrated redundancy." },
  { label: "Priority Response", value: "< 1h", detail: "24/7 operational support and mobilizable teams." },
  { label: "Governance", value: "Short Sprints", detail: "Workshops, dashboards and quick decisions." },
]

const pillars = [
  {
    title: "Platforms & Experiences",
    description: "Websites, portals and interfaces that strengthen trust and conversion.",
    icon: RiGlobalLine,
  },
  {
    title: "Cloud, Data & Automation",
    description: "APIs, business integrations, reliable and scalable data pipelines.",
    icon: RiCpuLine,
  },
  {
    title: "Security & Continuity",
    description: "Asset protection, supervision and recovery plans to stay online.",
    icon: RiShieldCheckLine,
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

const processSteps = [
  {
    title: "Diagnosis & Ambition",
    detail: "Quick audit, business workshops and shared success criteria.",
  },
  {
    title: "Architecture & Design",
    detail: "User journeys, mockups, technical choices validated together.",
  },
  {
    title: "Build & Integrations",
    detail: "Short sprints, continuous QA, CI/CD and security by default.",
  },
  {
    title: "Operations & Improvement",
    detail: "Supervision, priority support and product evolution plan.",
  },
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

export default function HomePage() {
  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js"
        type="module"
        strategy="afterInteractive"
      />
      <section className="relative isolate overflow-hidden pt-16 pb-16">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-[#0030FF] opacity-25 blur-[140px]" />
        <div className="absolute -right-48 -top-24 w-[520px] h-[520px] rounded-full bg-[#2382FF] opacity-20 blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] items-start gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full subtle-border bg-white/5 text-white/80 text-[11px] tracking-[0.3em] uppercase">
                <Image src="/logo.png" alt="OCTACORE" width={24} height={24} className="h-6 w-6" priority />
                <span>Technology Partner</span>
              </div>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold leading-tight">
                Technology that inspires <span className="text-white drop-shadow-[0_0_18px_rgba(35,130,255,0.35)]">trust</span>.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
                We design secure, high-performance and elegant digital platforms so that your teams and
                your clients have a smooth experience. Each project is framed, measured and operated with the rigor of a
                long-term partner.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold px-7 py-6 gradient-cta ring-highlight"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-6 py-6"
                >
                  <Link href="/services">Discover our services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/6 border border-white/10 text-white hover:bg-white/10 px-6 py-6 font-semibold"
                >
                  <Link href="/blog">View the blog</Link>
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

            <div className="rounded-3xl flex items-center justify-center">
              <HeroLottie
                src="https://lottie.host/18708b3c-fdc8-4c0d-8558-7aacf5bf821e/VKBKd1qfHi.lottie"
                style={{ width: "100%", maxWidth: "1100px", height: "620px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050520] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">About Octacore</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Innovating Digital Solutions with Expertise and Security
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Octacore is an information technology company specializing in the design, security, and optimization of innovative digital solutions. The company supports organizations in their digital transformation by delivering high-value services tailored to today's and tomorrow's technological challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="brand-glass rounded-2xl p-6">
              <RiShieldCheckLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-white/70">Protection of systems, data, and infrastructures against digital threats.</p>
            </div>
            <div className="brand-glass rounded-2xl p-6">
              <RiGlobalLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Web & Mobile Development</h3>
              <p className="text-white/70">Secure, scalable, and high-performance solutions.</p>
            </div>
            <div className="brand-glass rounded-2xl p-6">
              <RiCpuLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Software</h3>
              <p className="text-white/70">Tailored tools designed to meet specific business needs.</p>
            </div>
            <div className="brand-glass rounded-2xl p-6">
              <RiBarChartLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Data & Analytics</h3>
              <p className="text-white/70">Intelligent data exploitation to support strategic decision-making.</p>
            </div>
            <div className="brand-glass rounded-2xl p-6">
              <RiHeadphoneLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">IT Support</h3>
              <p className="text-white/70">Technical assistance, maintenance, infrastructure management, and service continuity.</p>
            </div>
            <div className="brand-glass rounded-2xl p-6">
              <RiSparklingLine className="h-8 w-8 text-[#2382FF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Consulting</h3>
              <p className="text-white/70">Technological guidance, digital transformation, and process optimization.</p>
            </div>
          </div>

          <div className="space-y-8">
          </div>
        </div>
      </section>

      <section className="bg-[#03011E] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Our Expertise</p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
                Services designed for performance and reliability.
              </h2>
              <p className="text-white/70 text-lg">
                We combine design, engineering and security to deliver credible, elegant platforms ready
                to grow with your organization.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Product Approach", "Security", "Cloud", "Data", "Support"].map((item) => (
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
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Key Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Digital journeys that make people want to work with you.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Each solution is designed with a clear editorial line, measured performance and integrated security,
              to inspire confidence in your users and partners.
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
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Method</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              A controlled approach from diagnosis to continuous improvement.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              We frame each phase to stay aligned: workshops, architecture, short sprints and operational follow-up
              to secure your deadlines and the expected quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-[#0a0a2e]/80 p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Step {String(index + 1).padStart(2, "0")}</span>
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
            <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Commitments</p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
              Reliability, transparency and flawless user experience.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl">
              Our teams manage your projects with constant rigor: security, performance and clear communication
              to build a relationship of trust.
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

      <ActivePartners />

      <section className="py-16 sm:py-20 bg-[#03011E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brand-glass rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-white/60 uppercase tracking-[0.2em] text-xs">Let's talk</p>
              <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-white leading-tight">
                Ready to build the next digital chapter of your organization?
              </h3>
              <p className="text-white/70 text-lg max-w-3xl">
                Describe your challenges, we'll get back to you with a structured proposal and a quick action plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold px-7 py-6 gradient-cta ring-highlight w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule an exchange <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-6 w-full sm:w-auto"
              >
                <Link href="/portfolio">See our achievements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
