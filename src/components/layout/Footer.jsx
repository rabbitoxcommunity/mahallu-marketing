import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()

  const links = {
    resources: ["Blog", "Media Kit", "Report an Issue", "Privacy Policy", "Terms & Conditions", "Free Resources"],
    products: ["Mahallu ERP", "Public Portal", "Mobile App", "Committee Dashboard", "Welfare Portal", "Donation System"],
    network: ["Facebook", "Instagram", "X (Twitter)", "LinkedIn"]
  }

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V12H9v4.5H7.5V12h-2V7.5h2V6c0-1.66 1.34-3 3-3h1.5v1.5h-1.5c-.83 0-1.5.67-1.5 1.5v1.5h2v1.5h-2v4.5H11z"/></svg>
              </div>
              <span className="font-bold text-xl tracking-tight">Mahallu ERP</span>
            </div>
            <h3 className="text-2xl font-bold leading-tight max-w-[200px]">
              Deliver Interfaces Faster and Smarter with AI
            </h3>
            <p className="text-white/40 text-sm max-w-xs">
              A comprehensive community management platform designed for modern Mahallus.
            </p>
            <p className="text-white/20 text-xs mt-8">
              &copy; {new Date().getFullYear()} Mahallu ERP. All rights reserved.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4">
              {links.resources.map(link => (
                <li key={link}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Products</h4>
            <ul className="space-y-4">
              {links.products.map(link => (
                <li key={link}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-sm">Network</h4>
            <ul className="space-y-4 mb-8">
              {links.network.map(link => (
                <li key={link}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors cursor-pointer">
                  <span className="text-xs">{i}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
      
      {/* Massive Background Text Watermark */}
      <div className="relative w-full overflow-hidden leading-none select-none -mb-4 md:-mb-10 lg:-mb-16 pointer-events-none flex justify-center">
        <h1 className="text-[20vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
          Mahallu
        </h1>
      </div>
      
    </footer>
  )
}
