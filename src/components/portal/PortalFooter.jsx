import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

const PortalFooter = ({ tenant }) => {
  const { t } = useTranslation();
  const themeColor = tenant?.theme_color || '#2563eb';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        <p>
          &copy; {currentYear} {tenant?.name || t('portal.mahallu')}. All rights reserved.
        </p>
        <p>
          Designed and developed by{' '}
          <a
            href="https://www.instagram.com/rabbitoxcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold hover:underline"
            style={{ color: themeColor }}
          >
            Rabbitox Community
          </a>
        </p>
      </div>
    </footer>
  );
};

export default PortalFooter;
