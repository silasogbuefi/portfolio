import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = ({isDarkMode}) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='works' className='w-full px-[12%] py-10 scroll-mt-20'>
    
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}} 
        className='text-center text-5xl font-ovo'>Relevant Experience</motion.h2>
        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-2 --fontOvo'>
        A showcase of my most impactful professional experiences and projects, including renewable energy, client success, and full-stack development.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10'>
          {workData.map((work, index) => (
            <motion.div
              variants={cardVariants}
              whileHover={{scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)'}}
              transition={{duration: 0.3}}
              className='bg-white/70 dark:bg-black/40 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden group'
              key={index}
            >
              <div className='w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden'>
                <Image src={work.image} alt={work.title} className='w-full h-full object-cover object-center' />
              </div>
              <div className='flex-1 flex flex-col p-6'>
                <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                  <span className='font-dm-sans'>{work.title}</span>
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-200 mb-2'>
                  <span className='font-outfit'>{work.description}</span>
                </p>
                <p className='text-gray-600 dark:text-gray-300 text-sm flex-1'>
                  <span className='font-outfit'>{work.details}</span>
                </p>
                {work.githubLink && (
                  <a
                    href={work.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-4 inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition'
                  >
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v10.5m0 0H6.75m10.5 0L6.75 6.75" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Work