import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Button } from "../common/Button"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 text-left space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                {t("hero.headline")}
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full shadow-lg shadow-primary/25 font-semibold">
                {t("hero.requestDemo")}
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base rounded-full border-2 bg-background font-semibold">
                {t("hero.watchDemo")}
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-muted-foreground leading-tight">
                Trusted by<br/><span className="text-foreground font-bold">400+</span> Mahallus
              </div>
            </motion.div>
          </div>

          {/* Isometric Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10, rotateX: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: -15, rotateX: 10 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ perspective: 1000 }}
            className="flex-1 w-full relative h-[400px] lg:h-[600px] hidden md:block"
          >
            {/* Glowing orb behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full"></div>
            
            <div 
              className="absolute top-10 right-0 w-[120%] lg:w-[140%] max-w-[800px] bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
              style={{ transform: "rotateY(-15deg) rotateX(10deg) rotateZ(-2deg)", transformStyle: "preserve-3d" }}
            >
              {/* Fake Window Controls */}
              <div className="h-10 border-b border-border/50 bg-muted/30 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
              </div>
              
              {/* Fake Dashboard Content */}
              <div className="p-6 h-[500px] flex gap-6 bg-background">
                {/* Sidebar */}
                <div className="w-48 border-r border-border/50 space-y-4">
                  <div className="h-6 w-32 bg-primary/10 text-primary font-bold text-xs flex items-center px-2 rounded">Dashboard</div>
                  <div className="h-6 w-24 bg-muted/50 rounded"></div>
                  <div className="h-6 w-28 bg-muted/50 rounded"></div>
                  <div className="h-6 w-20 bg-muted/50 rounded"></div>
                  <div className="h-6 w-32 bg-muted/50 rounded"></div>
                </div>
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-48 bg-foreground/5 rounded-md"></div>
                    <div className="h-8 w-24 bg-primary/20 rounded-full"></div>
                  </div>
                  
                  {/* Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 bg-muted/30 rounded-xl border border-border/50 p-4">
                      <div className="h-4 w-20 bg-muted mb-4 rounded"></div>
                      <div className="h-8 w-32 bg-foreground/10 rounded"></div>
                    </div>
                    <div className="h-28 bg-primary/5 rounded-xl border border-primary/20 p-4">
                       <div className="h-4 w-20 bg-primary/30 mb-4 rounded"></div>
                       <div className="h-8 w-32 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Graph */}
                  <div className="h-48 bg-muted/20 rounded-xl border border-border/50 flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 85, 100, 60].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
