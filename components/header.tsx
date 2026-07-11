"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScroll, useMotionValueEvent } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/carriere" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

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

  const isPricingPage = pathname === '/pricing'

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen 
          ? 'inset-0 bg-background/95 backdrop-blur-xl' 
          : scrolled 
            ? (isPricingPage ? 'bg-black/90 backdrop-blur-md border-b border-[#2382FF]/20' : 'bg-background/95 backdrop-blur-md border-b border-[#2382FF]/20') 
            : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        {/* Logo - Primary Horizontal Lockup (min 200px width) */}
        <Link href="/" className="min-w-[180px] sm:min-w-[200px]">
          <Image
            src={isPricingPage ? "/horizontal-lockup-v2.png" : "/horizontal-lockup-v1.png"}
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
                className={`text-sm font-medium transition-colors ${isActive ? 'text-[#2382FF]' : (isPricingPage ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground')}`}
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
          className={`lg:hidden p-2 relative z-50 ${isPricingPage ? 'text-white' : 'text-foreground'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu - Scrollable container inside the inset-0 header */}
      {mobileMenuOpen && (
        <div className="lg:hidden overflow-y-auto px-6 pb-10 max-h-[calc(100vh-80px)]">
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
              <Button
                asChild
                variant="outline"
                className="w-full border-foreground/10 text-foreground hover:bg-foreground/5"
              >
                <Link href="/services" onClick={() => setMobileMenuOpen(false)}>View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

