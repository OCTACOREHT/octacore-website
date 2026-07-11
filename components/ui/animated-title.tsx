"use client"

import React from "react"
import { VerticalCutReveal } from "./vertical-cut-reveal"
import { cn } from "@/lib/utils"

export function AnimatedTitle({
  children,
  className,
  as: Component = "h2",
}: {
  children: string | React.ReactNode
  className?: string
  as?: any
}) {
  const text = typeof children === "string" ? children : children?.toString() || ""

  return (
    <Component className={cn("font-[family-name:var(--font-heading)]", className)}>
      <VerticalCutReveal
        splitBy="words"
        staggerDuration={0.08}
        staggerFrom="first"
        reverse={true}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 40,
        }}
      >
        {text}
      </VerticalCutReveal>
    </Component>
  )
}
