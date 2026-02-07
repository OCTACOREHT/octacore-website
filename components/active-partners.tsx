'use client'

import Image from "next/image"

const partners = [
  {
    name: "FC Toro",
    logo: "/partners/fctoro.png",
    color: "#FF6B35",
  },
  {
    name: "Fulmoun",
    logo: "/partners/fulmoun.png",
    color: "#2E86AB",
  },
  {
    name: "Youth Foundation Haiti",
    logo: "/partners/youth-foundation-haiti.png",
    color: "#A23B72",
  },
  {
    name: "Snoizz",
    logo: "/partners/snoizz.png",
    color: "#F18F01",
  },
]

export function ActivePartners() {
  return (
    <section className="py-16 sm:py-20 bg-[#03011E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-white/60 uppercase tracking-[0.2em] text-xs mb-3">Our Collaborators</p>
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-white">
            Active Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center h-32 sm:h-40 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.name === "FC Toro" ? 140 : partner.name === "Snoizz" ? 160 : 180}
                height={partner.name === "FC Toro" ? 140 : partner.name === "Snoizz" ? 160 : 180}
                className={`w-auto h-auto max-h-[100%] object-contain transition-all duration-300 ${
                  partner.name === "Fulmoun" || partner.name === "Youth Foundation Haiti"
                    ? "brightness-0 invert"
                    : "grayscale group-hover:grayscale-0"
                }`}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
