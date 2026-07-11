'use client'

import Image from "next/image"

const partners = [
  { name: "FC Toro", logo: "/partners/fctoro.png" },
  { name: "Fulmoun", logo: "/partners/fulmoun.png" },
  { name: "Snoizz", logo: "/partners/snoizz.png" },
  { name: "Badgers", logo: "/partners/Badgers.png" },
  { name: "Flexipass", logo: "/partners/Flexipass.png" },
  { name: "Granpanpan Nation", logo: "/partners/granpanpan-nation-logo.png" },
  { name: "HBF", logo: "/partners/hbf-logo.png" },
  { name: "TaiTai", logo: "/partners/taitai-logo.png" },
  { name: "YFH", logo: "/partners/YFH.png" },
]

export function ActivePartners() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-foreground/60 uppercase tracking-[0.2em] text-xs mb-3">Our Collaborators</p>
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-foreground">
            Active Partners
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-16 sm:gap-y-12">
          {partners.map((partner) => {
            const isExtraSmall = ['TaiTai', 'Granpanpan Nation'].includes(partner.name);
            return (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className={`w-auto object-contain ${isExtraSmall ? 'h-6 sm:h-8' : 'h-10 sm:h-14'}`}
                priority={false}
              />
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
