"use client"

import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface HeroLottieSwitcherProps {
  firstSrc: string
  secondSrc: string
  delayMs?: number
  className?: string
  style?: React.CSSProperties
}

export function HeroLottieSwitcher({
  firstSrc,
  secondSrc,
  delayMs = 15000,
  className,
  style,
}: HeroLottieSwitcherProps) {
  const [showSecond, setShowSecond] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSecond(true), delayMs)
    return () => window.clearTimeout(timer)
  }, [delayMs])

  const src = showSecond ? secondSrc : firstSrc

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
