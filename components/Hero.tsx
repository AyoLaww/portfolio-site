import * as React from "react"
import { Badge } from "@/components/Badge"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14">
      <div className="space-y-6">
        <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground/80 font-figtree">
          hey, my name is
        </div>
        <h1 className="font-doto text-6xl md:text-7xl lg:text-8xl leading-none">LAWRENCE</h1>
        <Badge label="Software Engineer" />

        <p className="max-w-[680px] text-sm md:text-base text-muted-foreground font-figtree leading-6">
          <span className="text-foreground font-semibold">Full-Stack Software Engineer</span> building solutions that <span className="text-foreground font-semibold">solve real problems </span>
          faced by <span className="text-foreground font-semibold">real people</span>.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link href="https://www.linkedin.com/in/lawrence-simiyu-737b53284/" target="_blank" rel="noopener noreferrer">
            <Badge icon={<Linkedin className="opacity-80" />} label="LinkedIn" />
          </Link>
          <Link href="https://x.com/AyoLaww" target="_blank" rel="noopener noreferrer">
            <Badge icon={<Twitter className="opacity-80" />} label="X" />
          </Link>
          <Link href="https://github.com/AyoLaww/" target="_blank" rel="noopener noreferrer">
            <Badge icon={<Github className="opacity-80" />} label="GitHub" />
          </Link>
        </div>
      </div>
    </section>
  )
}


