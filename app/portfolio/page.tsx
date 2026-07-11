import type { Metadata } from "next"
import { Instagram, Linkedin, Facebook, ArrowUpRight, ExternalLink } from "lucide-react"
import { Wordmark } from "@/components/logotype"
import { ActivePartners } from "@/components/active-partners"
import { Marquee } from "@/components/ui/3d-testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

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

const partnersTestimonials = [
  {
    name: 'FC Toro',
    username: 'fctoro.com',
    body: 'Sports organization focused on youth development and football excellence.',
    img: '/partners/fctoro.png',
    country: '🇭🇹 Haiti',
  },
  {
    name: 'HBF Haiti',
    username: 'hbfhaiti.org',
    body: 'Haitian Basketball Federation, promoting basketball across the nation.',
    img: '/partners/hbf-logo.png',
    country: '🇭🇹 Haiti',
  },
  {
    name: 'Granpanpan Nations Cup',
    username: 'granpanpannationscup.com',
    body: 'International sports tournament uniting communities.',
    img: '/partners/granpanpan-nation-logo.png',
    country: '🇺🇸 USA',
  },
  {
    name: 'Youth Foundation Haiti',
    username: 'youthfoundationhaiti.org',
    body: 'Empowering the next generation through education and sports.',
    img: '/partners/YFH.png',
    country: '🇭🇹 Haiti',
  },
  {
    name: 'Florida Badgers FCA',
    username: 'floridabadgersfca.com',
    body: 'Elite football academy training future champions.',
    img: '/partners/Badgers.png',
    country: '🇺🇸 USA',
  },
  {
    name: 'Flexipass',
    username: 'www.flexipass.shop',
    body: 'Secure and fast ticketing platform for all your events.',
    img: '/partners/Flexipass.png',
    country: '🇭🇹 Haiti',
  },
  {
    name: 'TaiTai',
    username: 'taïtaï.com',
    body: 'Innovative brand bringing quality products to the local market.',
    img: '/partners/taitai-logo.png',
    country: '🇭🇹 Haiti',
  },
];

function PartnerCard({ img, name, username, body, country }: (typeof partnersTestimonials)[number]) {
  return (
    <Card className="w-64 bg-background border-[#2382FF]/20 hover:border-[#2382FF]/50 transition-colors shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-12 bg-transparent rounded-md flex-shrink-0">
            <AvatarImage src={img} alt={name} className="object-contain" />
            <AvatarFallback className="bg-transparent text-foreground rounded-md">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="text-sm font-semibold text-foreground flex items-center gap-1 truncate">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-[#2382FF] truncate">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-foreground/80 leading-relaxed">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-clamp-h1 uppercase tracking-tight text-foreground mb-6 animate-fade-up">
            OUR ACHIEVEMENTS
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 animate-fade-up-delay-1">
            Discover our latest projects
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl uppercase text-foreground mb-10 text-center">
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
                className="group bg-background border border-[#2382FF]/20 rounded-2xl p-6 sm:p-8 hover:border-[#2382FF]/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl text-foreground uppercase">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[#2382FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
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
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
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
                className="group bg-background border border-[#2382FF]/20 rounded-xl p-6 hover:border-[#2382FF]/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-xl bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors">
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0030FF]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-base sm:text-lg text-foreground mb-1 uppercase">
                  {social.name}
                </h3>
                <p className="text-[#2382FF] text-sm mb-2">{social.handle}</p>
                <div className="flex items-center gap-1 text-foreground/60 text-xs sm:text-sm group-hover:text-foreground transition-colors">
                  {social.description}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection 
        title="Our Partners & Integrations"
        description="We collaborate with a growing network of visionary brands and organizations to deliver excellence."
        testimonials={partnersTestimonials.map(p => ({
          author: { name: p.name, handle: p.username, avatar: p.img },
          text: p.body,
          href: `https://${p.username}`
        }))}
      />

      {/* Partners Section (same logos style as homepage) */}
      <ActivePartners />
    </>
  )
}
