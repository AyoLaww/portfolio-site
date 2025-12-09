import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import ResumeFeature from "@/components/Resume"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <div className="fixed bottom-4 right-4 z-50 hidden lg:block"><ResumeFeature /></div>
      
    </main>
  )
}