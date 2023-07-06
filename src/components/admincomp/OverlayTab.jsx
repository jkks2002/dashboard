import React, { useEffect } from "react";
import NewGroup from "./overlayviews/NewGroup";


const OverlayTab = ({Closer,View,Tname})=>{
    console.log(View)
    const OverlayHandler = ({View}) =>{
        switch(View){
             case "Gruppen anlegen":
                return(<NewGroup />);
        }
    }
    useEffect(()=>{
        OverlayHandler({View});
    },[])
    return(
        <>
        <div className="fixed z-[1] mt-[-160px] w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]"></div>
        <div className="absolute z-[20]  w-full  flex flex-col items-center justify-center">
            <div className="  w-5/6 cursor-pointer  bg-[#1c3a48] rounded border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(0,0,0,0.5)] flex flex-col items-start justify-top  mb-40">
            <div className="w-full text-right px-4 py-1 border-b border-[rgba(255,255,255,0.05)] text-white"><a className="float-left text-white uppercase text-gray-400">{Tname}</a><a onClick={()=>Closer(false)} className="cursor-pointer">X</a></div>
            <NewGroup />
            </div>
        </div>
        </>
    );
}

export default OverlayTab;