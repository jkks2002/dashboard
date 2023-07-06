import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdGroupAdd } from "react-icons/md";
const NewGroup = ()=>{
    return(<>
    <div className="w-full   px-8 mt-10 text-white ">
            <button className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '><MdGroupAdd className="inline mr-4" />Neue Gruppe</button>
            </div>
            <div className="w-full   px-8 mt-6 text-white ">
                <div className="w-full border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] mb-4">
                <div className="w-full grid grid-cols-10 items-start justify-items-start py-2 divide-x divide-[rgba(255,255,255,0.1)] border-b border-[rgba(255,255,255,0.1)]">
                    <div className="w-full md:col-span-2 col-span-5 pl-2 ">Gruppenname</div>
                    <div className="w-full md:col-span-3 pl-2 md:block hidden ">Gruppen-Richtlinien</div>
                    <div className="w-full md:col-span-1 col-span-2 pl-2 ">Status</div>
                    <div className="w-full md:col-span-1 col-span-3 pl-2 ">Benutzer</div>
                    <div className="w-full md:col-span-3 col-span-10 pl-2 "></div>
                </div>
           { 
           [
                {'Gname': 'Standard', 'Rechte':'Minimal','Aktiv':true,'Anzahl':234},
                {'Gname': 'Moderatoren', 'Rechte':'Mittlere','Aktiv':false,'Anzahl':1},
                {'Gname': 'Admin', 'Rechte':'Vollkommen','Aktiv':true,'Anzahl':6},
                {'Gname': 'Analyst', 'Rechte':'Analyse','Aktiv':true,'Anzahl':14}
            ].map((item,index)=>(
                <div key={item+index} className="w-full  odd:bg-[rgba(0,0,0,0.2)] even:bg-[rgba(0,0,0,0.07)]">
                <div className="w-full grid grid-cols-10 items-start justify-items-start  py-3 hover:bg-[rgba(255,255,255,0.07)]">
                   <div className="w-full min-h-full  pt-2 md:col-span-2 col-span-5 pl-2">{item.Gname}</div>
                    <div className="w-full min-h-full col-span-3 pl-2 md:block hidden pt-2">{item.Rechte}</div>
                    <div className="w-full min-h-full  pt-2  md:col-span-1 col-span-2 pl-2">{item.Aktiv?<><a className="float-left text-lime-500 mr-4">Aktiv</a> <span className="w-3 h-3 rounded-full float-left bg-lime-500 mr-8 mt-1 "></span></>:<><a className="float-left text-red-500 mr-4">Inaktiv</a> <span className="w-3 h-3 rounded-full float-left bg-red-500 mr-8 mt-1 "></span></>}</div>
                    <div className="w-full min-h-full  pt-2 md:col-span-1 col-span-3 pl-2">{item.Anzahl}</div>
                    <div className="w-full min-h-full   md:col-span-3 col-span-10 pl-2 ">
                        <button onClick={()=>confirm('Möchten Sie wirklich ')} className="float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 bg-[#0f2027] flex flex-col items-center justify-center  w-10 h-10 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] mr-10"><MdDelete className="inline " /></button>
                        <button className=" float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 bg-[#0f2027] flex flex-col items-center justify-center  w-10 h-10 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] mr-10"><FaEdit className="inline " /></button>
                    </div>
                </div>
                </div>
            ))
            }
            </div>
            </div>
    </>);
}

export default NewGroup;