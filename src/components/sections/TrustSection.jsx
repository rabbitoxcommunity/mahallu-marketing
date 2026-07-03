import { motion } from "framer-motion"
import { RevealText } from "../animations/RevealText"

export function TrustSection() {
  const logos = [1, 2, 3, 4, 5, 6]

  return (
    <section className="py-10 bg-transparent border-t border-gray-100 overflow-hidden relative z-10 mt-12 md:mt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          <RevealText delay={0.2}>
            <p className="text-sm font-semibold text-gray-500 whitespace-nowrap">
              Trusted By
            </p>
          </RevealText>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {logos.map((i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="font-bold text-lg tracking-tight">LogoIpsum</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
