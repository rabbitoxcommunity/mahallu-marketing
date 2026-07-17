import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "../common/Button"

export function FinalCTASection() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-primary rounded-[40px] overflow-hidden relative text-center px-6 py-20 md:py-32"
        >
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-white/5 rounded-full blur-3xl transform rotate-12"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-white/5 rounded-full blur-3xl transform -rotate-12"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to modernize <br className="hidden md:block"/> your Mahallu?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl font-light">
              Join hundreds of committees already using Mahallu Connect to simplify their operations and engage their community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full h-14 px-8 text-lg font-semibold group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full h-14 px-8 text-lg font-semibold">
                Talk to Sales
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                "No credit card required",
                "14-day free trial",
                "Free data migration"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  {text}
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
