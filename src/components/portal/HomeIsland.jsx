import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FileText, GraduationCap, Droplets, Megaphone, ArrowRight, ChevronRight, X, Calendar, Tag, Paperclip, Sparkles, FileX, Moon } from 'lucide-react';
import ServiceCard from './ServiceCard.jsx';
import AnnouncementCard from './AnnouncementCard.jsx';
import { calcPrayerTimes, getCurrentAndNextPrayer } from '../../lib/prayerTimesUtil';
import { motion, AnimatePresence } from 'framer-motion';
import '../../i18n/config';

const fmtDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

const AnnouncementModal = ({ announcement, onClose }) => {
  if (!announcement) return null;
  const { title, category, body, published_at, attachment_url } = announcement;
  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          className="relative bg-white dark:bg-[#0a0a0a] w-full sm:max-w-xl rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] max-h-[90vh] flex flex-col overflow-hidden border border-gray-100 dark:border-white/10"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative flex items-start justify-between gap-4 p-8 pb-4">
            <div className="flex-1 min-w-0">
              {category && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-4">
                  <Tag size={10} />{category}
                </span>
              )}
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">{title}</h2>
              {published_at && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mt-3">
                  <Calendar size={12} />{fmtDate(published_at)}
                </div>
              )}
            </div>
            <button onClick={onClose} className="flex-shrink-0 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <div className="overflow-y-auto p-8 pt-4 flex-1 relative">
            {body ? (
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-medium">{body}</p>
            ) : (
              <p className="text-sm text-gray-400 italic">No content available.</p>
            )}
          </div>
          {attachment_url && (
            <div className="p-8 pt-4 border-t border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/50">
              <a href={attachment_url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
                <Paperclip size={16} />View Attachment
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

const HomeIsland = ({ tenant, slug, announcements = [] }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const themeColor = tenant?.theme_color || '#2563eb';
  const [selected, setSelected] = useState(null);
  
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState({ current: null, next: null });

  React.useEffect(() => {
    const loc = tenant?.prayer_location;
    if (loc?.latitude && loc?.longitude) {
      try {
        const now = new Date();
        const t = calcPrayerTimes(loc.latitude, loc.longitude, now, loc.method || 'MWL');
        setPrayerTimes(t);
        setCurrentPrayer(getCurrentAndNextPrayer(t));
      } catch {}
    }
  }, [tenant, lang]);

  const svc = tenant?.services || {};
  const q = slug ? `?t=${slug}` : '';

  const services = [
    { id: 'marriage_certificate', icon: FileText, title: t('portal.services.marriageCert', { defaultValue: 'Marriage Certificate' }), description: t('portal.services.marriageCertDesc', { defaultValue: 'Apply for marriage certificate online' }), to: `/portal/services/marriage-certificate${q}`, color: 'blue' },
    { id: 'death_certificate', icon: FileX, title: t('portal.services.deathCert', { defaultValue: 'Death Certificate' }), description: t('portal.services.deathCertDesc', { defaultValue: 'Apply online' }), to: `/portal/services/death-certificate${q}`, color: 'purple' },
    { id: 'results', icon: GraduationCap, title: t('portal.services.results', { defaultValue: 'Madrasa Results' }), description: t('portal.services.resultsDesc', { defaultValue: 'Check student exam results' }), to: `/portal/services/results${q}`, color: 'purple' },
    { id: 'blood_donor', icon: Droplets, title: t('portal.services.bloodDonor', { defaultValue: 'Blood Donor' }), description: t('portal.services.bloodDonorDesc', { defaultValue: 'Find or register as a blood donor' }), to: `/portal/services/blood-donor${q}`, color: 'red' },
    { id: 'announcements', icon: Megaphone, title: t('portal.services.announcements', { defaultValue: 'Announcements' }), description: t('portal.services.announcementsDesc', { defaultValue: 'Latest news and updates' }), to: `/portal/announcements${q}`, color: 'green' },
    { id: 'islamic_services', icon: Moon, title: t('portal.services.islamicServices', { defaultValue: 'Islamic Services' }), description: t('portal.services.islamicServicesDesc', { defaultValue: 'Prayer times, Qibla & library' }), to: `/portal/services/islamic-services${q}`, color: 'green' },
  ];

  return (
    <>
      {selected && <AnnouncementModal announcement={selected} onClose={() => setSelected(null)} />}

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between min-h-[480px]"
               style={{ 
                 backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url('https://images.pexels.com/photos/38498729/pexels-photo-38498729.jpeg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundColor: themeColor 
               }}>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay pointer-events-none"></div>
            
            <div className="relative z-10 w-full md:w-1/2 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
              >
                {t('portal.hero.welcome', { defaultValue: 'Welcome to' })} <br />
                Mahallu Portal
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-lg text-white/90 max-w-lg font-medium leading-relaxed mb-10"
              >
                {t('portal.hero.subtitle', { mahallu: tenant?.name || 'your Mahallu', defaultValue: `Access official services, announcements and information from ${tenant?.name || 'your Mahallu'}.` })}
              </motion.p>
              
            </div>
            
            <div className="relative z-10 w-full md:w-1/2 mt-12 md:mt-0 flex justify-end pointer-events-none">
                {/* Abstract illustration/placeholder */}
                <div className="w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl absolute right-10"></div>
                <div className="w-[200px] h-[200px] bg-white/30 rounded-full blur-2xl absolute top-10 right-20"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        
        {/* SERVICES GRID (Featured Topics) */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight" style={{ color: themeColor }}>
              Featured Topics
            </h2>
            <a href={`/portal/services${q}`} className="px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
               style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
              Show all
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <ServiceCard {...s} disabled={svc[s.id] === false} isActive={i === 1} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRAYER TIMES */}
        {prayerTimes && (
          <section className="mb-20">
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
               
               {/* Left: Times */}
               <div className="w-full md:w-1/2 relative z-10">
                  <h2 className="text-2xl font-extrabold mb-8 tracking-tight" style={{ color: themeColor }}>
                    {t('portal.islamic.prayerTimes', { defaultValue: 'Prayer Times' })}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { key: 'fajr', nameEn: 'Fajr', nameMl: 'ഫജ്ർ' },
                       { key: 'sunrise', nameEn: 'Sunrise', nameMl: 'സൂര്യോദയം' },
                       { key: 'dhuhr', nameEn: 'Dhuhr', nameMl: 'ദുഹ്ർ' },
                       { key: 'asr', nameEn: 'Asr', nameMl: 'അസ്ർ' },
                       { key: 'maghrib', nameEn: 'Maghrib', nameMl: 'മഗ്രിബ്' },
                       { key: 'isha', nameEn: 'Isha', nameMl: 'ഇശ' },
                     ].map(pt => {
                       const isNext = currentPrayer.next === pt.key;
                       return (
                         <div key={pt.key} className={`flex items-center border rounded-lg overflow-hidden h-10 transition-colors ${isNext ? 'border-orange-200 dark:border-orange-800/50' : 'border-gray-100 dark:border-gray-800'}`}>
                           <div className={`flex-1 px-4 flex items-center text-sm font-bold h-full ${isNext ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
                             {lang === 'ml' ? pt.nameMl : pt.nameEn}
                           </div>
                           <div className={`flex-1 px-4 flex items-center text-sm font-bold border-l h-full ${isNext ? 'bg-white dark:bg-[#050505] text-orange-600 border-orange-200 dark:border-orange-800/50' : 'bg-white dark:bg-[#050505] text-gray-900 dark:text-white border-gray-100 dark:border-gray-800'}`}>
                             {prayerTimes[pt.key]?.display || '--:--'}
                           </div>
                         </div>
                       );
                     })}
                  </div>
               </div>

               {/* Right: Location & Current */}
               <div className="w-full md:w-1/3 relative z-10 md:text-left flex flex-col justify-center">
                  <div className="text-xl font-bold" style={{ color: themeColor }}>
                    {tenant?.prayer_location?.city || tenant?.name}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-6">
                    {t('portal.islamic.subtitle', { defaultValue: 'Live Prayer Times' })}
                  </div>
                  
                  {currentPrayer.next && prayerTimes[currentPrayer.next] && (
                    <div className="flex items-baseline gap-2">
                      <div className="text-5xl font-extrabold text-orange-500 tracking-tight">
                        {prayerTimes[currentPrayer.next].display}
                      </div>
                      <div className="text-sm font-bold" style={{ color: themeColor }}>
                        {t('portal.islamic.nextPrayer', { defaultValue: 'Next' })}
                      </div>
                    </div>
                  )}
               </div>

               {/* Decorative Sun */}
               <div className="absolute right-0 bottom-0 pointer-events-none w-40 h-40">
                  <div className="w-32 h-32 bg-orange-400/80 rounded-full absolute -right-10 top-20 blur-md"></div>
                  <div className="w-[120%] h-20 bg-emerald-50 absolute bottom-0 left-[-10%] rounded-t-full rotate-2"></div>
               </div>
            </div>
          </section>
        )}

        {/* LATEST ANNOUNCEMENTS */}
        {announcements.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight" style={{ color: themeColor }}>Latest Announcements</h2>
              <a href={`/portal/announcements${q}`} className="px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                 style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
                Show all
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {announcements.map((a, i) => (
                <motion.div
                  key={a._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <AnnouncementCard announcement={a} onClick={() => setSelected(a)} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT SECTION */}
        {tenant?.about_description && (
          <section className="bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 sm:p-16 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: themeColor }}></div>
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl font-extrabold mb-6 tracking-tight" style={{ color: themeColor }}>About Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 font-medium">
                {tenant.about_description}
              </p>
              <a href={`/portal/about${q}`} className="inline-block px-8 py-3.5 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-md shadow-[var(--portal-theme)]/20" style={{ backgroundColor: themeColor }}>
                {t('portal.readMore', { defaultValue: 'Read our story' })}
              </a>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HomeIsland;
