import React, { useState } from "react";
import {HiMenuAlt1,HiMenuAlt2} from 'react-icons/hi';
import {IoMdLogOut} from 'react-icons/io';
import {IoHome} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import MobileNav from "./MobileNav";
const Header = ({SFront,LogStat,LViewer})=>{
      
    const[Menu,setMenu]=useState(false);
    return(<><div className='fixed bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] z-[4] h-20 w-full top-0 left-0 bshad border-b border-[rgba(255,255,255,0.1)]'>
        {
            LogStat?
            <button onClick={()=>setMenu(!Menu)} className="md:hidden block group absolute top-4 left-4 text-white transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100 px-4 bg-[#2d4f5e] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#1a3743] ">
                <HiMenuAlt2 className="group-hover:hidden block" />
                <HiMenuAlt1 className="group-hover:block hidden" />
            </button>
            :
            <></>
        }
    <h1 className=' w-full flex flex-col items-center Roboto_Bold  justify-center text-3xl py-4 inline'>Scheduled Tasks</h1>
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