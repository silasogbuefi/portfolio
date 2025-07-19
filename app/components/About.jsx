import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='about' className='w-full relative py-10 scroll-mt-20 flex items-center justify-center min-h-[80vh]'>
      {/* Blurred Profile Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={assets.pic} 
          alt='Victor Adebayo blurred background' 
          fill 
          className="object-cover w-full h-full opacity-80 dark:opacity-50" 
          style={{zIndex: 0}}
        />
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
      </div>
      {/* Section Content */}
      <div className="relative z-10 w-full px-2 md:px-[8%]">
        <motion.h2
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 0.5}}
          className='text-center text-5xl font-ovo'>About Me</motion.h2>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
          className='w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20 my-10 md:my-20'>
          {/* Content */}
          <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className="flex-1 w-full max-w-3xl mx-auto">
            <p className='mb-10 max-w-3xl font-Ovo text-lg text-gray-800 dark:text-gray-200 text-center md:text-left leading-relaxed'>
              I'm a product strategist who bridges the gap between technical innovation and business impact. Starting in fintech, I've evolved into a dynamic problem-solver who thrives in fast-paced environments where ideas transform into impactful products overnight. My superpower? Turning complex challenges into elegant solutions while keeping teams energized and focused. Whether I'm architecting workflow automations, optimizing customer success processes, or leading cross-functional teams, I bring both technical precision and infectious enthusiasm to every project. I believe the best products come from teams that work hard, laugh often, and never stop pushing boundaries.
            </p>
            {/* Info Cards */}
            <motion.ul 
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } }
              }}
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto md:mx-0'>
              {infoList.map(({icon, iconDark, title, description}, index)=>(
                <motion.li 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)"
                  }}
                  className='border border-white/30 dark:border-white/20 rounded-2xl p-6 cursor-pointer bg-white/60 dark:bg-black/40 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group'>
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                  </motion.div>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300'>{title}</h3>
                  <p className='text-gray-600 text-sm dark:text-white/80 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>
            {/* Tools */}
            <motion.h4
              initial={{y: 20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.7, duration: 0.5}}
              className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-center md:text-left'>
              Tools I Use
            </motion.h4>
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 0.9, duration: 0.3}}
              className='flex flex-wrap items-center gap-3 sm:gap-5 justify-center md:justify-start'>
              {toolsData.map((tool, index)=>(
                <motion.li whileHover={{scale: 1.1}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white/60 dark:bg-black/40 backdrop-blur-lg' key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About