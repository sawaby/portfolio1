"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navLinks = [
    {
        title: "About",
        path: "#about",

    },
    {
        title: "Projects",
        path: "#projects"

    },
    {
        title: "Skills",
        path: "#skills"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
  <>
     <nav className='fixed mx-aut0 top-0 left-0 right-0 z-10  bg-opacity-90'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link 
                href={'/'} 
                className='text-2xl md:text-5xl text-white font-semibold h-[50px] w-[50px]'>
                <Image priority={true} src="/images/logo2.png" width="0" height="0" sizes="100vw" className="w-full h-auto" alt='LOGO'/>
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hober:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) :
                    (
                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hober:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                }

            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                    ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        
    </nav>
        

    </>
  )
}

export default Navbar;