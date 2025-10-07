import * as React from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/80 mb-2 font-figtree">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-doto text-2xl md:text-3xl tracking-tight">{title}</h2>
    </div>
  )
}


