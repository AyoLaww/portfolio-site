import * as React from "react"
import { Badge } from "@/components/Badge"
import { SectionHeading } from "@/components/SectionHeading"

function Group({ title, items }: { title: string; items: { label: string; icon?: string }[] }) {
  return (
    <div className="mb-5">
      <div className="text-[11px] text-muted-foreground mb-2 font-figtree">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <Badge key={it.label} iconSrc={it.icon} label={it.label} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section className="mx-auto max-w-[980px] px-4 md:px-6 py-10 md:py-14 border-t border-border/10">
      <SectionHeading eyebrow="Skills" title="" />
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-[13px] md:text-[14px] text-muted-foreground font-figtree leading-6">
            I use{' '}
            <Badge iconSrc="/SVGs/NextJS.svg" label="Next.js" />{' '}
            as my frontend framework with{' '}
            <Badge iconSrc="/SVGs/tailwind.svg" label="Tailwind CSS" />{' '}
            for styling. I use{' '}
            <Badge iconSrc="/SVGs/postgres.svg" label="PostgreSQL" />{' '}
            as my database of choice deployed on{' '}
            <Badge iconSrc="/SVGs/Vercel.svg" label="Vercel" />{' '}
            with{' '}
            <Badge iconSrc="/SVGs/Drizzle.svg" label="Drizzle" />{' '}
            or{' '}
            <Badge iconSrc="/SVGs/Prisma.svg" label="Prisma" />{' '}
            as my ORM. I also use{' '}
            <Badge iconSrc="/SVGs/supabase.svg" label="Supabase" />{' '}
            when I’m feeling lazy. My IDEs of choice are{' '}
            <Badge iconSrc="/SVGs/visual-studio-code 1.svg" label="VSCode" />{' '}
            and{' '}
            <Badge iconSrc="/SVGs/Cursor.svg" label="Cursor" />.
          </p>
        </div>
        <div>
          <Group
            title="Languages"
            items={[
              { label: "JavaScript", icon: "/SVGs/Javascript.svg" },
              { label: "TypeScript", icon: "/SVGs/Typescript.svg" },
              { label: "HTML", icon: "/SVGs/HTML.svg" },
              { label: "CSS", icon: "/SVGs/CSS.svg" },
              { label: "Python", icon: "/SVGs/python 1.svg" },
              { label: "SQL", icon: "/SVGs/SQL.svg" },
              { label: "Postgres", icon: "/SVGs/postgres.svg" },
            ]}
          />
          <Group
            title="Frameworks"
            items={[{ label: "Next.js", icon: "/SVGs/NextJS.svg" }, { label: "React", icon: "/SVGs/React.svg" }]}
          />
          <Group
            title="Tools"
            items={[
              { label: "Tailwind", icon: "/SVGs/tailwind.svg" },
              { label: "Drizzle", icon: "/SVGs/Drizzle.svg" },
              { label: "Prisma", icon: "/SVGs/Prisma.svg" },
              { label: "Github", icon: "/SVGs/github.svg" },
              { label: "NeonDB", icon: "/SVGs/NeonDB.svg" },
              { label: "Docker", icon: "/SVGs/docker.svg" },
            ]}
          />
          <Group
            title="Platforms"
            items={[{ label: "Vercel", icon: "/SVGs/Vercel.svg" }, { label: "Netlify", icon: "/SVGs/Netlify.svg" }]}
          />
          <Group
            title="Softwares"
            items={[{ label: "VSCode", icon: "/SVGs/visual-studio-code 1.svg" },
              { label: "Cursor", icon: "/SVGs/Cursor.svg" }, 
              { label: "Postman", icon: "/SVGs/Postman.svg" }, 
              { label: "Figma", icon: "/SVGs/Figma.svg" }, 
              { label: "Supabase", icon: "/SVGs/supabase.svg" }]}
          />
          <Group title="No code" items={[{ label: "n8n", icon: "/SVGs/n8n-color 1.svg" }, { label: "Framer", icon: "/SVGs/Framer.svg" }]} />
        </div>
      </div>
    </section>
  )
}


