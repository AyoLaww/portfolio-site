"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Badge } from "./Badge"
import { ScrollArea } from "./ui/scroll-area"
import { Scroll } from "lucide-react"

export default function ResumeFeature(){
    const [open, setOpen]  = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'r' || event.key === 'R'){
                setOpen(true)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    return(
        <>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#27272A] bg-[#171819] px-2 py-1 text-[12px] text-muted-foreground hover:bg-[#1c1d1f] transition-colors align-baseline ">
                <p>Press <span className="text-foreground font-semibold">R</span> to view resume</p>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden">
                            <ScrollArea className="h-screen">
                                <Resume />
                            </ScrollArea>
                            
                    </DialogContent>
                </Dialog>
            </div>
        </>
        
        
    )
}

export function Resume(){
    return(
        <div className="w-full bg-[#0f1011] text-foreground">
            <div className="px-6 py-6 md:px-10 md:py-8">
                <header className="mb-6">
                    <h1 className="text-xl md:text-2xl font-semibold tracking-tight">LAWRENCE</h1>
                    {/* <p className="text-sm text-muted-foreground">Na, Country · your.email@example.com · yoursite.com</p> */}
                </header>

                <Divider />

                <ResumeSection title="Experience">
                    <ResumeItem
                        role="Undergrad tech assistant"
                        company="United States International University"
                        location="On site"
                        dates="2025 – Present"
                        descriptionPoints={[
                            "Assisted with maintenance of the university website.",
                            "Assess and troubleshoot computer problems brought by students, faculty and staff.",
                            "Maintain upkeep of computers, classroom equipment, and 50 printers across campus."
                        ]}
                    />
                    
                </ResumeSection>

                <Divider />

                <ResumeSection title="Technical Skills">
                    <ul className="flex flex-wrap gap-2">
                        <li><Badge iconSrc="/SVGs/Javascript.svg" label="Javascript" /></li>
                        <li><Badge iconSrc="/SVGs/Typescript.svg" label="Typescript" /></li>
                        <li><Badge iconSrc="/SVGs/python 1.svg" label="Python" /></li>
                        <li><Badge iconSrc="/SVGs/postgres.svg" label="PostgreSQL" /></li>
                        <li><Badge iconSrc="/SVGs/HTML.svg" label="HTML/CSS" /></li>
                        <li><Badge iconSrc="/SVGs/React.svg" label="React" /></li>
                        <li><Badge iconSrc="/SVGs/NextJS.svg" label="Next.js" /></li>
                        <li><Badge iconSrc="/SVGs/supabase.svg" label="Supabase" /></li>
                        <li><Badge iconSrc="/SVGs/github.svg" label="Github" /></li>
                        <li><Badge iconSrc="/SVGs/docker.svg" label="Docker" /></li>
                        <li><Badge iconSrc="/SVGs/Prisma.svg" label="Prisma" /></li>
                        <li><Badge iconSrc="/SVGs/visual-studio-code 1.svg" label="VSCode" /></li>
                        <li><Badge iconSrc="/SVGs/Cursor.svg" label="Cursor" /></li>
                        <li><Badge iconSrc="/SVGs/Vercel.svg" label="Vercel" /></li>
                        <li><Badge iconSrc="/SVGs/Postman.svg" label="Postman" /></li>
                    </ul>
                </ResumeSection>

                <Divider />

                <ResumeSection title="Education">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">BSc in Applied computer technology</p>
                        <p className="text-sm text-muted-foreground">United States International University · 2022 – present</p>
                    </div>
                </ResumeSection>
            </div>
        </div>
    )
}

function Divider(){
    return <div className="my-5 h-px w-full bg-foreground/50" />
}

type ResumeSectionProps = {
    title: string
    children: React.ReactNode
}

function ResumeSection({ title, children }: ResumeSectionProps){
    return (
        <section className="py-2">
            <h2 className="mb-3 text-[13px] font-semibold tracking-wide text-muted-foreground uppercase">{title}</h2>
            <div className="space-y-5">
                {children}
            </div>
        </section>
    )
}

type ResumeItemProps = {
    role: string
    company: string
    location: string
    dates: string
    descriptionPoints: string[]
}

function ResumeItem({ role, company, location, dates, descriptionPoints }: ResumeItemProps){
    return (
        <article className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto] md:gap-6">
            <div>
                <p className="text-sm font-medium leading-tight">{role} · {company}</p>
                <p className="text-[12px] text-muted-foreground">{location}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-muted-foreground">
                    {descriptionPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className="text-[12px] text-muted-foreground md:text-right">{dates}</div>
        </article>
    )
}