import React from 'react'
import {AiTwotoneAppstore} from 'react-icons/ai';
import {FaUserShield,FaUserPlus,FaUserCircle } from 'react-icons/fa';
import {MdSupervisedUserCircle } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {IoMdLogOut} from 'react-icons/io';
import {IoHome} from 'react-icons/io5';
import DesktopNav from './DesktopNav';
const Sample=({SFront,LogStat,LViewer})=> {
   

  return (
    <>
    <div className='w-full grid md:grid-cols-10 grid-cols-6 h-full fadeinL mt-40 mb-40 text-white'>
            <div className="w-full md:col-span-2 md:block hidden pb-4"></div>
            <div className="w-full md:col-span-8 col-span-6 text-3xl border-b border-[rgba(255,255,255,0.08)] pb-4 md:pl-0 pl-6">
                <IoHome className="inline mr-2" /> Home
            </div>
            <div className="md:col-span-2 md:block hidden w-full ">
                <div className='w-full flex flex-col items-center justify-top '>
                <DesktopNav   SFront={SFront} LogStat={LogStat} LViewer={LViewer} />
                </div>
            </div>
            <div className="w-full  md:col-span-8 col-span-6 flex flex-col items-center justify-top">
                <div className="w-11/12 grid md:grid-cols-6 grid-cols-2 gap-2  items-center justify-items-center mt-6">
                    <div className="w-full p-2"><div className="hover:bg-[#1c3a48] w-full p-4 cursor-pointer  bg-[#0f202788] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center  "><HiUserGroup className="text-2xl" /><div className="mt-4 text-sm">Guppen anlegen</div></div></div>
                    <div className="w-full p-2"><div className="hover:bg-[#1c3a48] w-full p-4 cursor-pointer  bg-[#0f202788] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center  "><MdSupervisedUserCircle className="text-2xl" /><div className="mt-4 text-sm">Guppen Richtlinien</div></div></div>
                    <div className="w-full p-2"><div className="hover:bg-[#1c3a48] w-full p-4 cursor-pointer  bg-[#0f202788] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center  "><FaUserPlus className="text-2xl" /><div className="mt-4 text-sm">Benutzer anlegen</div></div></div>
                    <div className="w-full p-2"><div className="hover:bg-[#1c3a48] w-full p-4 cursor-pointer  bg-[#0f202788] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center  "><FaUserCircle className="text-2xl" /><div className="mt-4 text-sm">Benutzer Richtlinien</div></div></div>
                    
                </div>
            </div>
        </div>     
    
    <div className='hidden w-full h-full fadeinL mt-40 mb-40'>
      
    </div>
    </>
  )
}

export default Sample
