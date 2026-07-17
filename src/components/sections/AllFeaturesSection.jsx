import { useState } from "react"
import { motion } from "framer-motion"
import { 
  ShieldCheck, Users, CreditCard, PieChart, HeartHandshake, 
  MessageCircle, FileText, BookOpen, Globe, Smartphone, 
  Cloud, CheckCircle2, Sparkles, Check
} from "lucide-react"

export function AllFeaturesSection() {
  const featureCategories = [
    {
      title: "Administration & User Management",
      icon: ShieldCheck,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      features: ["Multi-user management", "Role-based permissions", "Committee management", "Cloud-based access", "Secure login and access control"]
    },
    {
      title: "Family & Member Management",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      features: ["Family registration", "Member registration", "House registration", "Digital membership cards", "Family search and filtering", "Complete household database"]
    },
    {
      title: "Financial Management",
      icon: CreditCard,
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      features: ["Varisankhya (subscription) management", "Income management", "Due-based income tracking", "Automated WhatsApp payment reminders", "Expense management", "Receipt generation", "Payment history"]
    },
    {
      title: "Financial Reports & Audit",
      icon: PieChart,
      color: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      features: ["Income reports", "Expense reports", "Financial statements", "Collection reports", "Trend analysis and insights", "Export to PDF & Excel", "Audit-ready reports"]
    },
    {
      title: "Welfare Management",
      icon: HeartHandshake,
      color: "text-rose-500",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      features: ["Welfare beneficiary management", "Zakat eligibility tracking", "Financial assistance records", "Welfare distribution reports", "Donation utilization reports"]
    },
    {
      title: "WhatsApp Communication",
      icon: MessageCircle,
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
      features: ["Template-based WhatsApp announcements", "Standalone WhatsApp messages", "Due payment reminders", "Event notifications", "Community announcements"]
    },
    {
      title: "Certificate Management",
      icon: FileText,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      features: ["Marriage certificates", "Death certificates", "No Objection Certificates (NOC)", "Custom certificate templates", "Digital verification", "PDF generation and download"]
    },
    {
      title: "Madrasa Management",
      icon: BookOpen,
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      features: ["Student result management", "Exam result publishing", "Class-wise results", "Result download"]
    },
    {
      title: "Public Portal",
      icon: Globe,
      color: "text-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      features: ["Marriage & Death certificate download", "Madrasa exam results", "Announcements & news", "Prayer timings", "Qibla finder", "Daily duas & Selected Surahs", "Blood donor search", "Mahallu contact info", "Downloads & event updates"]
    },
    {
      title: "Mobile Experience",
      icon: Smartphone,
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      features: ["Fully responsive design", "Mobile-friendly interface", "Tablet support", "Progressive Web App (PWA)", "Install on Android & iPhone", "App-like experience", "Offline support (selected features)"]
    },
    {
      title: "Cloud Platform",
      icon: Cloud,
      color: "text-sky-500",
      bg: "bg-sky-50 dark:bg-sky-900/20",
      features: ["100% cloud-based", "Automatic backups", "Secure data storage", "Multi-device access", "No local server required", "Automatic software updates"]
    },
    {
      title: "Coming Soon",
      icon: Sparkles,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-50 dark:bg-fuchsia-900/20",
      features: ["Online payment gateway & UPI", "Mobile apps for Android & iOS", "Event & Volunteer management", "Asset & inventory management", "Qabar management", "AI-powered analytics", "SMS & email notifications", "Multi-language support"]
    }
  ]

  return (
    <section id="all-features" className="py-24 bg-white dark:bg-black relative border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Everything you need, <br className="hidden md:block"/>
            built right in.
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the exhaustive list of features that make Mahallu Connect the most powerful platform for Islamic community management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
