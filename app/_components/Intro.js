"use client";

import {motion} from 'motion/react';

export default function Intro() {

  return (
    <div className="flex flex-col items-center pt-60 ">
    <div className="flex justify-center ">
    <motion.img 
    initial= {{x:-40,opacity: 0}}
    whileInView={{x:0,opacity: 1}}
    transition={{duration: 0.8, type: 'keyframes',stiffness:100}}
    src="/images/star.svg" alt="Star" className="self-end p-3 scale-75 lg:scale-100 md:scale-90 sm:scale-75"/>

    <motion.div 
    initial={{scale: 0}}
    whileInView={{scale:1}}
    transition={{duration: 0.8, type: 'spring', stiffness: 100}}
    className="font-acorn text-[clamp(2rem,10vw,10rem)] text-amber-300 text-center font-bold scale-y-110 tracking-tight">
    <h1 className="leading-12">Hi. I'm Aman.</h1>
    <h1>A Designer.</h1>
    </motion.div>

    <motion.img 
    initial= {{x:40,opacity: 0}}
    whileInView={{x:0,opacity: 1}}
    transition={{duration: 0.8, type: 'keyframes',stiffness:100}}
    src="/images/star.svg" alt="Star" className="self-start p-3 lg:-translate-y-24 md:-translate-y-20 sm:-translate-y-16 -translate-y-16 scale-75 lg:scale-100 md:scale-90 sm:scale-75"/>
    </div>

    <motion.p 
    initial= {{y:-40,opacity: 0}}
    whileInView={{y:0,opacity: 1}}
    transition={{duration: 0.8,delay:'0.3', type: 'tween',stiffness:100}}
    className="font-roboto text-lg text-center text-amber-500">I'm a 3rd year student, passionate about web development.</motion.p>

    </div>
  )
}
