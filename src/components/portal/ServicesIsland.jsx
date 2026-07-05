import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, GraduationCap, Droplets, Megaphone, FileX, Moon } from 'lucide-react';
import ServiceCard from './ServiceCard.jsx';
import { motion } from 'framer-motion';
import '../../i18n/config';

const ServicesIsland = ({ tenant, slug }) => {
  const { t } = useTranslation();
  const svc = tenant?.services || {};
  const q = slug ? `?t=${slug}` : '';

  const services = [
    { id: 'marriage_certificate', icon: FileText, title: t('portal.services.marriageCert', { defaultValue: 'Marriage Certificate' }), description: t('portal.services.marriageCertDesc', { defaultValue: 'Apply online' }), to: `/portal/services/marriage-certificate${q}`, color: 'blue' },
    { id: 'death_certificate', icon: FileX, title: t('portal.services.deathCert', { defaultValue: 'Death Certificate' }), description: t('portal.services.deathCertDesc', { defaultValue: 'Apply online' }), to: `/portal/services/death-certificate${q}`, color: 'purple' },
    { id: 'results', icon: GraduationCap, title: t('portal.services.results', { defaultValue: 'Exam Results' }), description: t('portal.services.resultsDesc', { defaultValue: 'Madrasa results' }), to: `/portal/services/results${q}`, color: 'purple' },
    { id: 'blood_donor', icon: Droplets, title: t('portal.services.bloodDonor', { defaultValue: 'Blood Donors' }), description: t('portal.services.bloodDonorDesc', { defaultValue: 'Find a donor' }), to: `/portal/services/blood-donor${q}`, color: 'red' },
    { id: 'announcements', icon: Megaphone, title: t('portal.services.announcements', { defaultValue: 'Announcements' }), description: t('portal.services.announcementsDesc', { defaultValue: 'News & updates' }), to: `/portal/announcements${q}`, color: 'green' },
    { id: 'islamic_services', icon: Moon, title: t('portal.services.islamicServices', { defaultValue: 'Islamic Services' }), description: t('portal.services.islamicServicesDesc', { defaultValue: 'Prayer times, Qibla & library' }), to: `/portal/services/islamic-services${q}`, color: 'green' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center sm:text-left"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          {t('portal.nav.services', { defaultValue: 'Our Services' })}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-medium">
          {t('portal.services.subtitle', { defaultValue: 'Access all essential community services from one central dashboard.' })}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ServiceCard {...s} disabled={s.disabled || svc[s.id] === false} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesIsland;
