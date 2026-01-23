import Link from "next/link"
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react"
import { Logotype } from "@/components/logotype"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/octacore.ht/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/octacoreplus/?viewAsMember=true", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587140361937&locale=fr_FR", icon: Facebook },
  { name: "Email", href: "mailto:octacore.haiti@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-[#03011E] border-t border-[#2382FF]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Logotype size="md" showTagline={true} />
            </div>
            <p className="text-white/70 text-sm text-center md:text-left leading-relaxed max-w-xs">
              Solutions numériques de pointe conçues pour la performance, la sécurité et la croissance.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col items-center gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#2382FF] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Contact
            </h3>
            <div className="text-white/70 text-sm text-center md:text-right space-y-2">
              <p>octacore.haiti@gmail.com</p>
              <p>+509 4473-2152</p>
              <p>+509 3794-7597</p>
              <p className="text-white/50 text-xs mt-2">Port-au-Prince, Haïti</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#2382FF] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#2382FF]/20">
          <p className="text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} OCTACORE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
