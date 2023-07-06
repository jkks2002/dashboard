import React from "react";
import {AiTwotoneAppstore} from 'react-icons/ai';
import {FaUserShield,FaUserPlus,FaUserCircle } from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {MdSupervisedUserCircle } from 'react-icons/md';

const ButtonKomp = ({Title,Icon,Overlay,OverlayView,OverlayTname})=>{
    const GetIcon=({Icon})=>{
    
        switch(Icon){
            case "HiUserGroup":
                return(<HiUserGroup  className="text-2xl" />)                  
            case "MdSupervisedUserCircle":
                return(<MdSupervisedUserCircle  className="text-2xl" />)                 
            case "FaUserPlus":
                return(<FaUserPlus  className="text-2xl" />)                 
            case "FaUserCircle":
                return(<FaUserCircle  className="text-2xl" />)                 
            }
             
    }
    return(
        <div onClick={()=>{Overlay(true); OverlayView(Title); OverlayTname(Title);}} className="w-full p-2"><div className=" hover:bg-[#1c3a48] w-full p-4 cursor-pointer  bg-[#0f202788] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center  "><GetIcon Icon={'HiUserGroup'} /><div className="mt-4 text-sm">{Title}</div></div></div>
    )
}
export default ButtonKomp;