import { AnimatedText } from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from "../../public/images/projects/portfolio-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image {...img} alt={title} className='w-full h-auto' priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                        <Link href={github || link} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>
                            Visit the project
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }: FeaturedProjectProps) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark p-6 relative '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image {...img} alt={title} className='w-full h-auto' />
                </Link>
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='text-lg font-semibold underline'>
                            Visit
                        </Link>
                        <Link href={github || link} target='_blank' className='w-8'>
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='description' content='Projects' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Custom Projects" className='mb-16'/>

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>


                        <div className='col-span-6'>
                            <Project
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                type="Featured Project"
                                title="Network Sniffer"
                                link="/"
                                summary='Scan open port given an IP address'
                                img={project1}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;
