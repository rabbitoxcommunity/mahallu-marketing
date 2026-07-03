import { motion } from "framer-motion"
import { Button } from "../common/Button"
import { SplitText } from "../animations/SplitText"
import { BlurText } from "../animations/BlurText"
import { RevealText } from "../animations/RevealText"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center text-center">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Pill */}
        <RevealText delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold tracking-wide text-gray-700 mb-8">
            <span className="text-primary font-bold">Mahallu ERP</span>
            <div className="w-[1px] h-3 bg-gray-300"></div>
            <span>Community Management</span>
          </div>
        </RevealText>

        {/* Huge Headline */}
        <div className="max-w-4xl mb-6">
          <SplitText 
            text="Everything Your Mahallu Needs. One Secure Platform." 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#0a0a0a] leading-[1.05]"
            delay={0.1}
          />
        </div>
        
        {/* Subtitle */}
        <BlurText delay={0.5} className="max-w-3xl mb-10">
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Mahallu ERP is a modern cloud-based management platform built specifically for Mahallu committees, mosques, and Islamic community organizations. It helps manage members, families, finance, welfare, marriage and death records, certificates, communication, and public services from one secure system.
          </p>
        </BlurText>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-sm rounded-full bg-[#111] hover:bg-black text-white font-semibold transition-all">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-sm rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-semibold shadow-sm transition-all">
            Learn More
          </Button>
        </motion.div>

        {/* Dashboard Images (3 Overlapping) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto perspective-[2000px] flex justify-center mt-4"
        >
          {/* Left Card */}
          <div className="absolute top-12 left-[10%] w-[45%] h-[80%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden transform -rotate-[6deg] translate-y-4 opacity-90 hidden md:block">
            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 flex flex-col gap-3 opacity-50">
               <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
               <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
               <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          {/* Right Card */}
          <div className="absolute top-12 right-[10%] w-[45%] h-[80%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden transform rotate-[6deg] translate-y-4 opacity-90 hidden md:block">
            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 flex flex-col gap-3 opacity-50">
               <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
               <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
               <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          {/* Center Card (Main) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[60%] h-full bg-white rounded-t-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden z-10">
             <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 w-40 h-4 bg-white border border-gray-200 rounded-sm"></div>
            </div>
            <div className="p-6 md:p-8 flex gap-6 h-full bg-white">
              {/* Sidebar fake */}
              <div className="w-1/4 h-full border-r border-gray-100 flex flex-col gap-4 pr-4 hidden sm:flex">
                <div className="w-full h-6 bg-gray-100 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-50 rounded mt-4"></div>
                <div className="w-5/6 h-4 bg-gray-50 rounded"></div>
                <div className="w-2/3 h-4 bg-gray-50 rounded"></div>
              </div>
              {/* Main content fake */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-48 h-8 bg-gray-800 rounded"></div>
                  </div>
                  <div className="w-32 h-10 bg-blue-500 rounded-lg"></div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-24 bg-gray-50 border border-gray-100 rounded-xl"></div>
                  <div className="flex-1 h-24 bg-gray-50 border border-gray-100 rounded-xl"></div>
                  <div className="flex-1 h-24 bg-gray-50 border border-gray-100 rounded-xl"></div>
                </div>
                <div className="flex-1 w-full bg-blue-50/50 border border-blue-100 rounded-xl mt-2 relative overflow-hidden">
                   {/* fake chart bars */}
                   <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-around px-4 pb-4">
                     <div className="w-8 h-[40%] bg-blue-400 rounded-t-sm"></div>
                     <div className="w-8 h-[70%] bg-blue-500 rounded-t-sm"></div>
                     <div className="w-8 h-[50%] bg-blue-300 rounded-t-sm"></div>
                     <div className="w-8 h-[90%] bg-blue-600 rounded-t-sm"></div>
                     <div className="w-8 h-[30%] bg-blue-200 rounded-t-sm"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
