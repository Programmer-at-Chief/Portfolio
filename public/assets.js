import code_icon from './icons/code-icon.png';
import code_icon_dark from './icons/code-icon-dark.png';
import edu_icon from './icons/edu-icon.png';
import edu_icon_dark from './icons/edu-icon-dark.png';
import project_icon from './icons/project-icon.png';
import project_icon_dark from './icons/project-icon-dark.png';
import vscode from './icons/vscode.png';
import firebase from './icons/firebase.png';
import figma from './icons/figma.png';
import git from './icons/git.png';
import mongodb from './icons/mongodb.png';
import right_arrow_white from './icons/right-arrow-white.png';
import mail_icon from './icons/mail_icon.png';
import mail_icon_dark from './icons/mail_icon_dark.png';
import download_icon from './icons/download-icon.png';
import hand_icon from './icons/hand-icon.png';
import moon_icon from './icons/moon_icon.png';
import sun_icon from './icons/sun_icon.png';
import arrow_icon from './icons/arrow-icon.png';
import arrow_icon_dark from './icons/arrow-icon-dark.png';
import menu_black from './icons/menu-black.png';
import menu_white from './icons/menu-white.png';
import close_black from './icons/close-black.png';
import close_white from './icons/close-white.png';
import web_icon from './icons/web-icon.png';
import mobile_icon from './icons/mobile-icon.png';
import ui_icon from './icons/ui-icon.png';
import graphics_icon from './icons/graphics-icon.png';
import right_arrow from './icons/right-arrow.png';
import send_icon from './icons/send-icon.png';
import right_arrow_bold from './icons/right-arrow-bold.png';
import right_arrow_bold_dark from './icons/right-arrow-bold-dark.png';
import neovim from './icons/neovim.png'
import archlinux from './icons/archlinux.png'
import postgresql from './icons/postgresql.png'
import music_generator from './images/music_generator.png'
import loss_function from './images/loss_function.png'
import color_palette from './images/color_pallete.png'
import assembly from './images/assembly.png'

const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    neovim,
  archlinux,
  postgresql
};


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: ['HTML','CSS','JS','React Js','Next Js','Angular Js','Express Js','C++','C','Java','Spring Boot','C','Python'].join(', ')
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'IDD(Btech + Mtech) in Mathematics & Computing'
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 2 projects.'
  }
];

export const toolsData =[
  assets.neovim,assets.git,assets.postgresql,assets.archlinux
]

export const projects = [
  {
    title: "Color Palette",
    description: 'This is a website to manage your personal color palettes and maintain your collections of palettes with a max of 16 colors in each palettes.',
    icon: color_palette,
    type: 'large',
    link: 'https://github.com/Programmer-at-Chief/color-palette'
  },
  {
    title: 'Loss Function',
    description: 'This is a custom loss function for time series datasets.',
    icon: loss_function,
    type: 'small',
    link: 'https://github.com/Programmer-at-Chief/Loss_function'
  },
  {
    title: 'CosmOs',
    description: 'This is my operating systems project.',
    type: 'large',
    icon: assembly,
    link: 'https://github.com/Programmer-at-Chief/CosmOs'
  },
  {
    title: 'Music Generator',
    description: 'This is a melody generation Deep Learning model based on LSTM and old ballads.',
    type: 'small',
    icon: music_generator,
    link: 'https://github.com/Programmer-at-Chief/Music-Generator'
  },

]
