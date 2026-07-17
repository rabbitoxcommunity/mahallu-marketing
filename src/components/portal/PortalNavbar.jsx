import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Building2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../common/ThemeToggle';
import '../../i18n/config';

const PortalNavbar = ({ tenant, slug, currentPath = '' }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const qs = slug ? `?t=${slug}` : '';
  const themeColor = tenant?.theme_color || '#2563eb';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === 'ml' ? 'en' : 'ml';
    i18n.changeLanguage(next);
  };

  const navLinks = [
    { to: `/portal${qs}`, path: '/portal', label: t('portal.nav.home', { defaultValue: 'Home' }) },
    { to: `/portal/services${qs}`, path: '/portal/services', label: t('portal.nav.services', { defaultValue: 'Services' }) },
    tenant?.services?.announcements !== false && { to: `/portal/announcements${qs}`, path: '/portal/announcements', label: t('portal.nav.announcements', { defaultValue: 'Announcements' }) },
    tenant?.services?.about_page !== false && { to: `/portal/about${qs}`, path: '/portal/about', label: t('portal.nav.about', { defaultValue: 'About' }) },
    tenant?.services?.contact_page !== false && { to: `/portal/contact${qs}`, path: '/portal/contact', label: t('portal.nav.contact', { defaultValue: 'Contact' }) },
  ].filter(Boolean);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        {/* Logo + Name */}
        <a href={`/portal${qs}`} className="flex items-center gap-3 min-w-0 group">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColor}bb)`, boxShadow: `0 4px 12px ${themeColor}40` }}>
            <Building2 size={18} className="text-white" />
          </div>
          <span className="font-extrabold capitalize text-base text-gray-900 dark:text-white truncate tracking-tight">
            {tenant?.name || t('portal.mahallu')}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 mx-auto">
          {navLinks.map(l => {
            const isActive = l.path === '/portal' ? currentPath === '/portal' : currentPath.startsWith(l.path);
            return (
              <a
                key={l.to}
                href={l.to}
                className={`text-sm font-semibold transition-colors ${isActive
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleLang}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Globe size={16} />
            <span>{i18n.language === 'ml' ? 'EN' : 'ML'}</span>
          </button>

          <ThemeToggle />

          <a href={`/portal/contact${qs}`}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white rounded-full transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: themeColor, boxShadow: `0 4px 14px ${themeColor}60` }}
          >
            Get Involved
          </a>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-[#050505] border-b border-gray-100 dark:border-gray-800 overflow-hidden lg:hidden shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map(l => {
                const isActive = l.path === '/portal' ? currentPath === '/portal' : currentPath.startsWith(l.path);
                return (
                  <a
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-semibold py-2 px-4 rounded-xl transition-colors ${isActive
                        ? 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400'
                      }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
              <a href={`/portal/contact${qs}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center py-3 rounded-xl text-white font-bold"
                style={{ backgroundColor: themeColor }}>
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PortalNavbar;
