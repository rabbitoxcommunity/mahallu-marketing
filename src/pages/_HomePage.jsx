import { HeroSection } from "../components/sections/HeroSection"
import { TrustSection } from "../components/sections/TrustSection"
import { FeaturesSection } from "../components/sections/FeaturesSection"
import { WhyMahalluSection } from "../components/sections/WhyMahalluSection"
import { ProductGallerySection } from "../components/sections/ProductGallerySection"
import { PublicPortalShowcase } from "../components/sections/PublicPortalShowcase"
import { WorkflowSection } from "../components/sections/WorkflowSection"
import { FAQSection } from "../components/sections/FAQSection"
import { ContactSection } from "../components/sections/ContactSection"

export function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <WhyMahalluSection />
      <ProductGallerySection />
      <PublicPortalShowcase />
      <WorkflowSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
