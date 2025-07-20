import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
           
            <motion.h2
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity:1}}
                transition={{delay: 0.5, duration: 0.5}}
                className='text-center text-5xl font-ovo'>My Services</motion.h2>
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}  
                className='text-center max-w-3xl mx-auto mt-5 mb-2 --fontOvo'>
                Product specialist, Projects and Operations management, Frontend developer with over 8 years experience across diverse sectors and businesses. Specializing in customer success optimization through workflow automation and process streamlining.
            </motion.p>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
        className="grid grid-cols-(--autoGrid) gap-6 my-10">
            {serviceData.map((service, index)=>(
                <motion.div 
                    whileHover={{scale: 1.05, rotateY: 5}}
                    key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-(--blackShadow) cursor-pointer hover:bg-(--lightHover) hover:-translate-y-1 duration-500 dark:hover:bg-(--darkHover) dark:hover:shadow-(--whiteShadow) group' >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Image src={service.icon} alt={service.title + ' icon'} className='w-10' />
                    </motion.div>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
                       <span className='font-dm-sans'>{service.title}</span>
                    </h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                       <span className='font-outfit'>{service.description}</span>
                    </p>
                    <button
                      className="flex items-center gap-2 text-sm mt-5 font-semibold text-blue-600 hover:underline"
                      onClick={() => setSelectedService(service)}
                      type="button"
                    >
                      read more <Image alt='right arrow icon' src={assets.right_arrow} className='w-4' />
                    </button>
                </motion.div>
            ))}
        </motion.div>
        {/* Modal for service details */}
        {selectedService && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white dark:bg-black rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-xl font-bold text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors z-10"
                onClick={() => setSelectedService(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center pr-8">{selectedService.title}</h3>
                <div className="w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-base">{selectedService.extendedDescription}</p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </motion.div>
  )
}

export default Services