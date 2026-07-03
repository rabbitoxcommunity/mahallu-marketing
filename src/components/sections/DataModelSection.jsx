import { motion } from "framer-motion"
import { Building2, Activity, Eye, Zap } from "lucide-react"
import { RevealText } from "../animations/RevealText"
import { BlurText } from "../animations/BlurText"

export function DataModelSection() {
  const points = [
    {
      icon: <Building2 className="w-4 h-4 text-blue-500" />,
      title: "Centralized Member Management",
      desc: "Manage families, houses, and members from one centralized database."
    },
    {
      icon: <Activity className="w-4 h-4 text-blue-500" />,
      title: "Transparent Financial Management",
      desc: "Track Varisankhya, income, and expenses with complete clarity."
    },
    {
      icon: <Eye className="w-4 h-4 text-blue-500" />,
      title: "Digital Certificate Generation",
      desc: "Seamlessly issue official marriage and death certificates."
    }
  ]

  return (
    <section className="py-24 bg-transparent relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Content */}
        <div className="flex-1 space-y-8">
          <RevealText>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Why Mahallu ERP?
            </h2>
          </RevealText>
          <BlurText delay={0.2}>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Mahallu ERP replaces manual registers, spreadsheets, and disconnected processes with one integrated platform. Every department works from the same data, improving transparency, accountability, and efficiency.
            </p>
          </BlurText>

          <div className="space-y-6 pt-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex gap-4"
              >
                <div className="mt-1">{point.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{point.title}</h4>
                  <p className="text-xs text-gray-500">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Interactive Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full max-w-md bg-blue-100/50 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white p-6 relative z-10 flex flex-col items-center">
            
            <div className="w-full flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm text-gray-900">Variables</span>
              </div>
            </div>

            <div className="w-full space-y-4 mb-8">
               <div className="flex justify-between items-center text-xs">
                 <span className="text-gray-500 flex items-center gap-2"><Building2 className="w-3 h-3" /> Company</span>
                 <span className="font-medium text-gray-900">20 variables</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <span className="text-gray-500 flex items-center gap-2"><Activity className="w-3 h-3" /> Activity</span>
                 <span className="font-medium text-gray-900">62 types</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                 <span className="text-gray-500 flex items-center gap-2"><Eye className="w-3 h-3" /> Location</span>
                 <span className="font-medium text-gray-900">5 countries</span>
               </div>
            </div>

            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> Connect Now
            </button>
            
          </div>
        </motion.div>

      </div>
    </section>
  )
}
