import React,{useEffect, useState}  from 'react'
import { TiWeatherCloudy } from "react-icons/ti";



export const Main = (props) => {


  


  return (
    <>
    <div className="mt-4 flex items-center justify-center text-slate-800 relative">
        <div className="">
            <span className='flex flex-col items-center justify-center  '>
                {/* <TiWeatherCloudy className='text-9xl  ' /> */}
                <img src={props.cloud  
                 }  alt="" className=' w-[100px] h-[100px] 
                 
                 '/>
 

                <span className='text-4xl font-semibold text-center text-orange-600 uppercase '>{props.city}</span>
                <span className='text-2xl font-bold text-slate-600 '>{props.country}</span>
            </span>
            <div className='text-3xl font-bold text-center mt-2   '>{props.temp}°C</div>
        </div>
        <div className="absolute top-0 right-0 p-3 text-center text-xl font-semibold">
        
                Latitute <br /><span className='text-2xl '>{props.lat}</span>
        </div>
        <div className="absolute top-0 left-0 p-3 text-center text-xl font-semibold">
        
                Longitude <br /><span className='text-2xl '>{props.lon}</span>
        </div>
        
        <div className=""></div>
    </div>
    </>
  )
}
// 222