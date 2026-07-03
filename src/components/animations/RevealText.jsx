import { motion } from 'framer-motion';

export const RevealText = ({ children, className = '', delay = 0 }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }} className={className}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
