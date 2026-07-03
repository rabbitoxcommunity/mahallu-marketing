import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function PublicPortalShowcase() {
  const { t } = useTranslation()

  const cards = [
    {
      title: "Members",
      desc: "For general community members.",
      highlight: false,
      features: ["Read announcements", "View exam results", "Check prayer times", "Submit complaints", "View blood bank"]
    },
    {
      title: "Families",
      desc: "For registered family heads.",
      highlight: true,
      features: ["All member features", "Pay Varisankhya dues", "Request certificates", "Apply for welfare", "Update family details", "View transaction history"]
    },
    {
      title: "Committees",
      desc: "For internal management.",
      highlight: false,
      features: ["Process requests", "Approve certificates", "Manage finances", "Send notifications", "View reports"]
    }
  ]

  return (
    <section id="portal" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Consider gradually enhancing your community&apos;s digital experience.
          </h2>
          <p className="text-muted-foreground text-lg">
            Mahallu ERP gives everyone the access they need, beautifully tailored to their role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 border ${
                card.highlight 
                  ? "bg-primary/5 border-primary shadow-xl shadow-primary/10 md:-mt-4 md:mb-4 relative" 
                  : "bg-background"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-8 min-h-[40px]">{card.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-semibold transition-colors ${
                card.highlight 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
