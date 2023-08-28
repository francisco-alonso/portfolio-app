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
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passionate about building software!' className='mb-16'/>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p>Par 1</p>
                            <p>Par 2</p>
                            <p>Par 3</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image src={ProfilePic} alt='Francisco Lopez' className='w-full h-auto rounded-2xl'/>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>+40</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>+4</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Years o Experience</h2>
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