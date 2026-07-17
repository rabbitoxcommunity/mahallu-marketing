import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react"

export function DashboardShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            Intuitive Interface
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            A Dashboard designed <br className="hidden md:block"/>
            for <span className="text-blue-500">Clarity and Speed.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a birds-eye view of your entire Mahallu's operations in seconds. Everything you need, exactly where you expect it.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mt-12"
        >
          {/* Main Dashboard UI Mockup */}
          <div className="relative w-full aspect-[16/9] bg-white dark:bg-gray-950 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col z-10">
            {/* Header */}
            <div className="h-12 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-6 w-32 bg-gray-100 dark:bg-gray-800 rounded"></div>
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
            </div>
            
            {/* Body */}
            <div className="flex-1 flex overflow-hidden bg-secondary dark:bg-gray-950">
              <img src="/image/dashboard.png" alt="Dashboard View" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Floating Callouts */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -left-6 top-1/4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Real-time Sync</div>
              <div className="text-xs text-muted-foreground">Always up to date</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -right-6 bottom-1/4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Advanced Analytics</div>
              <div className="text-xs text-muted-foreground">Visual insights</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
