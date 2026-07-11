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
  timelineRef?: React.RefObject<Element | null>
  customVariants?: any
  className?: string
  as?: ElementType | string
}) {
  const localRef = React.useRef<Element>(null)
  const targetRef = timelineRef || localRef
  const isInView = useInView(targetRef as any, { once: true, amount: "some", margin: "0px 0px 100px 0px" })
  const MotionComponent = motion(as as any)

  return (
    <MotionComponent
      ref={!timelineRef ? localRef : undefined}
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
