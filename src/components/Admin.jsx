import React, { useState } from "react";
import {AiTwotoneAppstore} from 'react-icons/ai';
import {FaUserShield,FaUserPlus,FaUserCircle } from 'react-icons/fa';
import {MdSupervisedUserCircle } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import DesktopNav from './DesktopNav';
import ButtonKomp from "./admincomp/ButtonKomp";
const Admin = ({SFront,LogStat,LViewer})=>{
    let Buttons=Array(
        {'Tite':'Gruppen anlegen', 'Icon':'HiUserGroup'},
        {'Tite':'Gruppen Richtlinien', 'Icon':'MdSupervisedUserCircle'},
        {'Tite':'Benutzer anlegen', 'Icon':'FaUserPlus'},
        {'Tite':'Benutzer Richtlinien', 'Icon':'FaUserCircle'}
    )
    return(
        <div className='w-full grid md:grid-cols-10 grid-cols-6 h-full fadeinL mt-40 mb-40 text-white'>
            <div className="w-full md:col-span-2 md:block hidden pb-4"></div>
            <div className="w-full md:col-span-8 col-span-6 text-3xl border-b border-[rgba(255,255,255,0.08)] pb-4 md:pl-0 pl-6">
                <RiAdminFill className="inline mr-2" /> Admin
            </div>
            <div className="md:col-span-2 md:block hidden w-full ">
            <div className='w-full flex flex-col items-center justify-top '>
                <DesktopNav   SFront={SFront} LogStat={LogStat} LViewer={LViewer} />
                </div>
            </div>
            <div className="w-full  md:col-span-8 col-span-6 flex flex-col items-center justify-top">
                <div className="w-11/12 grid md:grid-cols-6 grid-cols-2 gap-2  items-center justify-items-center mt-6">
                    {
                        Buttons.map((item)=>(
                            <ButtonKomp Title={item.Tite} Icon={item.Icon} />
                        ))
                    }                    
                </div>
            </div>
        </div>      
    );
}
export default Admin;