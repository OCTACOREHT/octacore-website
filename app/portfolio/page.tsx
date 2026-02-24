import type { Metadata } from "next"
import { Instagram, Linkedin, Facebook, ArrowUpRight, ExternalLink } from "lucide-react"
import { Wordmark } from "@/components/logotype"
import { ActivePartners } from "@/components/active-partners"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Découvrez nos dernières réalisations et projets. OCTACORE - Smart solutions. Real impact.",
}

const projects = [
  {
    name: "OCTA-IA",
    description: "Octa-AI is a wellness artificial intelligence that accompanies users daily to improve mental, emotional and personal balance through simple and personalized advice.",
    href: "https://octaia.netlify.app/",
    tags: ["Artificial Intelligence", "Web App", "SaaS"],
  }
]

const socialLinks = [
  {
    name: "Instagram",
    handle: "@octacore.ioh",
    description: "View our portfolio",
    href: "https://www.instagram.com/octacore.ioh?igsh=MWlvYmJsZndnYXFzYQ==",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    handle: "OCTACORE",
    description: "Discover our projects",
    href: "https://www.linkedin.com/company/octacoreplus/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    handle: "OCTACORE",
    description: "Follow our news",
    href: "https://www.facebook.com/profile.php?id=61587140361937&locale=fr_FR",
    icon: Facebook,
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] to-[#03011E]" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-clamp-h1 uppercase tracking-tight text-white mb-6 animate-fade-up">
            OUR ACHIEVEMENTS
          </h1>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-up-delay-1">
            Discover our latest projects
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#03011E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl uppercase text-white mb-10 text-center">
            Completed Projects
          </h2>
          
          {/* Project Cards */}
          <div className="grid gap-6 mb-16">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a2e] border border-[#2382FF]/20 rounded-2xl p-6 sm:p-8 hover:border-[#2382FF]/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl text-white uppercase">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[#2382FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-[#0030FF]/10 text-[#2382FF] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#0030FF] font-semibold group-hover:text-[#2382FF] transition-colors">
                    <span className="text-sm">View project</span>
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Message */}
          <div className="text-center mb-12">
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our recent projects are also visible on our social networks. 
              Follow us to discover our latest achievements and stay informed of our news.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a2e] border border-[#2382FF]/20 rounded-xl p-6 hover:border-[#2382FF]/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-base sm:text-lg text-white mb-1 uppercase">
                  {social.name}
                </h3>
                <p className="text-[#2382FF] text-sm mb-2">{social.handle}</p>
                <div className="flex items-center gap-1 text-white/60 text-xs sm:text-sm group-hover:text-white transition-colors">
                  {social.description}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Coming Soon Placeholder */}
          <div className="relative bg-[#0a0a2e] border border-[#2382FF]/20 rounded-2xl p-8 sm:p-12 md:p-16 octagon-pattern">
            <div className="relative z-10 text-center">
              <Wordmark size="sm" className="mx-auto mb-6 h-auto w-auto" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg sm:text-xl text-white mb-3 uppercase">
                More projects coming
              </h3>
              <p className="text-white/60 max-w-md mx-auto text-sm sm:text-base">
                Coming soon: a complete gallery of our achievements with detailed case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (same logos style as homepage) */}
      <ActivePartners />
    </>
  )
}
