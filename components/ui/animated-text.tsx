"use client"

import React, { useContext, useRef, useEffect } from "react"
import { VerticalCutReveal, VerticalCutRevealRef } from "./vertical-cut-reveal"
import { AnimatedGroupContext } from "./animated-group"
import { useInView } from "framer-motion"

export function AnimatedText({
  children,
  className,
  as: Component = "p",
  staggerDuration = 0.02,
}: {
  children: string | React.ReactNode
  className?: string
  as?: any
  staggerDuration?: number
}) {
  const text = typeof children === "string" ? children : children?.toString() || ""
  const groupRef = useContext(AnimatedGroupContext)
  const revealRef = useRef<VerticalCutRevealRef>(null)
  const fallbackRef = useRef<HTMLDivElement>(null)
  
  const isInView = useInView(groupRef || fallbackRef, { once: true, amount: 0.2, margin: "0px 0px -100px 0px" })

  useEffect(() => {
    if (isInView) {
      revealRef.current?.startAnimation()
    }
  }, [isInView])

  return (
    <Component className={className} ref={!groupRef ? fallbackRef : undefined}>
      <VerticalCutReveal
        ref={revealRef}
        autoStart={false}
        splitBy="lines"
        staggerDuration={staggerDuration}
        staggerFrom="first"
        reverse={true}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        {text}
      </VerticalCutReveal>
    </Component>
  )
}
