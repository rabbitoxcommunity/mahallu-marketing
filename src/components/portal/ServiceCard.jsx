import React from 'react';
import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

const ServiceCard = ({ icon: Icon, title, to, disabled = false, isActive = false }) => {
  const { t } = useTranslation();

  const inner = (
    <div className={`rounded-2xl p-6 bg-white dark:bg-[#0a0a0a] shadow-[0_2px_15px_rgba(0,0,0,0.02)] h-full min-h-[160px] flex flex-col items-center justify-center text-center relative transition-all duration-300 group ${
      !disabled
        ? 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
        : 'opacity-50 cursor-not-allowed'
    }`}>
      
      <div className={`mb-3 transition-colors duration-300 ${isActive || (!disabled && 'group-hover:text-[var(--portal-theme)]') ? 'text-[var(--portal-theme)]' : 'text-gray-700 dark:text-gray-300'}`}>
        <Icon size={32} strokeWidth={1.25} />
      </div>

      <h3 className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${isActive || (!disabled && 'group-hover:text-[var(--portal-theme)]') ? 'text-[var(--portal-theme)]' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h3>
      
      {disabled && (
         <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-gray-400 mt-2">
           <Lock size={10} />{t('portal.comingSoon')}
         </div>
      )}

      {!disabled && (
        <div className={`text-[11px] font-semibold mt-2.5 transition-all duration-300 text-[var(--portal-theme)] ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <span className="border-b border-[var(--portal-theme)] pb-0.5">View Details</span>
        </div>
      )}
    </div>
  );

  if (disabled) return inner;
  return <a href={to} className="block h-full">{inner}</a>;
};

export default ServiceCard;
