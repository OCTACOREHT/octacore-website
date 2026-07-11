"use client"

import { motion, useInView } from "framer-motion"
import React, { ElementType } from "react"

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = "div",
}: {
  children: React.ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<Element>
  customVariants?: any
  className?: string
  as?: ElementType | string
}) {
  const isInView = useInView(timelineRef || { current: null }, { once: true, margin: "-100px" })
  const MotionComponent = motion(as as any)

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
