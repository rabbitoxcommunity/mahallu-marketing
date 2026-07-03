import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: "Can multiple users use the system?", a: "Yes, the system is multi-tenant and supports role-based access for multiple users with different permission levels." },
    { q: "Is Malayalam supported?", a: "Absolutely. The entire system is fully bilingual, supporting both English and Malayalam natively without any third-party translation tools." },
    { q: "Can certificates be downloaded online?", a: "Yes, approved certificates like Marriage and Death certificates can be securely downloaded via the Public Portal." },
    { q: "Can members check results online?", a: "Yes, Madrassa exam results and other public announcements are available on the Public Portal." },
    { q: "Can each Mahallu have separate data?", a: "Yes, each Mahallu has its own isolated workspace ensuring complete data privacy and security." },
    { q: "Does it work on mobile?", a: "The platform is fully responsive and works perfectly on smartphones, tablets, and desktops." },
    { q: "Is cloud hosting included?", a: "Yes, this is a fully managed SaaS platform. Cloud hosting, backups, and maintenance are all included." },
    { q: "Can reports be exported?", a: "All financial, community, and administrative reports can be exported to PDF and Excel formats." },
    { q: "How secure is the data?", a: "We use enterprise-grade encryption and secure authentication to ensure your community's data is always protected." },
    { q: "Can permissions be customized?", a: "Yes, you can create custom roles (e.g., Secretary, Treasurer, Clerk) and assign specific permissions to each module." },
    { q: "Is there a limit on the number of families?", a: "No, our system is scalable and built to handle Mahallus of every size, from 50 to 5000+ families." },
    { q: "How are Varisankhya dues managed?", a: "The system automatically calculates due-based income and tracks pending payments for each family." },
    { q: "Can we track welfare applications?", a: "Yes, the welfare module allows you to receive applications, process approvals, and disburse financial assistance digitally." },
    { q: "Is there a way to send announcements?", a: "Yes, you can send public announcements directly to members via the portal and share updates easily via WhatsApp templates." },
    { q: "How do we handle blood donation requests?", a: "The system includes a Blood Group Management feature and a Blood Donor Search in the Public Portal for emergencies." },
    { q: "Do we need to install any software?", a: "No installation is required. You can access the system securely from any modern web browser." },
    { q: "Can we track daily expenses?", a: "Yes, the finance module includes a comprehensive expense management system with approval workflows." },
    { q: "Is technical support provided?", a: "Yes, we provide dedicated technical support and onboarding assistance for your Mahallu committee." },
    { q: "Are system updates automatic?", a: "Yes, as a cloud-based platform, you will receive all new features and security updates automatically." },
    { q: "How do we get started?", a: "Simply request a demo using the form below, and our team will guide you through the setup process." },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="faq" className="py-24 bg-muted/30 border-y overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Mahallu ERP.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-background border rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-muted/50 transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-muted-foreground leading-relaxed border-t bg-muted/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
