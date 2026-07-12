"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type { ElementType } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ElementType
  index?: number
}

export function ServiceCard({ title, description, icon: Icon, index = 0 }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  // Subtle tilt
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4])

  // Spotlight glow position
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 1.02, 0.73, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Spotlight glow overlay */}
      <motion.div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(35, 130, 255, 0.12) 0%, transparent 65%)`
            : "transparent",
        }}
      />

      {/* Card surface */}
      <div
        className="relative z-20 glass-card rounded-2xl p-6 h-full flex flex-col gap-5 transition-all duration-300"
        style={{
          borderColor: isHovered ? "rgba(35, 130, 255, 0.4)" : "rgba(35, 130, 255, 0.18)",
          boxShadow: isHovered
            ? "0 8px 40px rgba(0, 48, 255, 0.18), 0 0 0 1px rgba(35, 130, 255, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
            : "0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Icon */}
        <motion.div
          className="icon-wrap w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="h-5 w-5 text-[#2382FF]" />
        </motion.div>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
          <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="h-px rounded-full"
          style={{
            background: "linear-gradient(90deg, #0030FF, #2382FF)",
          }}
          animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0.3, opacity: 0.4 }}
          transition={{ duration: 0.3 }}
          transformOrigin="left"
        />
      </div>
    </motion.div>
  )
}
