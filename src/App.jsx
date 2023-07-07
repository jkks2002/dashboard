import React,{ useEffect, useState } from 'react'
import TaskView from './components/TaskView'
import Header from './components/Header';
import {sha256} from 'crypto-hash';
import Admin from './components/Admin';
import Home from './components/Home';
if (localStorage.getItem('theme') === 'false' || (!(localStorage.getItem('theme')))) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
const App=()=> {
   const[Lstat , setLstat]=useState(false);
   const[LView , setLView]=useState(0);
   const[TErr , setTErr]=useState(false);
   const[ErrTxt , setErrTxt]=useState('');
   const[ApiStor , setApiStor]=useState('null');
    
   const checkLogStatus = ()=>{
    if(localStorage.getItem('isLogged')!=null | localStorage.getItem('isLogged')){
        setLstat(localStorage.getItem('isLogged'));
    }
   }
   const logMeIn = async ({U,P})=>{
    
    let Uhash = await sha256(U.toString()); //'Admin@Kurth'
    let Phash = await sha256(P.toString()); //'Net@Kurth'
    
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //mode: 'no-cors',
        body: JSON.stringify({
            "U": Uhash.toString(),                
            "P": Phash.toString(),                
        })
    };
        //console.log(requestOptions.body.toString());
        const a = await fetch("http://localhost/scheduletask/backend/loghandler.php",requestOptions);
         
        const e= await a.json(); 
        console.log(e)
        if((e.aToken)&&(e.pToken)&&(e.sToken)&&(e.u)&&(e.usp)){
            localStorage.setItem('AToken',e.aToken);
            localStorage.setItem('PToken',e.pToken);
            localStorage.setItem('SToken',e.sToken);
            localStorage.setItem('UToken',e.u);
            localStorage.setItem('USP',e.usp);
            localStorage.setItem('isLogged',true);
            document.getElementById('u').value='';
            document.getElementById('p').value='';
            setLstat(true);
        }else{
            setTErr(true)
            if(e.u.toString()!="false"){
                let dt=new Date(Number(1000*e.u.toString()))
                setErrTxt('Zu viele Versuche! Der Login ist für 15 Minuten gesperrt bis: '+new Intl.DateTimeFormat('de-DE', { dateStyle: 'short', timeStyle: 'short' }).format(dt));
            }
        }
   }

   useEffect(()=>{    
    checkLogStatus();     
   },[]);
  return (
    
    <div className='w-full h-full m-0 p-0  dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] bg-[#FFFFFF]'>
        <Header  SFront={setLstat} LogStat={Lstat} LViewer={setLView} />
        {
            Lstat?
            <>
            {
                LView==0?
                <Home   SFront={setLstat} LogStat={Lstat} LViewer={setLView} />
                :
                <></>
            }
            {
                LView==1?
                <Admin   SFront={setLstat} LogStat={Lstat} LViewer={setLView} />
                :
                <></>
            }
             {
                LView==2?
                <TaskView   SFront={setLstat} LogStat={Lstat} LViewer={setLView} />
                :
                <></>
            }
            </>
            :
            <>
            <div className='w-full flex flex-col items-center justify-center text-white  mt-20 pt-20 md:px-0 px-10'>
            <div className='md:w-2/5 w-full dark:bg-gradient-to-r dark:from-[#0f202788] dark:to-[#0f202788] bg-gradient-to-r from-[#8e9eab] to-[#8e9eab] rounded-xl border border-[rgba(255,255,255,0.1)] p-4  shadow-2xl shadow-inner-2xl shadow-[rgba(0,0,0,0.3)]'>
            <div className='w-full  flex flex-col items-start justify-start'>
            <div className='w-full pl-8 Roboto_Bold md:text-2xl text-xl md:my-4 my-2 dark:text-white text-gray-700 md:mb-8 mb-4'>
                LOGIN
            </div>
            {
                TErr?
                <div className='w-full md:px-14 px-8 my-2 mb-4 bebe'>
                <div className='fadein block dark:bg-[rgba(255,0,0,0.2)] bg-[rgba(255,0,0,0.8)] border border-[rgba(255,0,0,0.1)] p-2 text-sm'>Ihre Zugangsdaten sind falsch!
                <div className='p-2 text-sm'>{ErrTxt}</div></div>
                </div>
                :
                <></>
            }
                 
                <div className='w-full md:pl-14 pl-8 Roboto_Bold text-sm dark:text-[#b7bec1] text-gray-700 '>
                    Username
                </div>
                <div className='w-full  md:px-14 px-8 my-2'>
                    <label>
                        <input onFocus={()=>setTErr(false)} type='text' id='u' name="username" placeholder='Username' className='w-full p-2 border border-[rgba(255,255,255,0.12)] text-sm rounded shadow-inner-2 dark:text-white text-gray-600 dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.8)]' />
                    </label>
                </div>
                <div className='w-full  md:pl-14 pl-8 Roboto_Bold text-sm dark:text-[#b7bec1] text-gray-700 mt-2'>
                    Password
                </div>
                <div className='w-full  md:px-14 px-8 my-2 mb-8'>
                    <label>
                        <input onFocus={()=>setTErr(false)}  onKeyUp={(event)=>(event.which===13)?logMeIn({
            U:document.getElementById('u').value,
            P: document.getElementById('p').value
         }):''} type='password' id='p' name="password" placeholder='Password' autoComplete='true' className='w-full p-2 border border-[rgba(255,255,255,0.12)]  text-sm rounded shadow-inner-2 dark:text-white text-gray-600 dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.8)]' />
                    </label>
                </div>
                <div className='w-full  md:px-14 px-8 Roboto_Bold text-sm text-white mt-2'>
                    <button  onClick={()=>logMeIn({
                        U:document.getElementById('u').value,
                        P: document.getElementById('p').value
                     })} className='transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100 px-10 bg-[#2d4f5e] py-2 rounded border border-[rgba(255,255,255,0.1)] dark:hover:bg-[#1a3743] hover:bg-[#4c555c] mb-4'>
                    Login
                    </button>
                </div>
                 
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
            </>
        }   
        <div className='fixed z-[0] text-white  dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] bg-gradient-to-r from-[#eef2f3] via-[#8e9eab] to-[#eef2f3]  w-full bottom-0 left-0 bshadm  border-t border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center text-xs py-2'>JKK Task Overview - Made with ❤ by Stephan & Fernando</div>  
    </div>
    
  )
}

export default App
