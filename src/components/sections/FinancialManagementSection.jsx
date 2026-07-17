import { motion } from "framer-motion"
import { PieChart, ArrowUpRight, ArrowDownRight, IndianRupee, FileSpreadsheet, Download } from "lucide-react"
import { Button } from "../common/Button"

export function FinancialManagementSection() {
  const kpis = [
    { title: "Total Income", value: "₹ 1,24,500", trend: "+12.5%", isPositive: true },
    { title: "Total Expense", value: "₹ 42,300", trend: "-2.4%", isPositive: true },
    { title: "Varisankhya Dues", value: "₹ 15,200", trend: "+5.1%", isPositive: false },
  ]

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col gap-6 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold w-max border border-emerald-100 dark:border-emerald-800/50">
              <PieChart className="w-4 h-4" />
              Financial Management
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Complete Financial <br/>Transparency.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Record incomes, track expenses, and manage Varisankhya collections with precision. Generate audit-ready financial statements in just a few clicks.
            </p>
            
            <div className="space-y-4 mt-4">
              {[
                { title: "Income & Expense Tracking", desc: "Categorize every transaction securely." },
                { title: "Due Based Income Tracking", desc: "Easily monitor pending Varisankhya and send automated reminders." },
                { title: "Audit-Ready Reports", desc: "Export statements as PDF and Excel for your accountants." },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-md">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Dashboard Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-1"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative bg-white dark:bg-gray-950 rounded-[32px] shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-10 p-6 flex flex-col gap-6">
              
              <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                <h3 className="text-lg font-bold">Financial Summary</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-2 border-gray-200 dark:border-gray-800 rounded-lg">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-2 border-gray-200 dark:border-gray-800 rounded-lg">
                    <Download className="w-4 h-4 text-red-500" />
                    PDF
                  </Button>
                </div>
              </div>

              <div className="flex-1 w-full flex overflow-hidden rounded-2xl bg-secondary dark:bg-gray-950">
                <img src="/image/reports.png" alt="Financial Reports" className="w-full h-auto object-cover object-top" />
              </div>

            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  )
}
