import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      id: "community",
      color: "bg-primary/5 border-primary/20",
      content: (
        <div className="relative h-48 bg-background border rounded-lg shadow-sm overflow-hidden mb-6 mt-4 mx-4">
          <div className="absolute top-4 left-4 right-8 h-12 bg-primary/10 rounded-md border border-primary/20"></div>
          <div className="absolute top-20 left-4 right-12 h-12 bg-muted rounded-md border"></div>
          <div className="absolute top-36 left-4 right-4 h-12 bg-muted rounded-md border"></div>
        </div>
      )
    },
    {
      id: "finance",
      color: "bg-emerald-500/5 border-emerald-500/20",
      content: (
        <div className="relative h-48 mb-6 mt-4 mx-4 flex gap-4">
          <div className="flex-1 bg-background border rounded-lg shadow-sm p-4">
            <div className="w-full h-2 bg-muted rounded mb-2"></div>
            <div className="w-2/3 h-2 bg-muted rounded"></div>
            <div className="mt-8 flex items-end justify-between h-20">
              <div className="w-4 bg-emerald-500/30 rounded-t-sm h-full"></div>
              <div className="w-4 bg-emerald-500/30 rounded-t-sm h-3/4"></div>
              <div className="w-4 bg-emerald-500/30 rounded-t-sm h-1/2"></div>
              <div className="w-4 bg-emerald-500/30 rounded-t-sm h-5/6"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "welfare",
      color: "bg-blue-500/5 border-blue-500/20",
      content: (
        <div className="relative h-48 mb-6 mt-4 mx-4">
          <div className="absolute top-2 left-2 right-2 bottom-2 bg-background border rounded-lg shadow-sm p-4 flex flex-col gap-3">
             <div className="flex gap-3 items-center">
               <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
               <div className="h-2 w-24 bg-muted rounded"></div>
             </div>
             <div className="flex gap-3 items-center">
               <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
               <div className="h-2 w-32 bg-muted rounded"></div>
             </div>
             <div className="flex gap-3 items-center">
               <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
               <div className="h-2 w-20 bg-muted rounded"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "registry",
      color: "bg-purple-500/5 border-purple-500/20",
      content: (
        <div className="relative h-48 mb-6 mt-4 mx-4">
           <div className="absolute top-4 left-4 right-4 bottom-4 bg-background border rounded-lg shadow-sm p-4">
              <div className="w-full h-8 bg-purple-500/10 rounded border border-purple-500/20 mb-4"></div>
              <div className="flex justify-between border-b pb-2 mb-2">
                 <div className="h-2 w-16 bg-muted rounded"></div>
                 <div className="h-2 w-8 bg-muted rounded"></div>
              </div>
              <div className="flex justify-between border-b pb-2">
                 <div className="h-2 w-24 bg-muted rounded"></div>
                 <div className="h-2 w-12 bg-muted rounded"></div>
              </div>
           </div>
        </div>
      )
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Meet Mahallu ERP, your helpful digital assistant!
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether managing funds, records, or members, everything is beautifully integrated into one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl border flex flex-col overflow-hidden bg-muted/10`}
            >
              <div className="pt-8 px-8 pb-4">
                <h3 className="text-2xl font-bold mb-2">
                  {t(`features.${feature.id}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`features.${feature.id}.description`)}
                </p>
              </div>
              
              <div className={`mt-auto pt-4 ${feature.color} border-t`}>
                 {feature.content}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
