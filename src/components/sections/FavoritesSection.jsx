import { motion } from "framer-motion"
import { RevealText } from "../animations/RevealText"

export function FavoritesSection() {
  return (
    <section className="py-24 bg-transparent relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
      
      <div className="text-center mb-16 flex flex-col items-center">
        <RevealText>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full mb-4 inline-block">
            Who Is It For?
          </span>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Ideal For Every Community
          </h2>
        </RevealText>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm max-w-lg"
        >
          Mahallu ERP is built for Mahallu Committees, Mosque Management, Juma Masjids, Charitable Trusts, and Islamic Educational Institutions.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-purple-50 rounded-3xl p-8 md:p-10 border border-purple-100/50 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-8">
              "Mahallu ERP is designed with security in mind. It ensures tenant data isolation, role-based permissions, and encrypted communication."
            </h3>
            
            <div className="flex items-center gap-3">
               <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
               <div>
                 <p className="text-sm font-bold text-gray-900">Security First</p>
                 <p className="text-xs text-gray-500">Enterprise-grade protection</p>
               </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-purple-200/50 flex flex-wrap gap-4">
             <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-blue-500"></div> Cloud Backups
             </span>
             <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-purple-500"></div> Authentication
             </span>
             <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-green-500"></div> Isolation
             </span>
          </div>
        </motion.div>

        {/* Right Side small cards */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <div className="flex gap-6 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 bg-cyan-50 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden"
            >
               <img src="https://i.pravatar.cc/300?img=5" className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-full opacity-80 mix-blend-multiply" alt="Person" />
               <div className="relative z-10">
                 <p className="text-sm font-bold text-gray-900 mb-1">Melissa Silva</p>
                 <p className="text-[10px] text-gray-500">Sales Director</p>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 bg-green-50 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden"
            >
               <img src="https://i.pravatar.cc/300?img=9" className="absolute top-0 right-0 w-32 h-32 object-cover rounded-bl-full opacity-80 mix-blend-multiply" alt="Person" />
               <div className="relative z-10">
                 <p className="text-sm font-bold text-gray-900 mb-1">Eliza Wells</p>
                 <p className="text-[10px] text-gray-500">Community Mgr</p>
               </div>
            </motion.div>
          </div>
          
          <div className="flex justify-end gap-2 pr-4">
             <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 shadow-sm">&larr;</button>
             <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50 shadow-sm">&rarr;</button>
          </div>
        </div>

      </div>
    </section>
  )
}
