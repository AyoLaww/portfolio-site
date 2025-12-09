import * as React from "react"
import { SectionHeading } from "@/components/SectionHeading"

export function About() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14 border-t border-border/10">
      <SectionHeading eyebrow="About me" title="" />
      <div className="mt-4 max-w-[760px] text-[13px] md:text-[14px] leading-6 text-muted-foreground font-figtree space-y-3">
        <p>
          Hey, I'm Law, a full-stack developer who builds web applications that people actually use.
          <br />
          <br />
          I work primarily with Next.js, TypeScript, and modern database stacks (Neon, Drizzle, Supabase). My approach is simple: understand the problem deeply, build the solution cleanly, ship it quickly.
          <br />
          <br />
          I'm drawn to problems where technology can eliminate friction, whether that's streamlining
          workflows, automating repetitive tasks, or building tools that just make sense.
          <br />
          <br />
          If you're building something interesting and need someone who ships fast and learns faster, let's talk.
        </p>
      </div>
    </section>
  )
}


