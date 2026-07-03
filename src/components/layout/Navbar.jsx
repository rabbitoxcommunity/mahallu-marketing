import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"
import { Button } from "../common/Button"
import { ThemeToggle } from "../common/ThemeToggle"
import { LanguageSwitcher } from "../common/LanguageSwitcher"
import { cn } from "../../lib/utils"

export function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.publicPortal"), href: "#portal" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.faq"), href: "#faq" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-background py-5 border-b"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V12H9v4.5H7.5V12h-2V7.5h2V6c0-1.66 1.34-3 3-3h1.5v1.5h-1.5c-.83 0-1.5.67-1.5 1.5v1.5h2v1.5h-2v4.5H11z"/></svg>
            </div>
            <span className="font-bold text-xl tracking-tight">Mahallu ERP</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button className="rounded-full px-6">{t("nav.requestDemo")}</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground py-2 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-sm font-medium">Language & Theme:</span>
            <div className="flex gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
          <Button className="w-full mt-2 rounded-full">{t("nav.requestDemo")}</Button>
        </div>
      )}
    </header>
  )
}
