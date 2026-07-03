import { motion } from "framer-motion"
import { Button } from "../common/Button"

export function ContactSection() {
  return (
    <section className="pt-32 pb-16 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto rounded-full bg-black border border-white/20 p-2 shadow-[0_0_50px_rgba(16,185,129,0.3)] relative"
          >
             <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20"></div>
             <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V12H9v4.5H7.5V12h-2V7.5h2V6c0-1.66 1.34-3 3-3h1.5v1.5h-1.5c-.83 0-1.5.67-1.5 1.5v1.5h2v1.5h-2v4.5H11z"/></svg>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              From Management to Powerful Community Tools
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Join 400+ Mahallus in revolutionizing community administration and delivering seamless services.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex bg-white/5 border border-white/10 rounded-full p-1 pl-6 focus-within:border-primary/50 focus-within:bg-white/10 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none text-white focus:outline-none flex-1 py-2"
                required
              />
              <Button type="submit" className="rounded-full px-8 py-2 h-auto text-sm font-semibold shadow-none">
                Subscribe
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
