import React, { useState } from "react";
import {AiTwotoneAppstore} from 'react-icons/ai';
import {FaUserShield,FaUserPlus,FaUserCircle } from 'react-icons/fa';
import {MdSupervisedUserCircle } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {IoMdLogOut} from 'react-icons/io';
import {IoHome} from 'react-icons/io5';
const DesktopNav=({LViewer,SFront})=>{
 return(
    <div className="w-5/6 flex flex-col items-center justify-center ">
                <div onClick={()=>{LViewer(0);}} className="w-full border-l-2 dark:border-blue-400 border-blue-600 dark:text-blue-400 text-blue-600 cursor-pointer pl-4 py-4 text-left"> <IoHome className="md:hidden block inline mr-4" /><a className="inline md:block hidden "><IoHome className="inline mr-4" />Home</a></div>
                <div onClick={()=>{LViewer(1);}} className="w-full border-l-2 dark:border-gray-300 border-gray-700 dark:text-white text-gray-700 pl-4 py-4 text-left cursor-pointer "><RiAdminFill className="md:hidden block inline mr-4" /> <a className="inline md:block hidden "><RiAdminFill className="inline mr-4" />Admin</a></div>
                <div  onClick={()=>{localStorage.clear();SFront(false);}} className="w-full border-l-2 dark:border-gray-300 border-gray-700 dark:text-white text-gray-700 pl-4 py-4 text-left cursor-pointer "><IoMdLogOut className="md:hidden block inline mr-4" /> <a className="inline md:block hidden "><IoMdLogOut className="inline mr-4" />Abmelden</a></div>
                </div>
 );
}

export default DesktopNav;