"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/carriere" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
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
    } else {
      document.body.style.overflow = ""
    }
    
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-[#2382FF]/20' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        {/* Logo - Primary Horizontal Lockup (min 200px width) */}
        <Link href="/" className="min-w-[180px] sm:min-w-[200px]">
          <Image
            src="/horizontal-lockup-v1.png"
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
            const isActive = mounted && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isActive ? 'text-[#2382FF]' : 'text-foreground/80 hover:text-foreground'}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA removed per request (Start a project) */}

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu - Fixed overlay with no scroll */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 overflow-hidden px-6 pt-20 pb-10">
          <div className="max-w-md mx-auto bg-foreground/5 border border-foreground/10 rounded-3xl p-6 flex flex-col gap-5 shadow-xl">
            <div className="grid grid-cols-1 gap-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 flex items-center justify-between text-base font-medium border transition-all ${
                      isActive
                        ? 'border-[#2382FF] bg-[#0030FF]/20 text-foreground'
                        : 'border-foreground/10 bg-foreground/5 text-foreground/80 hover:border-[#2382FF]/50 hover:text-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-foreground/50">&gt;</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              {/* Removed Start a project button from mobile menu per request */}
              <Button
                asChild
                variant="outline"
                className="w-full border-foreground/10 text-foreground hover:bg-foreground/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/services">View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

