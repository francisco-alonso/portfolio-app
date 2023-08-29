import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef } from 'react'
import ProfilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image';
import { MotionValue, SpringOptions, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Skills } from '@/components/Skills';
import { RailDown } from '@/components/RailDown';
import { educationItems, experienceItems } from '@/helpers/helpers';

interface AnimatedNumbersProps {
    value: number;
}
const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue: MotionValue<number> = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 } as SpringOptions);
    const isInView = useInView(ref, { once: true });

    const setMotionValue = useCallback(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        setMotionValue();
    }, [ setMotionValue ]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [ springValue, value ]);

    return (
        <span ref={ref}></span>
    )
}

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='description' content='About me' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passionate about building software!' className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8'/>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light'/>
                            <Image src={ProfilePic} alt='Francisco Lopez' className='w-full h-auto rounded-2xl' priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm-text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm-text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={40}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm-text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={3}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <RailDown title='Experience' items={experienceItems} />
                    <RailDown title='Education' items={educationItems} />
                </Layout>
            </main>
        </>
    )
}

export default About;