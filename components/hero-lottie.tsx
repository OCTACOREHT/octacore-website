"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface HeroLottieProps {
  src: string
  className?: string
  style?: React.CSSProperties
}

export function HeroLottie({ src, className, style }: HeroLottieProps) {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
      style={style}
    />
  )
}
