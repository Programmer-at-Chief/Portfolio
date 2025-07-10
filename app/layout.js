import { Ovo, Sevillana, Roboto, Merienda } from "next/font/google";
import localFont from "next/font/local";

import { ThemeModeScript } from 'flowbite-react';
import "./globals.css";
import NavbarComponent from "./_components/NavbarComponent";
import { ThemeContextProvider } from "./_components/context/ThemeContext";

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400","800"]
});

const sevillana = Sevillana({
  variable: "--font-sevillana",
  subsets: ["latin"],
  weight: ["400"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const acorn = localFont({
  src:[
  {
      path: '../public/Acorn/Acorn-Medium.otf',
      style: 'normal',
    },
{
      path: '../public/Acorn/Acorn-Bold.otf',
      style: 'bold',
    },
{
      path: '../public/Acorn/Acorn-Regular.otf',
      style: 'regular',
    },
{
      path: '../public/Acorn/Acorn-SemiBold.otf',
      style: 'semibold',
    },


  ]
})

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio | PAC",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
    <ThemeModeScript />
    </head>
    <body
    className={`${acorn.className} ${sevillana.variable} ${ovo.variable} ${roboto.variable} ${merienda.variable} antialiased dark-gradient light-gradient animated-background`}
    >
    <ThemeContextProvider>

    <NavbarComponent/>
    {children}

    </ThemeContextProvider>
    </body>
    </html>
  );
}
