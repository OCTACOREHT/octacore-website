"use client"

import React, { useRef } from "react"
import { TimelineContent } from "./timeline-animation"
import { cn } from "@/lib/utils"

export const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
}

const AnimatedGroupContext = React.createContext<React.RefObject<Element | null> | null>(null)

export function AnimatedGroup({
  children,
  className,
  showBlueEllipse = false,
}: {
  children: React.ReactNode
  className?: string
  showBlueEllipse?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <AnimatedGroupContext.Provider value={ref}>
      <div className={cn("relative w-full", className)} ref={ref}>
        {showBlueEllipse && (
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-[calc(50%-400px)] top-[-100px] h-[800px] w-[800px] flex-none rounded-full"
              style={{
                border: "150px solid #2382FF",
                filter: "blur(120px)",
                opacity: 0.1,
              }}
            />
          </div>
        )}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </AnimatedGroupContext.Provider>
  )
}

export function AnimatedItem({
  children,
  className,
  animationNum = 0,
  as = "div"
}: {
  children: React.ReactNode
  className?: string
  animationNum?: number
  as?: React.ElementType | string
}) {
  const groupRef = React.useContext(AnimatedGroupContext)
  
  return (
    <TimelineContent
      as={as}
      animationNum={animationNum}
      timelineRef={groupRef || undefined}
      customVariants={revealVariants}
      className={className}
    >
      {children}
    </TimelineContent>
  )
}
