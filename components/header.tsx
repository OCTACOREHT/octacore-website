"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logotype } from "@/components/logotype"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }
    
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#03011E]/95 backdrop-blur-md border-b border-[#2382FF]/20' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        {/* Logo - Primary Horizontal Lockup (min 200px width) */}
        <Link href="/" className="min-w-[180px] sm:min-w-[200px]">
          <Logotype size="md" showTagline={true} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isActive ? 'text-[#2382FF]' : 'text-white/80 hover:text-white'}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button
            asChild
            className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
          >
            <Link href="/contact">Débuter projet</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu - Fixed overlay with no scroll */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#03011E] z-40 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-medium transition-colors ${isActive ? 'text-[#2382FF]' : 'text-white hover:text-[#2382FF]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Mobile CTA */}
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs mx-auto mt-6 bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Débuter projet
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
