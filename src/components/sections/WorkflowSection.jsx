import { motion } from "framer-motion"

export function WorkflowSection() {
  const stats = [
    { value: "5+", label: "Integrated Modules", desc: "For complete management" },
    { value: "100%", label: "Cloud Based", desc: "Secure and scalable" },
    { value: "24/7", label: "Accessibility", desc: "Available from anywhere" },
  ]

  return (
    <section className="py-24 bg-background border-b">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <h3 className="text-6xl font-extrabold tracking-tighter mb-4 text-foreground">
                {stat.value}
              </h3>
              <p className="font-semibold text-lg text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
