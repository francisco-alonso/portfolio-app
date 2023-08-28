import React, { useRef } from 'react';
import { useScroll, motion } from "framer-motion";
import { LiIcon } from './LiIcon';

interface RailProps {
    title: string;
    items: Array<EducationProps | ExperienceProps>
}

type Props = {
    data: EducationProps | ExperienceProps
}

const Details: React.FC<Props> = ({ data }) => {
    const ref = useRef<HTMLLIElement>(null);
    if('type' in data) {
        const { type, info, time, place } = data;
        return (
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalize font-bold text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
                </span>
                <p className='font-medium w-full'>
                {info}
                </p>
            </motion.div>
            </li>
        )
    } else {
        const { position, time, address, work, company, companyLink } = data;
        return (
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
                <LiIcon reference={ref}/>
                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a target='_blank' className='text-primary dark:text-primaryDark capitalize' href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
                </motion.div>
            </li>
        )
    }
    
    
}

export const RailDown = ({ items, title }: RailProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32  w-full text-center'>{title}</h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {
                        items.map((item, index) => (
                            <Details
                                key={index}
                                data={item}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
