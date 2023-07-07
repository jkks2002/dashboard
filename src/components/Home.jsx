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
import PolarChart from './homecomp/PolarChart';
import AreaChart from './homecomp/AreaChart';
import OneSpan from './homecomp/OneSpan';
import TwoSpan from './homecomp/TwoSpan';
import FullSpan from './homecomp/FullSpan';
import.meta.env.DEV
const Home=({SFront,LogStat,LViewer})=> {
   //ENV VARIABLE//let b= import.meta.env.VITE_REACT_APP_NOO;  
  return (
    <>
    <div className='w-full grid md:grid-cols-10 grid-cols-6 h-full fadeinL mt-20 pt-20 pb-40 text-white'>
            <div className="w-full md:col-span-2 md:block hidden pb-4"></div>
            <div className="w-full md:col-span-8 col-span-6 dark:text-white text-gray-700 text-3xl border-b dark:border-[rgba(255,255,255,0.08)] border-[rgba(0,0,0,0.18)] pb-4 md:pl-0 pl-6">
                <IoHome className="inline mr-2" /> Home  
            </div>
            <div className="md:col-span-2 not-sr-only md:block hidden w-full ">
                <div className='w-full flex flex-col items-center justify-top '>
                <DesktopNav   SFront={SFront} LogStat={LogStat} LViewer={LViewer} />
                </div>
            </div>
            <div className="w-full  md:col-span-8 col-span-6 flex flex-col items-center justify-top">
                <div className="w-11/12 grid md:grid-cols-6 grid-cols-2 gap-2  items-center justify-items-center mt-6">
                    <div className='w-full md:col-span-6 col-span-2 grid md:grid-cols-3 grid-cols-1 gap-4 items-start justify-items-start'>
                        <OneSpan Title={'Benutzerliste'} IsChart={false} ChartTyp={''} DataObj={{}}/>
                        <TwoSpan Title={'Benutzer'} IsChart={true} ChartTyp={'AreaChart'} DataObj={{}}/>
                        <FullSpan Title={'Abteilungsliste'} IsChart={false} ChartTyp={''} DataObj={{}}/>
                        <OneSpan Title={'Benutzergruppen'} IsChart={true} ChartTyp={'PolarChart'} DataObj={{}}/>                        
                    </div>
                </div>
            </div>
        </div>     
    
    <div className='hidden sr-only w-full h-full fadeinL mt-40 mb-40'>
      <div className="flex">
        <section className="cards">
            <article className="card card--1">
                <div className="card__bg"></div>
                <a href="#" className="card_link">
                    <div className="card__bg--hover"></div>
                </a>
                <div className="card__info">
                    <span className="card__category">Task</span>
                    <h3 className="card__title">Bilderupload</h3>
                    <span className="card__status">Status: <a href="#" className="card__statusresult text-[#009D85]" title="result">OK</a></span>
                </div>
            </article>


            <article className="card card--2">
                <div className="card__bg  bshad"></div>
                <a href="#" className="card_link">
                    <div className="card__bg--hover"></div>
                </a>
                <div className="card__info">
                    <span className="card__category">Task</span>
                    <h3 className="card__title">Kundenabgleich</h3>
                    <span className="card__status">Status: <a href="#" className={"card__statusresult text-[#d26262]"} title="result">Fehler</a></span>
                </div>
            </article>
        </section>
    </div>
    </div>
    </>
  )
}

export default Home
