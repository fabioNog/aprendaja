import { Hero } from '@/components/sections/Hero'
import { SeniorsSection } from '@/components/sections/SeniorsSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQSection } from '@/components/sections/FAQSection'
import { MethodologySection } from '@/components/sections/MethodologySection'
import { MathTechSection } from '@/components/sections/MathTechSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SeniorsSection />
      <MathTechSection />
      <HowItWorks />
      <MethodologySection />
      <FAQSection />
    </>
  )
}