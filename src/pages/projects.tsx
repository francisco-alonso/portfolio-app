import { AnimatedText } from '@/components/subcomponents/AnimatedText';
import { GithubIcon } from '@/components/subcomponents/Icons';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.png";
import { Transition } from '@/components/subcomponents/Transition';

const FeaturedProject = ({ title, summary, img, link, github }: FeaturedProjectProps) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                    <Image {...img} alt={title} className='w-full h-auto' priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                        <Link href={github || link} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                            Visit the project
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }: FeaturedProjectProps) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image {...img} alt={title} className='w-full h-auto' />
                </Link>
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold lg:text=2xl'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                            Visit
                        </Link>
                        <Link href={github || link} target='_blank' className='w-8 md:w-6'>
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
                <title>Projects</title>
                <meta name='description' content='Projects' />
            </Head>
            <Transition />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Cloud Image Processing Service"
                                link="https://github.com/francisco-alonso/image-processor"
                                summary='A cloud solution to process images from a GCS bucket to another.'
                                img={project3}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Network Sniffer"
                                link="https://github.com/francisco-alonso/network_sniffer"
                                summary='Scan open port given an IP address'
                                img={project2}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <FeaturedProject
                                title="ARP Network Scanner with Google Cloud Logging"
                                link="https://github.com/francisco-alonso/diary-app"
                                summary='Captures packets using gopacket and pcap in a specific network interface'
                                img={project4}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <FeaturedProject
                                title="Diary App"
                                link="https://github.com/francisco-alonso/diary-app"
                                summary='Keep track of your daily tasks and notes'
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
