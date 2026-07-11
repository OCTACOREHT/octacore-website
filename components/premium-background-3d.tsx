"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Scene = dynamic(() => import("./premium-background-3d-scene"), {
  ssr: false,
  loading: () => null,
})

export function PremiumBackground3D() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ opacity: 0.85 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  )
}
