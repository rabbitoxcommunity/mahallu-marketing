import { motion } from "framer-motion"
import { Smartphone, Download, CheckCircle2 } from "lucide-react"
import { Button } from "../common/Button"

export function MobileExperienceSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col gap-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-semibold w-max border border-white/20">
              <Smartphone className="w-4 h-4" />
              Mobile Ready
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Your Mahallu in <br/>Your Pocket.
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
              Mahallu Connect is built as a Progressive Web App (PWA). This means members and committee admins can install the app directly on their Android or iOS devices without visiting an app store.
            </p>
            
            <ul className="space-y-4 mt-4">
              {["No App Store downloads required", "Works flawlessly on all screen sizes", "Lightning fast performance", "Secure and private"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Mobile Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 blur-[100px] rounded-full"></div>
            
            {/* Phone Mockups (Two overlapping) */}
            <div className="relative w-full max-w-[400px] h-[500px] flex items-center justify-center">
              
              {/* Back Phone */}
              <div className="absolute right-0 top-10 w-[240px] h-[480px] bg-gray-900 rounded-[36px] shadow-2xl border-[6px] border-gray-800 overflow-hidden transform rotate-[8deg] opacity-60 flex flex-col items-center justify-center">
                 <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
                    <Download className="w-8 h-8 text-gray-500" />
                 </div>
                 <div className="text-white font-semibold">Installing App...</div>
              </div>

              {/* Front Phone */}
              <div className="absolute left-0 top-0 w-[260px] h-[520px] bg-white dark:bg-black rounded-[40px] shadow-2xl border-[8px] border-gray-900 dark:border-gray-800 overflow-hidden z-10 flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-2xl w-[40%] mx-auto z-20"></div>
                
                {/* Screen Content */}
                <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-gray-950 flex flex-col pt-10 pb-6 px-5 relative">
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded bg-primary"></div>
                       <div className="flex flex-col">
                         <div className="font-bold text-sm leading-tight text-gray-900 dark:text-white">Admin Portal</div>
                         <div className="text-[10px] text-gray-500">Mahallu Connect</div>
                       </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                  </div>

                  <div className="bg-primary text-white p-4 rounded-2xl mb-4 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/20 rounded-full blur-lg"></div>
                    <div className="text-xs font-medium opacity-80 mb-1">Total Collection</div>
                    <div className="text-2xl font-bold">₹ 42,500</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {["Members", "Families", "Finance", "Welfare"].map((item, i) => (
                      <div key={i} className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800"></div>
                        <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-gray-100 dark:border-gray-800 shadow-sm flex-1">
                    <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-2 mb-3 last:mb-0">
                         <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 shrink-0"></div>
                         <div className="flex flex-col gap-1 w-full justify-center">
                           <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                           <div className="h-2 w-1/2 bg-gray-100 dark:bg-gray-800 rounded"></div>
                         </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  )
}
