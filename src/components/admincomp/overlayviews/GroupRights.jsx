import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdGroupAdd, MdOutlinePrivacyTip, MdPrivateConnectivity } from "react-icons/md";
const GroupRights = ()=>{
    const[IsSearched,setIsSearched]=useState(false)
    const[Formtab,setFormtab]=useState(false)
    const deleteGroup=({I})=>{
        document.getElementById(I).style.display="none";
    }
    return(<>
    <div className="w-full   md:px-8 px-4 mt-10 text-white ">
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '><MdOutlinePrivacyTip className="inline mr-4" />Neue Richtlinie</button>
            </div>
            {
                Formtab?
            
            <div className="w-full   md:px-40 px-4 mb-4 md:mt-0 mt-4 grid grid-cols-2 gap-6 items-center justify-items-start">
                <div className="w-full">
                <label for="gn" className="text-white">Richtlinien-Name
                <input  type='text' id='gn' name="groupname" placeholder='Richtlinien-Name' className='mt-2 w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                </label>
                </div>
                <div className="w-full">
                <label for="gr" className="text-white">Richtlinien-Gruppe
                <select id="gr" className="mt-2  w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <option className="bg-[#1c3a48] ">Richtlinie auswählen</option>
                <option className="bg-[#1c3a48] text-white">Standard</option>
                <option className="bg-[#1c3a48] text-white">Moderator</option>
                <option className="bg-[#1c3a48] text-white">Admin</option>
                </select>
                </label>
                </div>
                
                <div className="w-full col-span-2">
                <div className="w-full text-white">Besondere Richtlinien</div>
                <div className="mt-2 border p-2 grid grid-cols-5  gap-2 border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                    
                    <div className='inline-block w-full col-span-4  inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2  bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] mt-2'>
                        <div className="text-gray-100 uppercase underline mb-1">
                            Analayse
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea beatae mollitia? Blanditiis voluptas, quam ut commodi sit soluta corporis magni quae dolores possimus corrupti, error itaque rem illum ratione.
                        </div>
                    </div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2 flex items-center bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251]  mt-2'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div className='inline-block w-full col-span-4 inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2  bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] mt-2'>
                        <div className="text-gray-100 uppercase underline mb-1">
                            Task Scheduler
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea beatae mollitia? Blanditiis voluptas, quam ut commodi sit soluta corporis magni quae dolores possimus corrupti, error itaque rem illum ratione.
                        </div>
                    </div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2 flex items-center bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251]  mt-2'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div className='inline-block w-full col-span-4 inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2  bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] mt-2'>
                        <div className="text-gray-100 uppercase underline mb-1">
                            REST-API
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea beatae mollitia? Blanditiis voluptas, quam ut commodi sit soluta corporis magni quae dolores possimus corrupti, error itaque rem illum ratione.
                        </div>
                    </div>
                    <div className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2 flex items-center bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251]  mt-2'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                </div>
                <div className="w-full   mt-10 text-white ">
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4'>Abbrechen</button>
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '>Speichern</button>
            </div>
                </div>
            </div>
            :
            <></>
            }
            <div className="w-full   md:px-8 px-4 mt-6 text-white ">
                <div className="w-full border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] mb-4">
                <div className="w-full grid grid-cols-10 items-start justify-items-start py-2 divide-x divide-[rgba(255,255,255,0.1)] border-b border-[rgba(255,255,255,0.1)]">
                    <div className="w-full col-span-5 pl-2 ">Gruppen-Richtlinien</div>
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
                   <div className="w-full min-h-full col-span-5 pl-2 pt-2">{item.Rechte}</div>
                    <div className="w-full min-h-full  pt-2  md:col-span-1 col-span-2 pl-2">{item.Aktiv?<><a className="float-left text-lime-500 mr-4 md:block hidden">Aktiv</a> <span className="w-3 h-3 rounded-full float-left bg-lime-500 mr-8 mt-1 "></span></>:<><a className="float-left text-red-500 mr-4 md:block hidden">Inaktiv</a> <span className="w-3 h-3 rounded-full float-left bg-red-500 mr-8 mt-1 "></span></>}</div>
                    <div className="w-full min-h-full  pt-2 md:col-span-1 col-span-3 pl-2">{item.Anzahl}</div>
                    <div className="w-full min-h-full   md:col-span-3 col-span-10 pl-2 ">
                    {item.Aktiv?<>
                    
                        <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</>:
                    <>
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</>}
                    </div>
                </div>
                </div>
            ))
            }
            </div>
            </div>
    </>);
}

export default GroupRights;