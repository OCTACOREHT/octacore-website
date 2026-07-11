import Image from "next/image"

interface LogotypeProps {
  size?: "sm" | "md" | "lg" | "xl"
  showTagline?: boolean
  className?: string
}

export function Logotype({ size = "md", showTagline = false, className = "" }: LogotypeProps) {
  const sizes = {
    sm: { lockup: 120, tagline: "text-[9px]" },
    md: { lockup: 150, tagline: "text-[11px]" },
    lg: { lockup: 190, tagline: "text-xs" },
    xl: { lockup: 220, tagline: "text-sm" },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex flex-col leading-none">
        <img
          src="/Horizontal-lockup-white.png"
          alt="Octacore lockup"
          width={s.lockup}
          height={Math.round(s.lockup / 4.2)}
          className="h-auto"
          style={{ width: s.lockup, height: "auto" }}
          loading="eager"
        />
        {showTagline && (
          <span className={`${s.tagline} text-foreground/70 tracking-wide mt-1 uppercase`}>
            Smart solutions. Real impact.
          </span>
        )}
      </div>
    </div>
  )
}

export function LogotypeText({ size = "xl", className = "" }: { size?: "sm" | "md" | "lg" | "xl" | "hero", className?: string }) {
  const map = { sm: "xs", md: "sm", lg: "md", xl: "lg", hero: "hero" } as const
  return <Wordmark size={map[size]} className={className} />
}

export function OctacoreText({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl" | "hero", className?: string }) {
  return <LogotypeText size={size} className={className} />
}

export function Wordmark({
  size = "md",
  className = "",
}: {
  size?: "xs" | "sm" | "md" | "lg" | "hero";
  className?: string;
}) {
  const sizes = { xs: 100, sm: 140, md: 180, lg: 220, hero: 300 }
  const width = sizes[size]
  return (
    <img
      src="/Horizontal-lockup-white.png"
      alt="Octacore"
      width={width}
      height={Math.round(width / 4.2)}
      className={className}
      style={{ width, height: "auto" }}
      loading="eager"
    />
  )
}
