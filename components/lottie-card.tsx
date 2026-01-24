"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface LottieCardProps {
  src: string
  className?: string
}

export function LottieCard({ src, className }: LottieCardProps) {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
    />
  )
}
