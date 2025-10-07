import * as React from "react"
import { SectionHeading } from "@/components/SectionHeading"

export function About() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14 border-t border-border/10">
      <SectionHeading eyebrow="About me" title="" />
      <div className="mt-4 max-w-[760px] text-[13px] md:text-[14px] leading-6 text-muted-foreground font-figtree space-y-3">
        <p>
          Hey! I’m Law, a software engineer passionate about building products that solve real
          problems. I focus on creating software that bridges cutting-edge technology with
          practical needs, whether that’s automating complex workflows, developing adaptive
          systems, or crafting tools that unlock new possibilities.
        </p>
        <p>
          For me, the most rewarding part of engineering is seeing code make a genuine impact
          and create value for people.
        </p>
      </div>
    </section>
  )
}


