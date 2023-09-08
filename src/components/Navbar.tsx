import Link from 'next/link';
import React, { useState } from 'react';
import { Logo } from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { motion } from "framer-motion";
import { GITHUB_LINK_URL, LINKDIN_LINK_URL, TWITTER_LINK_URL } from '@/utils/globals';

const CustomLink = ({ href, title, className=''}: CustomLinkI) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className='', toggle}: CustomLinkMobileI) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
                h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button>
    )
} 

export const Navbar = () => {
    const { mode, setMode } = useThemeSwitcher();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(isOpen => !isOpen)
    }
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='flex flex-col justify-center items-center hidden lg:flex' onClick={handleOpenMenu}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink href='/about' title='About' className='mx-4'/>
                    <CustomLink href='/projects' title='Projects' className='mx-4'/>
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <a href={TWITTER_LINK_URL} target='_blank' className='w-6 mr-3'>
                        <TwitterIcon />
                    </a>
                    <a href={LINKDIN_LINK_URL} target='_blank' className='w-6 mx-3'>
                        <LinkedInIcon />
                    </a>
                    <a href={GITHUB_LINK_URL} target='_blank' className='w-6 ml-3 bg-light dark:bg-dark rounded-full'>
                        <GithubIcon />
                    </a>
                    <button
                        onClick={() => setMode(mode === 'light' ? "dark" : "light")}
                        className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    >
                        {
                            mode === 'dark'
                                ? <SunIcon />
                                : <MoonIcon />
                        }
                    </button>
                </nav>
            </div>

            {
                isMenuOpen
                    ? (
                        <motion.div initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}} animate={{scale: 1, opacity: 1}} className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                            <nav className='flex items-center flex-col justify-center'>
                                <CustomMobileLink href='/' title='Home' toggle={handleOpenMenu}/>
                                <CustomMobileLink href='/about' title='About' toggle={handleOpenMenu}/>
                                <CustomMobileLink href='/projects' title='Projects' toggle={handleOpenMenu}/>
                            </nav>

                            <nav className='flex items-center justify-center flex-wrap mt-2'>
                                <a href={TWITTER_LINK_URL} target='_blank' className='w-6 mr-3 sm:mx-1'>
                                    <TwitterIcon />
                                </a>
                                <a href={LINKDIN_LINK_URL} target='_blank' className='w-6 mx-3 sm:mx-1'>
                                    <LinkedInIcon />
                                </a>
                                <a href={GITHUB_LINK_URL} target='_blank' className='w-6 ml-3 sm:mx-1'>
                                    <GithubIcon />
                                </a>
                                <button
                                    onClick={() => setMode(mode === 'light' ? "dark" : "light")}
                                    className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} sm:mx-1`}
                                >
                                    {
                                        mode === 'dark'
                                            ? <SunIcon />
                                            : <MoonIcon />
                                    }
                                </button>
                            </nav>
                        </motion.div>
                    )
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
