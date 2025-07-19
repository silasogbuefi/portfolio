import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'
import { motion } from "motion/react"



const Contact = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "62b3868e-f123-4c4b-8ad5-77e4b4c7f311");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div 
      initial= {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className='text-center text-5xl font-ovo'>Reach out!</motion.h2>
        <motion.p
        initial= {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-2 font-outfit'>
            It'll be nice to hear from you! for questions, comments, feedback, Please use the form below.
        </motion.p>

        {/* Resume download button */}
        <motion.div 
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.8, duration: 0.6}}
          className='flex justify-center my-8'>
          <a
            href='/sample-resume.pdf'
            download
            className='group py-2 px-6 border border-gray-300 dark:border-white/30 rounded-full shadow-md transition-all font-semibold text-black dark:text-white flex items-center gap-2 bg-white/80 dark:bg-black/40 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg'>
            Download Resume
            <span className='inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110'>
              {/* Light mode: dark icon by default, light icon on hover */}
              <span className="block dark:hidden">
                <span className="block group-hover:hidden">
                  <Image src={assets.download_icon_dark} alt='' className='w-4' />
                </span>
                <span className="hidden group-hover:block">
                  <Image src={assets.download_icon_light} alt='' className='w-4' />
                </span>
              </span>
              {/* Dark mode: light icon by default, dark icon on hover */}
              <span className="hidden dark:block">
                <span className="block group-hover:hidden">
                  <Image src={assets.download_icon_light} alt='' className='w-4' />
                </span>
                <span className="hidden group-hover:block">
                  <Image src={assets.download_icon_dark} alt='' className='w-4' />
                </span>
              </span>
            </span>
          </a>
        </motion.div>

        {/* Divider */}
        <div className='flex items-center gap-4 my-6'>
          <div className='flex-1 h-px bg-gray-300 dark:bg-gray-600'></div>
          <span className='text-gray-500 dark:text-gray-400 text-sm'>or send a message</span>
          <div className='flex-1 h-px bg-gray-300 dark:bg-gray-600'></div>
        </div>

        <motion.form
          initial= {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
          onSubmit={onSubmit} className='max-w-2xl mx-auto glass-card p-8 rounded-2xl shadow-lg dark:bg-white/5 bg-white/70 backdrop-blur-md'>
            <div className='grid grid-cols-(--autoGrid) gap-6 mt-2 mb-8'>
                <label htmlFor='name' className='sr-only'>Name</label>
                <motion.input 
                id='name'
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 1.1, duration: 0.6}}
                type="text" placeholder='enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-400 rounded-md bg-white dark:bg-(--darkHover)/30 dark:border-white/90' name='name' />
                <label htmlFor='email' className='sr-only'>Email</label>
                <motion.input
                id='email'
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 1.2, duration: 0.6}}
                type="email" placeholder='enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-(--darkHover)/30 dark:border-white/90'  name='email' />
            </div>
            <label htmlFor='message' className='sr-only'>Message</label>
            <motion.textarea 
            id='message'
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 1.3, duration: 0.6}}
            rows="6" placeholder='enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-(--darkHover)/30 dark:border-white/90' name='message'>
            </motion.textarea>
            <motion.button
            whileHover={{scale: 1.05}}
            transition={{duration: 1.3}}
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-(--darkHover) duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-(--darkHover)' type='submit'>submit <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

            {/* Improved feedback message */}
            {result && (
              <p className={`mt-4 text-center font-semibold ${result.includes('Success') ? 'text-green-600' : result.includes('Sending') ? 'text-blue-500' : 'text-red-500'}`}>{result}</p>
            )}
        </motion.form>
    </motion.div>
  )
}

export default Contact