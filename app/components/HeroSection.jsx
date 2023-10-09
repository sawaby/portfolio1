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
                            'UI/UX Designer',
                            1000
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
                className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    
                {/* <div className='rounded-full bg-slate-950 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'> */}
                

                <div>
    		        {Array(5).fill(true).map((_, i) => <Bubble key={i} />)}
  		        </div>

                   {/* <Image 
                        src='/images/hero-image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={500}
                        height={300}
                    />  */}

                    
                    {/* <div className='text-[#a97b50] mb-4 text-6xl sm:text-2xl lg:text-8xl lg:leading-normal absolute top-11 left-11'>
                         <span className='text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                            </svg> 
                        </span> 
                        <span className='abril text-9xl font-bold'>
                            {date.getDate()} 
                        </span>
                        <span className='abril text-sm'>
                            {months[date.getMonth()]}
                        </span>
                    </div>
                    <div className='text-[#ADB7BE] sm:text-lg lg:text-xl absolute top-[250px] right-10 text-sm'>
                        <p>Available<br/> for<br/> Work.</p>
                    </div> 
                    */}
                {/* </div> */}
                


            </motion.div>

            {/* date */}

            

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