import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdGroupAdd } from "react-icons/md";
const NewGroup = ()=>{
    const[IsSearched,setIsSearched]=useState(false)
    const[Formtab,setFormtab]=useState(false)
    const deleteGroup=({I})=>{
        document.getElementById(I).style.display="none";
    }
    return(<>
    <div className="w-full   px-8 mt-10 text-white ">
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '><MdGroupAdd className="inline mr-4" />Neue Gruppe</button>
            </div>
            {
                Formtab?
            
            <div className="w-full   px-40 mb-4 grid grid-cols-2 gap-6 items-center justify-items-start">
                <div className="w-full">
                <label for="gn" className="text-white">Gruppenname
                <input  type='text' id='gn' name="groupname" placeholder='Gruppenname' className='mt-2 w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                </label>
                </div>
                <div className="w-full">
                <label for="gr" className="text-white">Gruppen-Richtlinien
                <select id="gr" className="mt-2  w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <option className="bg-[#1c3a48] ">Richtlinie auswählen</option>
                <option className="bg-[#1c3a48] text-white">Standard</option>
                <option className="bg-[#1c3a48] text-white">Moderatoren</option>
                <option className="bg-[#1c3a48] text-white">Admin</option>
                <option className="bg-[#1c3a48] text-white">Analyst</option>
                </select>
                </label>
                </div>
                <div className="w-full">
                <label className="text-white relative block">Benutzer hinzufügen
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 mt-8 fill-gray-400" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
  </span>
                <input onFocus={()=>setIsSearched(true)}    type='text' id='bh' name="addbenutzer" placeholder='Benutzer hinzufügen' className='mt-2 w-full pl-8 p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                {
                    IsSearched?
                    <div onMouseLeave={()=>setIsSearched(false)} class="w-[100%] absolute inset-x-start left-0 flex flex-col items-center  bg-[#1c3a48] border border-[rgba(255,255,255,0.1)]">
                    <div className="w-full p-2">Benutzer der gesucht wird</div>
                    <div className="w-full p-2">Benutzer der gesucht wird</div>
                    <div className="w-full p-2">Benutzer der gesucht wird</div>
                </div>
                :
                <></>
                }
                </label>
                </div>
                <div className="w-full">
                <label for="gr" className="text-white">Status
                <select id="gr" className="mt-2  w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <option className="bg-[#1c3a48] ">Status auswählen</option>
                <option className="bg-[#1c3a48] text-white">Aktiv</option>
                <option className="bg-[#1c3a48] text-white">Inaktiv</option>
                </select>
                </label>
                </div>
                <div className="w-full md:col-span-2 col-span-1">
                <div className="w-full text-white">Benutzer (13)</div>
                <div className="mt-2 border p-2 border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 pr-6 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4 mt-2'>Benutzer 1 <a className="ml-4 font-semibold inline text-red-600" >X</a></div>
                </div>
                </div>
            </div>
            :
            <></>
            }
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
                <div id={index} key={item+index} className="w-full  odd:bg-[rgba(0,0,0,0.2)] even:bg-[rgba(0,0,0,0.07)]">
                <div className="w-full grid grid-cols-10 items-start justify-items-start  py-3 hover:bg-[rgba(255,255,255,0.07)]">
                   <div className="w-full min-h-full  pt-2 md:col-span-2 col-span-5 pl-2">{item.Gname}</div>
                    <div className="w-full min-h-full col-span-3 pl-2 md:block hidden pt-2">{item.Rechte}</div>
                    <div className="w-full min-h-full  pt-2  md:col-span-1 col-span-2 pl-2">{item.Aktiv?<><a className="float-left text-lime-500 mr-4">Aktiv</a> <span className="w-3 h-3 rounded-full float-left bg-lime-500 mr-8 mt-1 "></span></>:<><a className="float-left text-red-500 mr-4">Inaktiv</a> <span className="w-3 h-3 rounded-full float-left bg-red-500 mr-8 mt-1 "></span></>}</div>
                    <div className="w-full min-h-full  pt-2 md:col-span-1 col-span-3 pl-2">{item.Anzahl}</div>
                    <div className="w-full min-h-full   md:col-span-3 col-span-10 pl-2 ">
                        <button onClick={()=>{if(confirm('Möchten Sie wirklich die Gruppe löschen?')){deleteGroup({I:index});}}} className="float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 bg-[#0f2027] flex flex-col items-center justify-center  w-10 h-10 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] mr-10"><MdDelete className="inline " /></button>
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