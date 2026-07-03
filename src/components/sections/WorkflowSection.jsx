import { motion } from "framer-motion"
import { RevealText } from "../animations/RevealText"

export function WorkflowSection() {
  const cards = [
    {
      title: "Community Management",
      desc: "Manage families, houses, members, blood groups, and household information from one centralized database.",
      tag: "CRM",
      items: ["Centralized Member Database", "Digital Household Registry"]
    },
    {
      title: "Finance Management",
      desc: "Manage Varisankhya, due-based income, hadiya, expenses, and financial reports with complete transparency.",
      tag: "Finance",
      items: []
    },
    {
      title: "Welfare & Certificates",
      desc: "Track welfare applications and seamlessly generate official marriage or death certificates.",
      tag: "Welfare",
      items: []
    }
  ]

  return (
    <section className="py-24 bg-transparent relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
      
      {/* Testimonial Quote */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <RevealText>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full mb-4 inline-block">
            Core Solutions
          </span>
        </RevealText>
        <RevealText>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl leading-tight">
            One Integrated Platform for Every Department
          </h2>
        </RevealText>
      </div>

      {/* 3 Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{card.desc}</p>
            
            {/* Card Graphic fake */}
            <div className="w-full flex-1 bg-gradient-to-b from-blue-50/50 to-blue-100/30 rounded-2xl border border-blue-100/50 flex flex-col items-center justify-center p-4 relative overflow-hidden min-h-[160px]">
               {i === 0 && (
                 <div className="w-full space-y-2">
                   <div className="w-full bg-white p-3 rounded-lg shadow-sm flex items-center justify-between border border-gray-100 text-xs text-left">
                     <span className="font-medium text-gray-700">Find Message in Filter</span>
                   </div>
                   <div className="w-full bg-blue-500 p-3 rounded-lg shadow-sm flex items-center justify-between text-xs text-left text-white">
                     <span className="font-medium">Add to New Workspace</span>
                   </div>
                 </div>
               )}
               {i === 1 && (
                 <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 shadow-md flex items-center justify-center text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-500 shadow-md flex items-center justify-center text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                 </div>
               )}
               {i === 2 && (
                 <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-green-100 text-left">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                     <span className="text-xs font-bold text-gray-900">Mahallu Intelligent</span>
                   </div>
                   <p className="text-[10px] text-gray-500 leading-tight">Mahallu CRM corresponds to HD workspace online in minutes.</p>
                 </div>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-12 border-t border-gray-100">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-extrabold text-gray-900">20K+</span>
          <span className="text-xs text-gray-500 font-medium">Customer stories that have benefited from vast dataset our features.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-extrabold text-gray-900">132+</span>
          <span className="text-xs text-gray-500 font-medium">Companies from various countries have used the features we designed.</span>
        </div>
        <div className="md:border-l md:border-gray-200 md:pl-8">
          <p className="text-lg font-bold text-gray-900 leading-tight">
            No design workflows, deploy AI, integrate data, and make reports.
          </p>
        </div>
      </div>

    </section>
  )
}
