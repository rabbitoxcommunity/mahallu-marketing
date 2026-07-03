import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function ProductGallerySection() {
  const { t } = useTranslation()

  const videos = [
    { title: "Manage your community easily", author: "Abdulla, Secretary" },
    { title: "Automate financial tracking", author: "Mohammed, Treasurer" },
    { title: "Connect with families", author: "Hassan, Committee Member" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            We invite you to explore and see for yourself.
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from committee members who transformed their Mahallu operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] md:aspect-square bg-muted rounded-2xl relative overflow-hidden mb-4 border">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 ml-1" />
                 </div>
              </div>
              <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                &quot;{video.title}&quot;
              </h4>
              <p className="text-sm text-muted-foreground">
                {video.author}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
