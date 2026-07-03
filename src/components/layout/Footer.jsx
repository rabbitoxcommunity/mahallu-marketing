import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-transparent pt-12 pb-8 border-t border-gray-100 z-20 relative text-gray-500 text-xs">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="flex items-center gap-2">
            <div className="text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V12H9v4.5H7.5V12h-2V7.5h2V6c0-1.66 1.34-3 3-3h1.5v1.5h-1.5c-.83 0-1.5.67-1.5 1.5v1.5h2v1.5h-2v4.5H11z"/></svg>
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-sm">Mahallu ERP</span>
          </div>

          <div className="flex items-center gap-6 font-medium text-xs">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="mailto:info@example.com" className="hover:text-gray-900 transition-colors">info@example.com</a>
            <a href="tel:+91XXXXXXXXXX" className="hover:text-gray-900 transition-colors">+91 XXXXX XXXXX</a>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors text-gray-400">f</div>
             <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors text-gray-400">t</div>
             <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors text-gray-400">in</div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-100/50">
          <p>Mahallu © {new Date().getFullYear()}</p>
          <a href="#" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
            Get the Newsletter <span>→</span>
          </a>
        </div>
        
      </div>
    </footer>
  )
}
