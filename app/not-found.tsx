import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Wordmark } from "@/components/logotype"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03011E] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#0030FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#2382FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="font-[family-name:var(--font-heading)] font-bold text-8xl md:text-9xl text-[#0030FF]/30">
            404
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Wordmark size="sm" className="h-auto w-auto" />
        </div>

        {/* Message */}
        <h1 className="font-[family-name:var(--font-heading)] font-bold text-2xl md:text-3xl text-white mb-4 uppercase">
          Page non trouvée
        </h1>
        <p className="text-white/70 text-lg mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* CTA - Core Electric Blue */}
        <Button
          asChild
          size="lg"
          className="bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow"
        >
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Retour accueil
          </Link>
        </Button>
      </div>
    </section>
  )
}
