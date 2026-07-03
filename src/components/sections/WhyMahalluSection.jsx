import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { LayoutDashboard, FileX2, CloudUpload, Smartphone, KeyRound, Languages, ShieldCheck, TrendingUp } from "lucide-react"

export function WhyMahalluSection() {
  const { t } = useTranslation()

  const reasons = [
    { id: "onePlatform", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "paperless", icon: <FileX2 className="w-5 h-5" /> },
    { id: "cloudBased", icon: <CloudUpload className="w-5 h-5" /> },
    { id: "mobileReady", icon: <Smartphone className="w-5 h-5" /> },
    { id: "roleBased", icon: <KeyRound className="w-5 h-5" /> },
    { id: "bilingual", icon: <Languages className="w-5 h-5" /> },
    { id: "secure", icon: <ShieldCheck className="w-5 h-5" /> },
    { id: "scalable", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t("why.title")}
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A complete ecosystem designed specifically for the unique needs of Mahallu committees.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id}
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">
                {t(`why.${reason.id}.title`)}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t(`why.${reason.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
