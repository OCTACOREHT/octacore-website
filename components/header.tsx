"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Carrière", href: "/carriere" },
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
          <Image
            src="/Horizontal-lockup%20V2.png"
            alt="Octacore"
            width={180}
            height={70}
            className="h-auto w-[150px] sm:w-[180px]"
            priority
          />
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
        <div className="lg:hidden fixed inset-0 bg-[#03011E]/95 backdrop-blur-xl z-40 overflow-hidden px-6 pt-20 pb-10">
          <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Image
                src="/Horizontal-lockup%20V2.png"
                alt="Octacore"
                width={140}
                height={60}
                className="h-auto w-[140px]"
                priority
              />
              <Button
                variant="ghost"
                className="text-white hover:text-[#2382FF] px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 flex items-center justify-between text-base font-medium border transition-all ${
                      isActive
                        ? 'border-[#2382FF] bg-[#0030FF]/20 text-white'
                        : 'border-white/10 bg-white/5 text-white/80 hover:border-[#2382FF]/50 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-white/50">→</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">Débuter projet</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/services">Voir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
