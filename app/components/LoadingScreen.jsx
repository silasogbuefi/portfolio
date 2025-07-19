import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"
        />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Victor Adebayo
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="w-64 h-2 bg-gray-300 rounded-full mx-auto"
        >
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 dark:text-gray-400 mt-4"
        >
          Loading... {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 