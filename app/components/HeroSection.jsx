"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import NavLink from './Header/NavLink';
import Bubble from './Bubble';
const HeroSection = () => {

  return (
    <section className='lg:py-16 min-h-screen grid grid-rows-3'>
        <div className='grid grid-cols-1 sm:grid-cols-12 row-span-2'>
            <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.4}} 
                className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-secondary-800">
                    Hello, I&apos;m{" "}
                    </span>
                    <br />
                    {/* react type animation for animating text */}
                    <TypeAnimation
                        sequence={[
                            "Maria",
                            1000, 
                            'Web Developer',
                            1000,
                            'Python Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                  I use my passion and skills to make the web magical. I have the knowledge and patience required to make just about anything.               
                </p>       

            </motion.div>
            <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.4}}  
                className='col-span-4 place-self-center mt-4 lg:mt-0'
                >
                <div>
    		        {Array(5).fill(true).map((_, i) => <Bubble key={i} />)}
  		        </div>

            </motion.div>
        </div>

        <motion.div 
             initial={{opacity: 0, scale: 0.5}} 
             animate={{opacity: 1, scale: 1}} 
             transition={{duration: 0.4}} 
            className='row-span-1 text-center py-6 relative overflow-hidden'>
          
            <button className=' px-1 py-1 w-full sm:w-fit rounded mt-3 relative'>
                <span className='animatedDiv hover:bg-slate-800 rounded px-5 py-2 relative flex flex-col'>
                        <NavLink href="#about" title="View my works"/>              
                </span>
            </button>
        

        </motion.div>
    </section>
  )
}

export default HeroSection