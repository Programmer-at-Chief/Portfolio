'use client'

import { createTheme, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import ThemeToggle from "./themeToggleButton";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";

const NavbarComponent = () => {
  const path= usePathname();
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
    <Navbar fluid rounded className='!bg-transparent pt-10 flex justify-center '>
    <div className={`transition-colors duration-300 flex gap-0.5 md:gap-2 sm:gap-1 flex-nowrap text-gray-300 font-roboto text-lg rounded-4xl py-1 ${scrolled ? "bg-gray-900/50 backdrop-blur-lg shadow-sm" : "bg-transparent" }`}>
    <Link href="/" className={`${path === '/' ? 'bg-[#02483e]/25' : ''} bg-blend-darken px-7 py-2 rounded-3xl`}>
    Home
    </Link>
    <Link href="/about" className={`${path === '/about' ? 'bg-[#02483e]/25' : ''} bg-blend-darken px-7 py-2 rounded-3xl`}>
    About
    </Link>
    <Link href="/projects" className={`${path === '/projects' ? 'bg-[#02483e]/25' : ''} bg-blend-darken px-7 py-2 rounded-3xl`}>
    Projects
    </Link>
    <Link href="/contact" className={`${path === '/contact' ? 'bg-[#02483e]/25' : ''} bg-blend-darken px-7 py-2 rounded-3xl`}>
    Contact
    </Link>
    </div>
    </Navbar>  
    <div className="absolute right-4 top-4 bg-black rounded-lg  border-white border-2 p-0.5 dark:bg-transparent">
    <ThemeToggle />
    </div>
    </header>

  )
}

export default NavbarComponent;
