import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
export const Main = () => {
  return (
    <>
    <div className="mt-4 flex items-center justify-center text-slate-800 relative">
        <div className="">
            <span className='flex flex-col items-center justify-center  '>
                <TiWeatherCloudy className='text-9xl  ' />
                <span className='text-xl font-semibold text-center '>Clouds</span>
            </span>
            <div className='text-5xl font-bold text-center mt-2   '>20°C</div>
        </div>
        <div className="absolute top-0 right-0 p-3 text-center text-xl font-semibold">
        
                Latitute <br /><span className='text-2xl '>0</span>
    
        </div>
        <div className=""></div>
    </div>
    </>
  )
}
// 222