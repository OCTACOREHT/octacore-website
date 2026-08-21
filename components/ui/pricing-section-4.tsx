"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Sparkles as SparklesComp } from "@/components/ui/sparkles"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import {
  Globe,
  Smartphone,
  Server,
  Layers,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  HelpCircle,
  Clock,
  FileText,
  Wrench,
  ChevronRight,
  Database,
  Lock,
  BarChart3,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react"

// Category Types
type CategoryId = "websites" | "apps" | "systems" | "saas" | "maintenance"

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryId>("websites")
  const pricingRef = useRef<HTMLDivElement>(null)
  const maintenanceSectionRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden pt-20 pb-24"
      ref={pricingRef}
    >
      {/* Background glow animations */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_80px]" />
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[calc(50%-568px)] right-[-568px] top-0 h-[2053px] w-[1136px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
              opacity: 0.18,
            }}
          />
        </div>
      </TimelineContent>

      {/* Main Hero Header */}
      <article className="text-center mb-4 pt-16 lg:pt-24 max-w-5xl mx-auto space-y-4 relative z-50 px-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.12}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
              delay: 0,
            }}
          >
            Transparent Digital Solutions & Engineering
          </VerticalCutReveal>
        </h1>

        <AnimatedText className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto font-[family-name:var(--font-sans)] leading-relaxed">
          A pricing structure designed for companies, organizations, and entrepreneurs looking to develop their digital presence, automate operations, and leverage their data.
        </AnimatedText>

        {/* Clean 4-Category Pill Switcher Bar */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-4 flex justify-center w-full"
        >
          <div className="relative z-10 mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-1.5 w-fit rounded-full bg-neutral-900 border border-neutral-700/80 p-1.5 shadow-2xl">
            {[
              { id: "websites", label: "Websites" },
              { id: "apps", label: "Mobile, Web & Desktop Apps" },
              { id: "systems", label: "Business Systems" },
              { id: "saas", label: "SaaS Solutions" },
            ].map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id as CategoryId)
                  }}
                  className={cn(
                    "relative z-10 w-fit h-10 rounded-full px-5 md:px-7 font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center whitespace-nowrap flex-shrink-0",
                    isActive ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="single-pill-glow"
                      className="absolute inset-0 h-full w-full rounded-full border border-blue-500/50 shadow-[0_0_25px_rgba(37,99,235,0.5)] bg-gradient-to-r from-blue-600 to-blue-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </TimelineContent>
      </article>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 pt-2">
        <AnimatePresence mode="wait">
          {/* SECTION 1: WEBSITES */}
          {activeCategory === "websites" && (
            <motion.div
              key="websites-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--font-heading)]">
                  1. Professional Websites
                </h2>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Tailored web design, responsive architectures, and generative search optimization.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* STARTER WEBSITE */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide">
                        STARTER
                      </h3>
                      <span className="text-xs bg-neutral-800 text-gray-300 px-2.5 py-1 rounded-full font-semibold">
                        Up to 3 Pages
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $500
                      </span>
                      <span className="text-gray-400 text-xs ml-2 uppercase tracking-wider font-semibold">
                        One-Time Project
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Professional showcase website designed to quickly establish a sleek digital presence.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Up to 3 custom designed pages",
                        "Professional showcase website (Site vitrine)",
                        "Fully responsive mobile & desktop layout",
                        "Contact form & lead capture",
                        "Integration of company information",
                        "Complete online deployment & launch",
                        'Includes "Powered by Octacore" mention (Removal available for +$500)',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Get Started with Starter
                    </a>
                  </CardContent>
                </Card>

                {/* BUSINESS WEBSITE */}
                <Card className="relative h-full flex flex-col text-white border-blue-500/50 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] md:-mt-3 md:mb-3">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide text-white">
                        BUSINESS
                      </h3>
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase shadow-sm">
                        POPULAR
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $1,200
                      </span>
                      <span className="text-gray-400 text-xs ml-2 uppercase tracking-wider font-semibold">
                        One-Time Project
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Complete content structure and expanded architecture for growing companies.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "3 to 8 custom pages",
                        "Everything included in Starter plan",
                        "Comprehensive technical architecture",
                        "Additional specialized pages & services",
                        "Tailored features suited to business goals",
                        "Web presence & speed optimization",
                        "Standard Octacore attribution (Complete removal available for +$500)",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all shadow-lg shadow-blue-950 text-center block"
                    >
                      Get Started with Business
                    </a>
                  </CardContent>
                </Card>

                {/* ENTERPRISE WEBSITE */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide">
                        ENTERPRISE
                      </h3>
                      <span className="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-full font-semibold">
                        Bespoke Solution
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $2,000+
                      </span>
                      <span className="text-gray-400 text-xs ml-2 uppercase tracking-wider font-semibold">
                        Custom Quote
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Advanced web application built for maximum scale, generative search (GEO), and deep analytics.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Custom pages & features according to scope",
                        "Advanced technical SEO architecture",
                        "GEO (Generative Engine / AI Search Optimization)",
                        "Integrated analytics & data tracking setup",
                        "Custom analytics tracking dashboard",
                        "Continuous modifications & scope evolutions",
                        "Full white-label branding & 100% copyright removal included",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Request Enterprise Quote
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Web Add-ons Table */}
              <div className="mt-12 bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-heading)] uppercase flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Web Project Add-ons & Feature Matrix
                </h3>
                <p className="text-gray-400 text-xs mb-6">
                  Enhance any web project with modular capabilities and ongoing optimizations.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 text-gray-400 uppercase tracking-wider font-semibold">
                        <th className="py-3 px-4">Feature / Option</th>
                        <th className="py-3 px-4">Pricing Terms</th>
                        <th className="py-3 px-4">Inclusion Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/60 text-gray-300">
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Additional Pages</td>
                        <td className="py-3.5 px-4 text-gray-400">Based on scope</td>
                        <td className="py-3.5 px-4">Available for Starter & Business</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Advanced SEO / GEO (AI Engines)</td>
                        <td className="py-3.5 px-4 text-blue-400 font-semibold">Included starting at $2,000+</td>
                        <td className="py-3.5 px-4">Optional add-on for Starter/Business</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Analytics & Event Tracking</td>
                        <td className="py-3.5 px-4 text-blue-400 font-semibold">Included starting at $2,000+</td>
                        <td className="py-3.5 px-4">Custom setup available for all plans</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Custom Tracking Dashboard</td>
                        <td className="py-3.5 px-4 text-blue-400 font-semibold">Included starting at $2,000+</td>
                        <td className="py-3.5 px-4">Tailored reporting panel</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Bespoke Features & Modules</td>
                        <td className="py-3.5 px-4 text-gray-400">Custom quote</td>
                        <td className="py-3.5 px-4">Payment gateways, APIs, portals</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-white">Maintenance & Evolution Care</td>
                        <td className="py-3.5 px-4 text-gray-400">On demand or via Yearly Plans</td>
                        <td className="py-3.5 px-4">See Yearly Maintenance section below</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECTION 2: MOBILE & DESKTOP APPS */}
          {activeCategory === "apps" && (
            <motion.div
              key="apps-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--font-heading)]">
                  2. Mobile, Web & Desktop Applications
                </h2>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  High-performance Web, iOS, Android, and Desktop software tailored to your operational ecosystem.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* STARTER WEB & MOBILE APP */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide">
                        STARTER APP
                      </h3>
                      <span className="text-xs bg-neutral-800 text-gray-300 px-2.5 py-1 rounded-full font-semibold">
                        Web / Mobile
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xs text-gray-400 font-semibold mr-1">Starting at</span>
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $1,000+
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Essential Progressive Web Application or native iOS / Android mobile app.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Web Application or Mobile Application (Android / iOS)",
                        "Custom UI/UX User Interface design",
                        "Dedicated Backend / API infrastructure",
                        "Secure authentication & user management",
                        "Basic notification or cloud database setup",
                        "Deployment & launch assistance",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Get Started with Starter
                    </a>
                  </CardContent>
                </Card>

                {/* BUSINESS MOBILE & DESKTOP APP */}
                <Card className="relative h-full flex flex-col text-white border-blue-500/50 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] md:-mt-3 md:mb-3">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide text-white">
                        BUSINESS APP
                      </h3>
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase shadow-sm">
                        POPULAR
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xs text-gray-400 font-semibold mr-1">Starting at</span>
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $2,000+
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Full-featured cross-platform application with advanced API services.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Cross-Platform Web & Mobile Application (iOS & Android)",
                        "Custom UI/UX design with responsive micro-animations",
                        "Scalable RESTful / GraphQL API backend",
                        "Third-party API & payment gateway integrations",
                        "Automated workflow engine & push notification system",
                        "Speed & database performance optimization",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all shadow-lg shadow-blue-950 text-center block"
                    >
                      Get Started with Business
                    </a>
                  </CardContent>
                </Card>

                {/* ENTERPRISE APP & DESKTOP */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wide">
                        ENTERPRISE
                      </h3>
                      <span className="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-full font-semibold">
                        Bespoke Suite
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xs text-gray-400 font-semibold mr-1">Starting at</span>
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $2,500+
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Complex enterprise ecosystem including Desktop software (.exe / macOS) & multi-cloud backend.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Complex Mobile, Web App & Desktop Application (.exe / macOS)",
                        "Advanced custom features & automated workflow orchestration",
                        "Enterprise third-party service & API integrations",
                        "Dedicated multi-region cloud backend architecture",
                        "Custom security policies, RBAC & compliance frameworks",
                        "Continuous updates & dedicated deployment SLA",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Request Enterprise Quote
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-gray-400 max-w-5xl mx-auto flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>
                  <strong className="text-gray-200">Pricing Note:</strong> The final price depends on application complexity, total number of modules, third-party API fees, design requirements, cloud infrastructure, and specific client security mandates.
                </span>
              </div>
            </motion.div>
          )}

          {/* SECTION 3: BUSINESS MANAGEMENT SYSTEMS */}
          {activeCategory === "systems" && (
            <motion.div
              key="systems-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--font-heading)]">
                  3. Business Management Systems
                </h2>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Sur commande — à partir de $1,000 à $3,000+, selon la complexité et le périmètre.
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-blue-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-neutral-800/80">
                  <div>
                    <span className="text-xs bg-neutral-800 text-gray-300 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                      On Demand Order
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mt-2 font-[family-name:var(--font-heading)]">
                      Bespoke Enterprise Systems
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="text-xs text-gray-400 block font-medium">Pricing Range</span>
                    <span className="text-3xl md:text-4xl font-bold text-blue-400 font-[family-name:var(--font-heading)]">
                      $1,000 – $3,000+
                    </span>
                    <span className="text-[11px] text-gray-400 block">Based on complexity & scope</span>
                  </div>
                </div>

                <div className="divide-y divide-neutral-800/80 my-4">
                  {[
                    { title: "User & Role Management", desc: "Granular access control (RBAC), multi-level permissions, and secure login modules." },
                    { title: "Operations & Data Control", desc: "Centralized database management, record handling, and synchronized operational workflows." },
                    { title: "Activity & Performance Tracking", desc: "Real-time audit logs, employee/system activity monitoring, and output metrics." },
                    { title: "Evaluations & Analytics Reports", desc: "Automated statistics, performance evaluations, and customizable PDF export reports." },
                    { title: "Custom Interactive Dashboards", desc: "Tailored admin panels, real-time widget views, and key performance indicators." },
                    { title: "Database & Admin Panel", desc: "Scalable relational schema design, query optimization, and intuitive web admin GUI." },
                    { title: "Process Automation", desc: "Trigger-based notifications, workflow scheduling, and repetitive task automation." },
                    { title: "SaaS Architecture Upgrade", desc: "Possibility to evolve the system into a multi-tenant commercial SaaS product." },
                  ].map((feat, idx) => (
                    <div key={idx} className="py-4 flex items-start md:items-center justify-between gap-4 group hover:bg-blue-600/10 px-3.5 rounded-xl transition-all duration-300">
                      <div className="flex items-start md:items-center gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 md:mt-0" />
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{feat.title}</h4>
                          <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-blue-300 bg-blue-600/20 px-3 py-1 rounded-full border border-blue-500/40 whitespace-nowrap shadow-sm">
                        Included
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-gray-400">
                    Ready to automate your company's core operations? Get a custom technical quote.
                  </p>
                  <a
                    href="#contact"
                    className="py-3 px-6 font-bold text-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all shadow-lg shadow-blue-950/50 whitespace-nowrap"
                  >
                    Request System Analysis
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECTION 4: SAAS SOLUTIONS (OCTACORE - FOOD) */}
          {activeCategory === "saas" && (
            <motion.div
              key="saas-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--font-heading)]">
                  4. Food & Management
                </h2>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Ready-to-use management platforms charged monthly without developing custom software from scratch.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* ESSENTIAL PLAN */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase">
                        Essential
                      </h3>
                      <span className="text-[11px] bg-neutral-800 text-gray-300 px-2.5 py-1 rounded-full font-medium">
                        Small Businesses
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $50
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      For small structures with limited customer volume and standard operational needs.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "Core operational management system",
                        "Standard user role access",
                        "Essential customer records & data tracking",
                        "Standard cloud hosting & daily backups",
                        "Email support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Subscribe to Essential
                    </a>
                  </CardContent>
                </Card>

                {/* BUSINESS PLAN */}
                <Card className="relative h-full flex flex-col text-white border-blue-500/50 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] md:-mt-3 md:mb-3">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase text-white">
                        Business
                      </h3>
                      <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase">
                        POPULAR
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $80
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      For growing businesses requiring higher customer capacity and expanded features.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "All Essential capabilities included",
                        "Expanded customer capacity & volume limit",
                        "Advanced user role permissions",
                        "Enhanced analytics & reports",
                        "Priority email & ticket support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all shadow-lg text-center block"
                    >
                      Subscribe to Business
                    </a>
                  </CardContent>
                </Card>

                {/* COMPLETE PLAN */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase">
                        Complete
                      </h3>
                      <span className="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-full font-semibold">
                        Full Access
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $150
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Unrestricted access to the entire platform and all premium available modules.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "Full system access to all current & future modules",
                        "Maximum customer & record storage limits",
                        "Custom export integrations & reports",
                        "Dedicated priority support line",
                        "Custom configuration assistance",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Subscribe to Complete
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-gray-400 max-w-5xl mx-auto flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>
                  Exact limits on customer count, storage volume, active users, and modules are specified in each plan's technical specification document or service contract.
                </span>
              </div>
            </motion.div>
          )}

          {/* SECTION 5: YEARLY MAINTENANCE & SLA SUPPORT */}
          {(activeCategory === "maintenance" || isYearly) && (
            <motion.div
              key="maintenance-view"
              ref={maintenanceSectionRef}
              id="yearly-maintenance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10 pt-6"
            >
              <div className="text-center max-w-3xl mx-auto mb-10 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight font-[family-name:var(--font-heading)]">
                  Yearly Maintenance Tiers
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* ESSENTIAL MAINTENANCE */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold uppercase">
                        Starter Web Care
                      </h3>
                      <span className="text-xs bg-neutral-800 text-gray-300 px-2.5 py-1 rounded-full font-semibold">
                        Websites
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $25
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month ($300 / year)</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Essential security, backup, and uptime monitoring for starter showcase websites.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "Domain & SSL certificate renewal monitoring",
                        "Automated weekly cloud backups",
                        "Security patches & core dependency updates",
                        "99.9% uptime monitoring & alert system",
                        "Up to 2 minor content edits per month",
                        "Email technical support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Select Starter Maintenance
                    </a>
                  </CardContent>
                </Card>

                {/* BUSINESS MAINTENANCE */}
                <Card className="relative h-full flex flex-col text-white border-blue-500/50 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] md:-mt-3 md:mb-3">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold uppercase text-white">
                        Business Care & SEO
                      </h3>
                      <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold uppercase">
                        MOST POPULAR
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $65
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month ($800 / year)</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Comprehensive care including active performance optimization, GEO/SEO upkeep, and bug fixes.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "Everything in Starter Web Care",
                        "Daily automated database & file backups",
                        "Monthly speed & performance optimization",
                        "Quarterly GEO & AI Search algorithm adjustments",
                        "Active malware scanning & immediate bug resolution",
                        "Up to 5 content or feature updates per month",
                        "Priority email & phone support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all shadow-lg text-center block"
                    >
                      Select Business Care
                    </a>
                  </CardContent>
                </Card>

                {/* ENTERPRISE SLA SUPPORT */}
                <Card className="relative h-full flex flex-col text-white border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
                  <CardHeader className="text-left flex-none space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold uppercase">
                        Enterprise SLA Support
                      </h3>
                      <span className="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-full font-semibold">
                        SLA Guaranteed
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white">
                        $150+
                      </span>
                      <span className="text-gray-400 text-xs ml-2 font-medium">/ month ($1,800+ / year)</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Dedicated SLA engineering, zero-downtime backups, and custom feature evolutions.
                    </p>
                  </CardHeader>

                  <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {[
                        "Everything in Business Care",
                        "24/7 Real-time server & API monitoring",
                        "Dedicated Account Engineer (< 2h response SLA)",
                        "Cloud infrastructure scaling & load balancing",
                        "Quarterly custom feature enhancements",
                        "Zero-downtime database replication & disaster recovery",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="w-full py-3 px-4 font-bold text-xs rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-all text-center block"
                    >
                      Request SLA Maintenance
                    </a>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 6: GENERAL PRICING CONDITIONS & TERMS */}
        <div className="mt-20 pt-12 border-t border-neutral-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white uppercase font-[family-name:var(--font-heading)] tracking-wide">
              5. General Pricing Conditions & Policies
            </h3>
            <p className="text-gray-400 text-xs mt-2">
              Standard enterprise operating procedures and transparent billing guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center gap-2 justify-center text-blue-400 mb-2">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Currency & Quotes</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                All prices are expressed in US Dollars (USD). Custom bespoke projects receive a formal itemized quote following an in-depth needs analysis. Costs vary based on system complexity, integrations, hosting, and security standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center gap-2 justify-center text-blue-400 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Licenses & Store Fees</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Third-party API licenses, external subscriptions, domain registration, cloud hosting, and mobile store developer publishing fees are billed separately unless explicitly included in the validated quote.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center gap-2 justify-center text-blue-400 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">IP Rights & Timelines</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Source code rights, IP ownership, and licensing conditions are explicitly specified in each project contract. Delivery timelines are set per agreed milestones; requests outside validated scope may incur additional billing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
