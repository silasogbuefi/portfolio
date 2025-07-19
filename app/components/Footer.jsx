import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='mt-20 border-t border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 backdrop-blur-sm px-[10%] py-8'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Social & Email */}
        <div className='flex items-center gap-6 mx-auto font-dm-sans'>
          <a href='mailto:eniolaadebayo24@gmail.com' aria-label='Email' className='text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
            <FaEnvelope />
          </a>
          <a href='https://github.com/silasogbuefi' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='text-xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/victor-adebayo01' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
            <FaLinkedin />
          </a>
        </div>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label='Back to top'
          className='flex items-center gap-2 px-4 py-2 bg-black/80 text-white rounded-full hover:bg-black transition-all duration-300 dark:bg-white/20 dark:hover:bg-white/30 group'
        >
          <span className='text-sm font-medium'>Top</span>
          <FaArrowUp className='text-sm group-hover:-translate-y-1 transition-transform duration-300' />
        </button>
      </div>
      <div className='text-center text-xs text-gray-600 dark:text-gray-400 mt-6 font-outfit'>
        © {year} Victor Adebayo. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer