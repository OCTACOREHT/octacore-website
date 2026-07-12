'use client'

import Image from "next/image"
import { motion } from "framer-motion"

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
            Clients and Partners We Have Worked With
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-16 sm:gap-y-12">
          {partners.map((partner, index) => {
            const isExtraSmall = ['TaiTai', 'Granpanpan Nation'].includes(partner.name);
            return (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className={`w-auto object-contain ${isExtraSmall ? 'h-6 sm:h-8' : 'h-10 sm:h-14'} transition-all duration-300`}
                priority={false}
              />
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
