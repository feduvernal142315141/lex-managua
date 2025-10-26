import { Hero } from "@/components/hero"
import { PracticeAreas } from "@/components/practice-areas"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessTimeline } from "@/components/process-timeline"
import { Testimonials } from "@/components/testimonials"
import { LawyerProfile } from "@/components/lawyer-profile"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyCTA />
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <LawyerProfile />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
