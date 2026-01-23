import Image from "next/image"

interface LogotypeProps {
  size?: "sm" | "md" | "lg" | "xl"
  showTagline?: boolean
  className?: string
}

export function Logotype({ size = "md", showTagline = true, className = "" }: LogotypeProps) {
  const sizes = {
    sm: { logo: 32, text: "text-lg", tagline: "text-[8px]" },
    md: { logo: 40, text: "text-xl", tagline: "text-[10px]" },
    lg: { logo: 56, text: "text-2xl", tagline: "text-xs" },
    xl: { logo: 80, text: "text-3xl", tagline: "text-sm" },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="OCTACORE Logo" 
        width={s.logo} 
        height={s.logo}
        className="flex-shrink-0"
        style={{ width: s.logo, height: s.logo }}
        priority
      />
      <div className="flex flex-col">
        <span className={`font-[family-name:var(--font-heading)] font-bold ${s.text} text-white uppercase tracking-tight`}>
          OCTACORE
        </span>
        {showTagline && (
          <span className={`${s.tagline} text-white/70 tracking-wider mt-0.5`}>
            Smart solutions. Real impact.
          </span>
        )}
      </div>
    </div>
  )
}

export function LogotypeText({ size = "xl", className = "" }: { size?: "sm" | "md" | "lg" | "xl" | "hero", className?: string }) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  }
  
  return (
    <span className={`font-[family-name:var(--font-heading)] font-bold ${sizes[size]} text-white uppercase tracking-tight ${className}`}>
      OCTACORE
    </span>
  )
}

export function OctacoreText({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl" | "hero", className?: string }) {
  return <LogotypeText size={size} className={className} />
}
