import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/carriere" },
  { name: "Contact", href: "/contact" },
]

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/octacore.ht?igsh=eWR1aGVwdHhsdXB4&utm_source=qr", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/octacoreplus/?viewAsMember=true", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587140361937&locale=fr_FR", icon: Facebook },
  { name: "Email", href: "mailto:info@octacore.com", icon: Mail },
]

const contacts = [
  { label: "", value: "info@octacore.com", href: "mailto:info@octacore.com" },
  { label: "Phone", value: "+509 4473-2152", href: "tel:+50944732152" },
  { label: "Phone", value: "+509 3794-7597", href: "tel:+50937947597" },
  { label: "Office", value: "Port-au-Prince, Haiti" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-[#2382FF]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 mb-14">
          <div className="brand-glass rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-foreground/60 uppercase tracking-[0.2em] text-xs">Let's talk about your project</p>
              <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-foreground leading-tight">
                A challenge to frame? We'll get back to you with a clear plan.
              </h3>
              <p className="text-foreground/70">
                Give us a few lines about your context and priorities. We prepare a quick proposal
                with milestones, responsible parties and deadlines.
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
                className="border-foreground/10 text-foreground hover:bg-foreground/5 px-6 py-6 w-full sm:w-auto"
              >
                <Link href="/portfolio">See our achievements</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 pb-12">
          <div className="space-y-4">
            <Image
              src="/horizontal-lockup-v1.png"
              alt="Octacore"
              width={200}
              height={80}
              className="h-auto w-[200px]"
            />
            <p className="text-foreground/70 text-sm leading-relaxed max-w-md">
              Cutting-edge digital solutions designed for performance, security and growth. We deliver
              elegant, reliable platforms ready for evolution.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-[#2382FF] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wide uppercase text-sm">Navigation</h4>
            <div className="grid grid-cols-1 gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-[#2382FF] text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <div className="space-y-2 text-foreground/70 text-sm">
              {contacts.map((item) => (
                <p key={item.value}>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#2382FF] transition-colors">
                      {item.label ? `${item.label}: ` : ''}{item.value}
                    </a>
                  ) : (
                    <>
                      {item.label ? `${item.label}: ` : ''}{item.value}
                    </>
                  )}
                </p>
              ))}
            </div>
            <p className="text-foreground/50 text-xs mt-4">Available Monday to Saturday.</p>
          </div>
        </div>

        <div className="border-t border-[#2382FF]/20 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-foreground/50 text-sm">
          <p className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Octacore</span>
          </p>
          <div className="flex items-center gap-3">
            <span className="text-foreground/60">Port-au-Prince, Haiti</span>
            <span className="text-foreground/30">|</span>
            <a className="text-foreground/70 hover:text-[#2382FF]" href="mailto:info@octacore.com">
              info@octacore.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
