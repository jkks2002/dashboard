import React, { useState } from "react";
import {RiAdminFill} from 'react-icons/ri';
import DesktopNav from './DesktopNav';
import ButtonKomp from "./admincomp/ButtonKomp";
import OverlayTab from "./admincomp/OverlayTab";
const Admin = ({SFront,LogStat,LViewer})=>{
    const[overlay,setoverlay]=useState(false);
    const[vName,setvName]=useState('');
    const[vTabname,setvTabname]=useState('');
    let Buttons=Array(
        {'Titel':'Gruppen anlegen', 'Icon':'HiUserGroup'},
        {'Titel':'Gruppen Richtlinien', 'Icon':'MdSupervisedUserCircle'},
        {'Titel':'Benutzer anlegen', 'Icon':'FaUserPlus'},
        {'Titel':'Benutzer Richtlinien', 'Icon':'FaUserCircle'}
    )
    return(<>
        {
        overlay?
        <>
        <OverlayTab Closer={setoverlay} View={vName} Tname={vTabname} />
        </>
        :
        <></>
        }
        <div className='w-full grid md:grid-cols-10 grid-cols-6 h-full fadeinL mt-40 mb-40 text-white'>
            <div className="w-full md:col-span-2 md:block hidden pb-4"></div>
            <div className="w-full md:col-span-8 col-span-6 text-3xl border-b border-[rgba(255,255,255,0.08)] pb-4 md:pl-0 pl-6">
                <RiAdminFill className="inline mr-2" /> Admin
            </div>
            
            {
            overlay?
            <></>
            :
            <>
            <div className="md:col-span-2 md:block hidden w-full ">
            <div className='w-full flex flex-col items-center justify-top '>
                <DesktopNav   SFront={SFront} LogStat={LogStat} LViewer={LViewer} />
                </div>
            </div>
            <div className="w-full  md:col-span-8 col-span-6 flex flex-col items-center justify-top">
            <div className="w-11/12 grid md:grid-cols-6 grid-cols-2 gap-2  items-center justify-items-center mt-6">
                    {
                        Buttons.map((item,index)=>(
                            <ButtonKomp key={item+index} Overlay={setoverlay} OverlayView={setvName} OverlayTname={setvTabname} Title={item.Titel} Icon={item.Icon} />
                        ))
                    }                    
                </div>
                </div>
            </>
            }
                
            
        </div>      
        </>);
}
export default Admin;