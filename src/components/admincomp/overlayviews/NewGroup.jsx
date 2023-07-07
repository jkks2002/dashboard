import React, { useState } from "react";
import { FaEdit, FaUser } from "react-icons/fa";
import { MdDelete, MdGroupAdd } from "react-icons/md";
const NewGroup = ()=>{
    const[IsSearched,setIsSearched]=useState(false)
    const[Formtab,setFormtab]=useState(false)
    const[Rtab,setRtab]=useState(false)
    const[ustestarr,setustestarr]=useState([
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
        'Benutzer 1',
    ]);
    const[testarr,settestarr]=useState([
        {'Gname': 'Standard', 'Rechte':'Minimal','Aktiv':true,'Anzahl':234},
        {'Gname': 'Moderatoren', 'Rechte':'Mittlere','Aktiv':false,'Anzahl':1},
        {'Gname': 'Admin', 'Rechte':'Alle','Aktiv':true,'Anzahl':6},
        {'Gname': 'Analyst', 'Rechte':'Analyse','Aktiv':true,'Anzahl':14}
    ])
    const deleteGroup=({I})=>{
        document.getElementById(I).style.display="none";
    }
    return(<>
    <div className="w-full   md:px-40 px-4  mt-10 text-white ">
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '><MdGroupAdd className="inline mr-4" />Neue Abteilung</button>
            </div>
            {
                Formtab?
            
            <div className="w-full   md:px-40 px-4 mb-4 md:mt-0 mt-4 grid grid-cols-2 gap-6 items-center justify-items-start">
                <div className="w-full">
                <label for="gn" className="text-white">Name der Abteilung
                <input  type='text' id='gn' name="groupname" placeholder='Gruppenname' className='mt-2 w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                </label>
                </div>
                <div className="w-full grid grid-cols-12 items-center">
                    <div className="w-full col-span-11 pr-2">
                <label for="gr" className="text-white">Abteilungs-Richtlinien
                <select id="gr" className="mt-2  w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <option value={'Minimal'} className="bg-[#1c3a48] ">Richtlinie auswählen</option>
                <option value={'Minimal'} className="bg-[#1c3a48] text-white">Standard</option>
                <option value={'Mittlere'} className="bg-[#1c3a48] text-white">Moderatoren</option>
                <option value={'Alle'} className="bg-[#1c3a48] text-white">Admin</option>
                <option value={'Analyse'} className="bg-[#1c3a48] text-white">Analyst</option>
                </select>
                </label>
                </div>
                <div className="w-full items-center justify-center">
                <button onClick={()=>setRtab(!Rtab)} className=' text-white inline transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-4 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] mt-8 hover:bg-[#214251] '>+</button>
                </div>
                </div>
                {
                    Rtab?
                    <>
                    <div className="w-full col-span-2">
                <div className="w-full text-white">Neue Richtlinien festlegen</div>
                <div className="mt-2 border p-2 grid grid-cols-5  gap-2 border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <div className="w-full col-span-5 inset transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 md:px-10 px-2  bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] mt-2">
                <label for="gn" className="text-white">Name der Abteilung-Richtlinie
                <input  type='text' id='gn' name="groupname" placeholder='Gruppenname' className='mt-2 w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                </label>
                </div>
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
            <button onClick={()=>setRtab(!Rtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4'>Abbrechen</button>
            <button onClick={()=>setRtab(!Rtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '>Speichern</button>
            </div>
                </div>
                    </>
                    :
                    <></>
                }
                

                <div className="w-full">
                <label className="text-white relative block">Benutzer hinzufügen
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 mt-8 fill-gray-400" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
  </span>
                <input onKeyUp={(e)=>{(e.which==65)?setIsSearched(true):setIsSearched(false)}}    type='text' id='bh' name="addbenutzer" placeholder='Benutzer hinzufügen' className='mt-2 w-full pl-8 p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]' />
                {
                    IsSearched?
                    <div onMouseLeave={()=>setIsSearched(false)} class="w-[100%] absolute inset-x-start left-0 flex flex-col items-center  bg-[#1c3a48] border border-[rgba(255,255,255,0.1)]">
                    <div onClick={()=>{ustestarr.push('Ali'); setIsSearched(false)}} className="w-full p-2 hover:bg-[rgba(0,0,0,0.2)]"><FaUser className="inline border border-[rgba(255,255,255,0.1)] rounded-full mr-4" />Ali</div>
                    <div onClick={()=>{ustestarr.push('Andre'); setIsSearched(false)}} className="w-full p-2 hover:bg-[rgba(0,0,0,0.2)]"><FaUser className="inline border border-[rgba(255,255,255,0.1)] rounded-full mr-4" />Andre</div>
                    <div onClick={()=>{ustestarr.push('Armin'); setIsSearched(false)}} className="w-full p-2 hover:bg-[rgba(0,0,0,0.2)]"><FaUser className="inline border border-[rgba(255,255,255,0.1)] rounded-full mr-4" />Armin</div>
                </div>
                :
                <></>
                }
                </label>
                </div>
                <div className="w-full">
                <label for="stateif" className="text-white">Status
                <select id="stateif" className="mt-2  w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                <option value="true" className="bg-[#1c3a48] ">Status auswählen</option>
                <option value={'true'} className="bg-[#1c3a48] text-white">Aktiv</option>
                <option value={'false'} className="bg-[#1c3a48] text-white">Inaktiv</option>
                </select>
                </label>
                </div>
                <div className="w-full col-span-2 ">
                <div className="w-full text-white">Benutzer ({ustestarr.length})</div>
                <div className="mt-2 border p-2 border-[rgba(255,255,255,0.12)] text-sm grid md:grid-cols-5 grid-cols-2 text-gray-400 rounded shadow-inner-2 bg-[rgba(255,255,255,0.1)]">
                    {
                        ustestarr.map((item,index)=>(
                            <div id={item+index} key={item+index} className='inline-block inset transition-opacity duration-1000 ease-out opacity-80 md:text-sm text-xs hover:opacity-100 md:px-10 px-4  bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)]  md:ml-4 ml-2 mt-2'>{item} <a onClick={()=>document.getElementById(item+index).style.display="none"} className="ml-4 float-right font-semibold inline text-red-600" >X</a></div>
                        ))
                    }
                </div>
                <div className="w-full   mt-10 text-white ">
            <button onClick={()=>setFormtab(!Formtab)} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] ml-4'>Abbrechen</button>
            <button onClick={()=>{testarr.push({'Gname': document.getElementById('gn').value, 'Rechte':document.getElementById('gr').value,'Aktiv':(document.getElementById('stateif').value.toString()=="true")?true:false ,'Anzahl':parseInt(Math.random() * (255 - 74) + 5)}); setFormtab(!Formtab)}} className='float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 px-10 bg-[#0f2027] py-2 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] '>Speichern</button>
            </div>
                </div>
                
            </div>
            :
            <></>
            }
            <div className="w-full   md:px-40 px-4  mt-6 mb-20 text-white ">
                <div className="w-full border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] mb-4">
                <div className="w-full grid grid-cols-10 items-start justify-items-start py-2 divide-x divide-[rgba(255,255,255,0.1)] border-b border-[rgba(255,255,255,0.1)]">
                    <div className="w-full md:col-span-2 col-span-5 pl-2 ">Gruppenname</div>
                    <div className="w-full md:col-span-3 pl-2 md:block hidden ">Gruppen-Richtlinien</div>
                    <div className="w-full md:col-span-1 col-span-2 pl-2 ">Status</div>
                    <div className="w-full md:col-span-1 col-span-3 pl-2 ">Benutzer</div>
                    <div className="w-full md:col-span-3 col-span-10 pl-2 "></div>
                </div>
           { 
           testarr.map((item,index)=>(
                <div id={index} key={item+index} className="w-full  odd:bg-[rgba(0,0,0,0.2)] even:bg-[rgba(0,0,0,0.07)]">
                <div className="w-full grid grid-cols-10 items-start justify-items-start  py-3 hover:bg-[rgba(255,255,255,0.07)]">
                   <div className="w-full min-h-full  pt-2 md:col-span-2 col-span-5 pl-2">{item.Gname}</div>
                    <div className="w-full min-h-full col-span-3 pl-2 md:block hidden pt-2">{item.Rechte}</div>
                    <div className="w-full min-h-full  pt-2  md:col-span-1 col-span-2 pl-2">{item.Aktiv?<><a className="float-left text-lime-500 mr-4 md:block hidden">Aktiv</a> <span className="w-3 h-3 rounded-full float-left bg-lime-500 mr-8 mt-1 "></span></>:<><a className="float-left text-red-500 mr-4  md:block hidden">Inaktiv</a> <span className="w-3 h-3 rounded-full float-left bg-red-500 mr-8 mt-1 "></span></>}</div>
                    <div className="w-full min-h-full  pt-2 md:col-span-1 col-span-3 pl-2">{item.Anzahl}</div>
                    <div className="w-full min-h-full   md:col-span-3 col-span-10 pl-2 ">
                        <button onClick={()=>{if(confirm('Möchten Sie wirklich die Gruppe löschen?')){deleteGroup({I:index});}}} className="md:float-right float-left transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 bg-[#0f2027] flex flex-col items-center justify-center  w-10 h-10 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] md:mr-10 ml-4"><MdDelete className="inline " /></button>
                        <button className="md:float-right float-left float-right transition-opacity duration-1000 ease-out opacity-80 hover:opacity-100 bg-[#0f2027] flex flex-col items-center justify-center  w-10 h-10 rounded border border-[rgba(255,255,255,0.1)] hover:bg-[#214251] md:mr-10 ml-4"><FaEdit className="inline " /></button>
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