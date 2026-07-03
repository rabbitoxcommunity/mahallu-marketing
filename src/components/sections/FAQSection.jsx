import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { RevealText } from "../animations/RevealText"
import { BlurText } from "../animations/BlurText"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { 
      q: "What is Mahallu ERP?", 
      a: "Mahallu ERP is a cloud-based management platform for Mahallu committees that digitizes member records, finance, welfare, certificates, communication, and public services."
    },
    { 
      q: "Does Mahallu ERP support Malayalam?", 
      a: "Yes. The system supports both English and Malayalam." 
    },
    { 
      q: "Can multiple committee members use the system?", 
      a: "Yes. Multiple users can securely access the system according to their assigned roles and permissions." 
    },
    { 
      q: "Is the system mobile friendly?", 
      a: "Yes. Mahallu ERP is fully responsive and works on phones, tablets, and desktops." 
    },
    { 
      q: "Can certificates be generated digitally?", 
      a: "Yes. Official certificates can be generated, printed, downloaded, and verified where applicable." 
    },
    { 
      q: "Can members access services online?", 
      a: "Yes. The Public Portal allows members to access approved digital services such as certificate downloads, exam results, announcements, prayer times, and more."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-transparent relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
      
      <div className="text-center mb-16 flex flex-col items-center">
        <RevealText>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">FAQs</span>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </RevealText>
        <BlurText delay={0.2}>
          <p className="text-gray-500 text-sm mb-6">
            Don't hesitate to reach out to us if you need further assistance.
          </p>
        </BlurText>
        <BlurText delay={0.3}>
          <button className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            Show All Questions
          </button>
        </BlurText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`bg-white rounded-2xl border ${openIndex === index ? 'border-blue-200 shadow-md shadow-blue-500/5' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left bg-transparent focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                   <HelpCircle className="w-4 h-4" />
                </div>
                <span className={`font-semibold text-sm ${openIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>{faq.q}</span>
              </div>
              <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "text-blue-500" : "text-gray-400"}`}>
                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-0 ml-9 text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                    {faq.link && (
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                        <span className="font-semibold text-gray-900 text-xs cursor-pointer hover:text-blue-600 transition-colors">{faq.link}</span>
                        <span className="text-gray-400">→</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
