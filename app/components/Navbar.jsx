import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#top', label: 'Home', id: 'top' },
  { href: '#about', label: 'About me', id: 'about' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#works', label: 'Works', id: 'works' },
  { href: '#contact', label: 'Contact me', id: 'contact' },
];

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('top');
    const [menuOpen, setMenuOpen] = useState(false);
    // const sideMenuRef = useRef() // No longer needed

    const openMenu = () => {
        setMenuOpen(true);
    }
    const closeMenu = () => {
        setMenuOpen(false);
    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(scrollY > 50) {
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    }, [])

    // Active link highlight logic
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 120; // offset for navbar height
        let currentSection = 'top';
        for (const link of NAV_LINKS) {
          const section = document.querySelector(link.href);
          if (section && section.offsetTop <= scrollPosition) {
            currentSection = link.id;
          }
        }
        setActiveSection(currentSection);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='header background color' className='w-full'/>
        </div>
        <nav 
            className={`w-full fixed left-0 right-0 px-2 md:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? "bg-white bg-white/50 backdrop-blur-lg shadow-sm dark:bg-(--darkTheme) dark:shadow-white/20" : ""}`}>
            <div className="w-full max-w-3xl mx-auto flex items-center justify-end md:justify-center relative">
              {/* Left: Empty on mobile, nav links on desktop */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    className={`font-Ovo px-4 py-2 rounded-full transition-all duration-300 relative text-gray-800 dark:text-gray-100 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white focus:bg-black/20 dark:focus:bg-white/20 outline-none group
                      ${activeSection === link.id ? 'bg-white text-black dark:bg-white/80 dark:text-black font-bold shadow-md' : ''}`}
                    href={link.href}
                  >
                    {link.label}
                    <span className={`absolute left-1/2 -bottom-1 h-0.5 bg-black dark:bg-black transition-all duration-300 -translate-x-1/2
                      ${activeSection === link.id ? 'w-2/3' : 'w-0'}
                      group-hover:w-2/3 group-focus:w-2/3`}></span>
                  </a>
                ))}
              </div>
              {/* Right: Controls - positioned on right for mobile, next to nav links for desktop */}
              <div className='flex items-center gap-4 md:ml-8'>
                  <button onClick={()=> setIsDarkMode(prev => !prev)}>
                      <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                  </button>
                  {/* Mobile hamburger - only show when menu is closed */}
                  {!menuOpen && (
                    <button onClick={openMenu} className='block md:hidden'>
                      <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu icon' className='w-6' />
                    </button>
                  )}
              </div>

              {/* Mobile menu - positioned relative to navbar container */}
              <ul className={`flex md:hidden flex-col gap-4 py-20 px-4 absolute top-full right-0 w-[70%] max-w-[70%] z-50 h-screen bg-rose-50/95 backdrop-blur-md transition-all duration-500 dark:bg-(--darkHover)/95 dark:text-white overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                  <div className='absolute right-6 top-6' onClick={closeMenu}>
                      <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                  </div>
                     <li>
                          <a className='font-Ovo' onClick={closeMenu} href="#top">Home</a>
                      </li>
                      <li>
                          <a className='font-Ovo' onClick={closeMenu} href="#about">About me</a>
                      </li>
                      <li>
                          <a className='font-Ovo' onClick={closeMenu} href="#services">Services</a>
                      </li>
                      <li>
                          <a className='font-Ovo' onClick={closeMenu} href="#works">Works</a>
                      </li>
                      <li>
                          <a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a>
                      </li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar