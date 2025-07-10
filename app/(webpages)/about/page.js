"use client"

import { ThemeContext } from "@/app/_components/context/ThemeContext";
import { infoList, toolsData } from "@/public/assets";
import { useContext, useEffect } from "react";
import { motion } from "motion/react";

export default function About() {
  const {theme} = useContext(ThemeContext);

  const variants = {
    initial: { y: -300,x: 300 },
    stageOne: { x:300,y:0 },
    final: { x:0,y: 0 }
  };

useEffect(() => {
  const handleBeforeUnload = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="flex flex-col items-center pt-28 ">
    <motion.div 
    initial={{opacity: 0,y:-20}}
    whileInView={{opacity: 1,y:0}}
    transition={{duration: 0.5,delay: 0.3}}

    className="font-acorn text-[clamp(2rem,10vw,10rem)] text-amber-300 text-center font-bold scale-y-110 tracking-tight">
    <h1>I&apos;m Aman.</h1>
    </motion.div>

    <div className="w-full flex flex-col lg:flex-row items-center gap-20 my-20 px-[12%]">
    <motion.div
    initial={{scale: 0}}
    whileInView={{scale:1}}
    transition={{duration: 0.8, delay: 0.5,type: 'spring', stiffness: 100}}
    className="w-64 sm:w-80 rounded-3xl max-w-none">
    <img src="/images/profile.jpg" alt="Profile image" className="w-full rounded-3xl"/>

    </motion.div>
    <div className="flex-1 ">
    <p className="mb-5 max-w-3xl text-lg font-roboto dark:text-orange-200">I am a student of mathematics and computing, IIT BHU. I have experience in many languages and love to tinker with my desktop. I am a linux enthusiast and a open source enjoyer. I love to work on projects and adapt to new technologies. Peace 🖖🏽</p>
    <p className="text-center mb-5 max-w-2xl text-6xl font-acorn dark:text-orange-600">I use Arch btw.</p>
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
    {infoList.map(({icon,iconDark,title,description},index) => (
      <motion.li 
      whileHover={{scale: 1.05}}  
      key={index} className="border-[0.5px] border-gray-700  dark:border-gray-400 rounded-xl p-3 lg:p-5 md:p-4 cursor-pointer bg-blend-multiply hover:bg-pink-200 dark:hover:bg-yellow-800 hover:-translate-y-1 duration-500 hover:light-shadow dark:hover:dark-shadow">
      <img src={theme==='dark'? iconDark.src : icon.src} alt={title} className="w-7 mt-3"/>
      <h3 className="my-4 font-semibold text-gray-900 dark:text-gray-200">{title}</h3>
      <p className='text-gray-800 dark:text-orange-300 text-sm'>{description}</p>
      </motion.li>
    ))}

    </ul>

    <h4 className="font-ovo my-6 text-blue-950 dark:text-blue-500">Tools</h4>
    <ul className="flex items-center gap-3 sm:gap-5">
    {toolsData.map((tool,index) => (
      <motion.li 
      initial="initial"
      animate="final"
      variants={variants}
      transition={{
        initial: { duration: 0.5 },
          stageOne: { duration: 0.5, delay: 0.5 },
          final: { duration: 0.8, delay: 1 },
      }}
      key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-700 dark:border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" >
      <img src={tool.src} alt='Tool' className="w-5 sm:w-7" />
      </motion.li>

    ))}

    </ul>
    </div>
    </div>

    </motion.div>
  )
}

