import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Mahallu Connect has completely transformed how we manage our community. The financial transparency it brought to our Varisankhya collection is incredible.",
      name: "Abdul Rahman",
      role: "President, Juma Masjid",
      initials: "AR"
    },
    {
      quote: "Generating marriage and death certificates used to take days. Now it happens instantly. Our committee members love the simplicity of the dashboard.",
      name: "Mohammed Shafi",
      role: "Secretary, Central Mahallu",
      initials: "MS"
    },
    {
      quote: "The WhatsApp integration for payment reminders is a game changer. We've seen a 60% increase in timely Varisankhya payments.",
      name: "Ibrahim Kutty",
      role: "Treasurer, Al-Huda Committee",
      initials: "IK"
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Trusted by Community Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            See what committee members are saying about their experience with Mahallu Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary/50 dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground font-medium leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
