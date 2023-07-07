import React, { useState } from "react";
import {HiMenuAlt1,HiMenuAlt2} from 'react-icons/hi';
import {IoMdLogOut} from 'react-icons/io';
import {IoHome} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {MdDarkMode, MdLightMode,MdModeNight } from 'react-icons/md';
import MobileNav from "./MobileNav";
let screenmode=false;
if (localStorage.getItem('theme') === 'false' || (!(localStorage.getItem('theme')))) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
    screenmode=true;
}
const Header = ({SFront,LogStat,LViewer})=>{
      
    const[IsMode,setIsMode]=useState(screenmode);
    const[Menu,setMenu]=useState(false);
    return(<><div className='fixed dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] bg-gradient-to-r from-[#eef2f3] via-[#8e9eab] to-[#eef2f3] z-[4] h-20 w-full top-0 left-0 bshad border-b border-[rgba(255,255,255,0.1)]'>
        {
            LogStat?
            <button onClick={()=>setMenu(!Menu)} className="md:hidden block group absolute top-4 left-4 text-white transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100 px-4 bg-[#2d4f5e] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#1a3743] ">
                <HiMenuAlt2 className="group-hover:hidden block" />
                <HiMenuAlt1 className="group-hover:block hidden" />
            </button>
            :
            <></>
        }
    <h1 className=' w-full flex flex-col items-center Roboto_Bold dark:text-white  justify-center text-3xl py-4 inline'>JKK Manager</h1>
    <div onClick={()=>{
        if(IsMode==true){document.documentElement.classList.add('dark');setIsMode(!IsMode);localStorage.setItem('theme',false);}else{document.documentElement.classList.remove('dark');setIsMode(!IsMode);localStorage.setItem('theme',true);}
    }} className="absolute right-4 top-4 bg-slate-400 dark:bg-slate-200 p-2 rounded shadow-inner shadow-[rgba(0,0,0,0.4)] border border-slate-500">
       {
        IsMode?
        <MdDarkMode />
        :
        <MdLightMode />
       } 
    </div>
    </div>
    {
        Menu?
        <MobileNav SFront={SFront} LogStat={LogStat} LViewer={LViewer} sMenu={setMenu} Menu={Menu} />
        :
        <></>
    }
    </>)
}

export default Header;