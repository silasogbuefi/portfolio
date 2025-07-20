import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Particles from './Particles'

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

const Header = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        src='/background.mp4'
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/60 dark:bg-black/70 z-10' />
      {/* Floating Particles */}
      <Particles />
      {/* Main Content */}
      <motion.div
        className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 relative z-20 bg-white/60 dark:bg-black/40 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-xl rounded-lg p-8'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className='mt-10'>
          <Image src={assets.profile_img} alt='Victor Adebayo profile photo' className='rounded-full w-32 border-4 border-white/60 dark:border-white/30 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl' />
        </motion.div>
        <motion.h3 
          variants={itemVariants}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-dm-sans text-black dark:text-white'>
          Hi! I'm Victor Adebayo <Image  src={assets.hand_icon} alt='waving hand icon' className='w-6'/>
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          className='text-3xl sm:text-6xl lg:text-[66px] font-ovo font-bold sm:font-normal text-black dark:text-white leading-tight'>
          Product Operator & 
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'>
            Business Creative
          </span>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className='max-w-3xl mx-auto font-outfit text-gray-800 dark:text-gray-200 text-lg leading-relaxed'>
          Transforming ideas into exceptional products that users love. 8+ years crafting customer-centric solutions across fintech, energy, and healthcare. Expert in product strategy, workflow automation, and driving measurable business impact through data-driven innovation.
        </motion.p>
        <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a 
            variants={itemVariants}
            href="#contact" 
            className='group px-10 py-3 border border-white dark:border-white/30 rounded-full bg-black text-white flex items-center gap-2 dark:bg-white/10 dark:text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg dark:hover:bg-white dark:hover:text-black'
          >
            contact me
            <span className='inline-block transition-transform duration-300 group-hover:translate-x-2'>
              {/* Show white arrow by default, dark arrow on hover or when button is white */}
              {assets.right_arrow_white && (
                <span className="block group-hover:hidden dark:group-hover:block">
                  <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </span>
              )}
              {assets.right_arrow && (
                <span className="hidden group-hover:block dark:group-hover:hidden">
                  <Image src={assets.right_arrow} alt='' className='w-4' />
                </span>
              )}
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header