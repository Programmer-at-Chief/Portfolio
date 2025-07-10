"use client";

import { projects } from "@/public/assets";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useEffect,useState } from "react";

export default function Projects() {

  const route = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);
  function gotoProject(link){
    route.push(link);
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 756);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
    <div className="flex flex-col items-center pt-28 px-[12%] ">
    <div className="font-acorn text-[clamp(2rem,10vw,10rem)] text-amber-300 text-center font-bold scale-y-110 tracking-tight">
    <h1>Projects</h1>
    </div>

    <p className="mb-5 max-w-2xl text-lg font-roboto dark:text-orange-200">These are all the projects I have made in various development fields.</p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-6 pb-20">
    {projects.map((project,index) => {
      let isLeftColumn;
      if (isMobile){
        isLeftColumn = (index % 2 === 0); 
      }
      else{
        isLeftColumn = [0,3].includes(index);
      }
      if (project.type === 'large'){
        return (
          <motion.div
          initial={isLeftColumn ? { x: -100 } : {x: 100 }}
          animate={{x: 0 }}
          transition={{ duration: 0.8, ease:'easeOut' }} 
          key={index} className=" border-green-700 border rounded-2xl flex flex-col row-span-2 justify-between px-10 py-8 hover:-translate-y-2 hover:bg-green-500/20 duration-500 cursor-pointer" 
          role="button"
          tabIndex={0}
          onClick={() => gotoProject(project.link)}>
          <div>
          <h1 className="text-2xl font-merienda text-teal-800 dark:text-green-400 mb-6">{project.title}</h1>
          <p className="text-lg font-roboto text-green-900 dark:text-green-200">{project.description}</p>
          </div>
          <img src={project.icon.src} alt={project.title} className="px-6 pt-6"/>
          </motion.div>

        )
      }
      else{
        return (
          <motion.div 
          initial={isLeftColumn ? {x: -100 } : {x: 100 }}
          animate={{x: 0 }}
          transition={{ duration: 0.8, ease:'easeOut' }}

          key={index} className=" border-green-700 border rounded-2xl flex justify-between items-center px-10 py-8 hover:-translate-y-2 hover:bg-green-500/20 duration-500 cursor-pointer" 
          role="button"
          tabIndex={0}
          onClick={() => gotoProject(project.link)}>
          <div >
          <h1 className="text-2xl font-merienda text-teal-900 dark:text-green-400 mb-6">{project.title}</h1>
          <p className="text-lg font-roboto text-green-900 dark:text-green-200">{project.description}</p>
          </div>
          <img src={project.icon.src} alt={project.title} className="max-h-20 rounded-[100%] border-green-300"/>
          </motion.div>

        )
      }
    }
    )
    }

    </div>


    </>
  )
}
