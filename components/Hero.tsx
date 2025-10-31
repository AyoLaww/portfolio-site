import * as React from "react"
import { Badge } from "./ui/badge"
import {Badge as BadgeComponent} from "@/components/Badge"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import MatrixComponent from "./Matrix"
import { ShimmeringText } from "./ui/shimmering-text"

export function Hero() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14">
      <div className="space-y-6">
        <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground/80 font-figtree">
          hey, my name is
        </div>
        {/* <h1 className="font-doto text-6xl md:text-7xl lg:text-8xl leading-none">LAWRENCE</h1> */}
        <MatrixComponent />
        <br />
        <Badge variant="outline"><ShimmeringText text="Software Engineer" /></Badge>

        <p className="max-w-[680px] text-sm md:text-base text-muted-foreground font-figtree leading-6">
          I thrive on <span className="text-foreground font-semibold">building digital products</span> that don’t
          just work, they <span className="text-foreground font-semibold">make people’s lives genuinely easier </span>
          and maybe even <span className="text-foreground font-semibold">spark a little joy</span>.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link href="https://www.linkedin.com/in/lawrence-simiyu-737b53284/" target="_blank" rel="noopener noreferrer">
            <BadgeComponent icon={<Linkedin className="opacity-80" />} label="LinkedIn" />
          </Link>
          <Link href="https://x.com/AyoLaww" target="_blank" rel="noopener noreferrer">
            <BadgeComponent icon={<Twitter className="opacity-80" />} label="X" />
          </Link>
          <Link href="https://github.com/AyoLaww/" target="_blank" rel="noopener noreferrer">
            <BadgeComponent icon={<Github className="opacity-80" />} label="GitHub" />
          </Link>
        </div>
      </div>
    </section>
  )
}


