import React from 'react';
import { motion } from "framer-motion";

interface Props {
    name: string;
    x: string;
    y: string;
};

const Skill = ({ name, x, y }: Props) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{
                x: 0,
                y: 0,
            }}
            whileInView={{ x, y }}
            viewport={{ once: true}}
            transition={{
                duration: 1.5
            }}
        >
            { name }
        </motion.div>
    )
}

export const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center bg-circularLight'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                >
                    React
                </motion.div>
                <Skill name='Python' x='-20vw' y='2vw'/>
                <Skill name='Redux' x='-5vw' y='-10vw'/>
                <Skill name='Typescript' x='20vw' y='6vw'/>
                <Skill name='NextJS' x='0vw' y='12vw'/>
                <Skill name='GastbyJS' x='20vw' y='-12vw'/>
                <Skill name='GoLang' x='-5vw' y='-20vw'/>
                <Skill name='Docker' x='0vw' y='-42vw'/>
                <Skill name='Kubernetes' x='-30vw' y='18vw'/>
                <Skill name='AWS' x='29vw' y='18vw'/>
            </div>
        </>
    )
}
