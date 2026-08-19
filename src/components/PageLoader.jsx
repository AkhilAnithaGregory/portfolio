import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import loadingAnimation from '../assets/loading.json';

// Custom CSS-based loader as fallback + a clean inline Lottie via DotLottiePlayer
// lottie-react v3 uses <Lottie src={...} /> with no animationData prop

const DotLoader = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'var(--accent-color)',
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [1, 0.4, 1],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.15,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

const CodeRingLoader = () => (
  <div style={{ position: 'relative', width: 120, height: 120 }}>
    {/* Outer rotating ring */}
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        border: '3px solid transparent',
        borderTopColor: 'var(--accent-color)',
        borderRightColor: 'var(--accent-color)',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
    {/* Inner counter-rotating ring */}
    <motion.div
      style={{
        position: 'absolute',
        inset: 16,
        border: '3px solid transparent',
        borderBottomColor: '#8b5cf6',
        borderLeftColor: '#8b5cf6',
        borderRadius: '50%',
      }}
      animate={{ rotate: -360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
    />
    {/* Center code symbol */}
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem',
      fontWeight: 800,
      color: 'var(--accent-color)',
      fontFamily: 'monospace',
    }}>
      {'</>'}
    </div>
  </div>
);

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--bg-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              zIndex: 9999,
            }}
          >
            {/* Glowing backdrop */}
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              borderRadius: '50%',
            }} />

            <CodeRingLoader />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '4px',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
              }}>
                LOADING
              </span>
              <DotLoader />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        visibility: isLoading ? 'hidden' : 'visible',
      }}>
        {children}
      </div>
    </>
  );
};

export default PageLoader;
