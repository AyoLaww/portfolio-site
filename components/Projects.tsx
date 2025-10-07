import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"

function ProjectCard({
  index,
  title,
  description,
  href,
  imageSrc,
}: {
  index: string
  title: string
  description: string
  href: string
  imageSrc: string
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group block space-y-2">
      <div className="aspect-[4/3] overflow-hidden rounded-md border border-border/10 bg-muted/10">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="text-[14px] font-doto text-muted-foreground">{index}</div>
      <div className="text-[13px] font-doto text-foreground group-hover:underline underline-offset-4">
        {title}
      </div>
      <div className="text-[11px] text-muted-foreground font-figtree">{description}</div>
    </Link>
  )
}

export function Projects() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14 border-t border-border/10">
      <SectionHeading eyebrow="Projects" title="" />
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <ProjectCard
          index="01"
          title="USIU Gym Manager"
          description="UGM is a simple gym management system used to manage the University gym."
          href="https://example.com/ugm"
          imageSrc="/window.svg"
        />
        <ProjectCard
          index="02"
          title="Quickvoice"
          description="Quickvoice is a simple and intuitive invoice generator."
          href="https://example.com/quickvoice"
          imageSrc="/globe.svg"
        />
      </div>
    </section>
  )
}


