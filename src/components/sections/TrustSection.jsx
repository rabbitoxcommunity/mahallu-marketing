import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Cloud, Users, Shield, Smartphone, Languages, Lock } from "lucide-react"

export function TrustSection() {
  const { t } = useTranslation()

  const trustItems = [
    { key: "cloudBased", icon: <Cloud className="w-5 h-5" /> },
    { key: "multiTenant", icon: <Users className="w-5 h-5" /> },
    { key: "secure", icon: <Shield className="w-5 h-5" /> },
    { key: "mobileFriendly", icon: <Smartphone className="w-5 h-5" /> },
    { key: "bilingual", icon: <Languages className="w-5 h-5" /> },
    { key: "roleBasedAccess", icon: <Lock className="w-5 h-5" /> },
  ]

  return (
    <section className="py-12 bg-background border-b overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Trusted by 400+ Mahallus
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {trustItems.map((item) => (
            <div 
              key={item.key} 
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors cursor-default"
            >
              {item.icon}
              <span className="font-bold text-lg tracking-tight">
                {t(`trust.${item.key}`)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
