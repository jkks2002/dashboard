import React, { useState } from "react";
import {AiTwotoneAppstore} from 'react-icons/ai';
import {FaUserShield,FaUserPlus,FaUserCircle } from 'react-icons/fa';
import {MdSupervisedUserCircle } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {IoMdLogOut} from 'react-icons/io';
import {IoHome} from 'react-icons/io5';
const MobileNav=({LViewer,SFront,LogStat,sMenu,Menu})=>{
 return(
    <div className="fadeinL text-white absolute z-[6]  top-0 w-full rounded-br bg-[rgba(0,0,0,0.8)] border-b border-r border-[rgba(255,255,255,0.15)] ">
            <div className="flex flex-col gap-2 divide-y divide-[rgba(255,255,255,0.1)] items-center justify-center py-4 px-2">
            <div onClick={()=>{sMenu(!Menu);}} className="w-full md:px-4 px-2 uppercase pt-3 hover:text-gray-400 cursor-pointer text-right text-2xl"> X</div>
            <div onClick={()=>{LViewer(0);sMenu(!Menu);}} className="w-full md:px-4 px-2 uppercase pt-3 hover:text-gray-400 cursor-pointer"> <IoHome className="mr-6 inline" /> Home</div>
            <div onClick={()=>{LViewer(1);sMenu(!Menu);}} className="w-full md:px-4 px-2 uppercase pt-3 hover:text-gray-400 cursor-pointer"> <RiAdminFill className="mr-6 inline" /> Admin</div>
            <div onClick={()=>{localStorage.clear();sMenu(!Menu);SFront(false);}} className="w-full md:px-4 px-2 uppercase pt-3 hover:text-gray-400 cursor-pointer"> <IoMdLogOut className="mr-6 inline" /> Abmelden</div>
            </div>
        </div>
 );
}

export default MobileNav;