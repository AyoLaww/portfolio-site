"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"

function ProjectCard({
  index,
  title,
  description,
  href,
  githubHref,
  logoSrc,
  screenshotSrc,
}: {
  index: string
  title: string
  description: string
  href: string
  githubHref: string
  logoSrc: string
  screenshotSrc: string
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div 
      className="group block space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-md border border-border/10 bg-muted/10 relative">
          <Image
            src={logoSrc}
            alt={`${title} logo`}
            width={800}
            height={600}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <Image
            src={screenshotSrc}
            alt={`${title} screenshot`}
            width={800}
            height={600}
            className={`h-full w-full object-cover transition-all duration-300 absolute inset-0 ${
              isHovered ? 'opacity-100 scale-[1.03]' : 'opacity-0 scale-100'
            }`}
          />
        </div>
      </Link>
      <div className="text-[14px] font-doto text-muted-foreground">{index}</div>
      <div className="flex items-center gap-2">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-doto text-foreground hover:underline underline-offset-4"
        >
          {title}
        </Link>
        <Link
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </Link>
      </div>
      <div className="text-[11px] text-muted-foreground font-figtree">{description}</div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14 border-t border-border/10">
      <SectionHeading eyebrow="Projects" title="" />
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <ProjectCard
          index="01"
          title="Employtrack"
          description="Employtrack is a job seeker's management tool designed to streamline the job application process. It helps users organize job listings, and track application statuses."
          href="https://employtrack.vercel.app/"
          githubHref="https://github.com/AyoLaww/employtrack"
          logoSrc="/images/employtrack_logo.png"
          screenshotSrc="/images/employtrack_homepage.png"
        />
        
      </div>
    </section>
  )
}