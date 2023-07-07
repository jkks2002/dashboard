import React from "react";
import PolarChart from "./PolarChart";
import AreaChart from "./AreaChart";
const OneSpan = ({Title, IsChart, ChartTyp, DataObj}) =>{

    const Charter = ({Title, ChartTyp, DataObj})=>{
         
        switch(ChartTyp){
            case 'PolarChart':
                return (<PolarChart  Type={Title}   />);
            case 'AreaChart':
                return (<AreaChart  Type={Title}   />);                
        }
    }
    const Layout = ({Title, DataObj})=>{
         
        switch(Title){
            case 'Benutzerliste':
            let b=[
                {'Uname':'Natalie','Right':'Low'},
                {'Uname':'Marcel','Right':'Medium'},
                {'Uname':'Nando','Right':'Full'},
                {'Uname':'Andre','Right':'Low'},
                {'Uname':'Michael','Right':'Low'},
                {'Uname':'Daniel','Right':'Full'},
                {'Uname':'Patrick','Right':'Medium'},
                {'Uname':'Peter','Right':'Medium'},
            ] ;   
            return (<>
            <div className="w-full h-full flex flex-col items-start justify-start divide-y divide-gray-500">
            <div className="w-full grid grid-cols-10 dark:text-gray-400 text-gray-900  py-1 ">
                            <div className="w-full col-span-4">Name</div>
                            <div className="w-full col-span-6">Rechte</div>
                        </div>
                {
                    b.map((item,index)=>(
                        <div key={item+index} className="hover:bg-[rgba(0,0,0,0.14)] w-full grid grid-cols-10 py-1">
                            <div className="w-full col-span-4">{item.Uname}</div>
                            <div className="w-full col-span-4">{item.Right}</div>
                            <div className="w-full col-span-2 flex flex-col items-center justify-center">{item.Right=="Low"?<div className="w-4 h-4 dark:bg-red-500 bg-red-600 rounded-full"></div>:<>{item.Right=="Medium"?<div className="w-4 h-4 dark:bg-yellow-500 bg-yellow-400 rounded-full"></div>:<div className="w-4 h-4 dark:bg-lime-500 bg-lime-400 rounded-full"></div>}</>}</div>
                        </div>
                    ))
                }
                  </div> </> );
                           
        }
    }

    return(
        <div className='inset transition-opacity duration-1000 ease-out opacity-80  hover:opacity-100 w-full p-4 cursor-pointer  dark:bg-[#0f2027] bg-[#8e9eab] rounded-xl border dark:border-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.3)] flex flex-col items-start justify-top  '>
                            <div className='w-full  flex flex-col items-center justify-center dark:text-white text-gray-700  border-b dark:border-[rgba(255,255,255,0.08)] border-[rgba(0,0,0,0.18)] pb-4 '>{Title}</div>
                            <div className='w-full  flex flex-col items-start justify-start dark:text-white text-gray-700  md:h-[350px] h-auto pt-4'>
                                {
                                    IsChart?
                                    <><Charter Title={Title} ChartTyp={ChartTyp}  /></>
                                    :
                                    <><Layout  Title={Title}  DataObj={DataObj} /></>
                                }
                            </div>
                        </div>
    );
}

export default OneSpan;