import React from 'react'
import { FaWind } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
export const Footer = (props) => {
  return (
    <>
    <div className="h-[200px] flex items-center justify-between w-full ">

    <div className="flex flex-col items-center justify-center ">
        <MdWaves className='text-5xl ' />
        <span className='text-3xl font-semibold '>{props.humidity}%</span>
    </div>
    
    <div className="flex flex-col items-center justify-center ">
        <FaWind className='text-5xl ' />
        <span className='text-3xl font-semibold '>{props.wind}Km/hr</span>
    </div>
    
  
    </div>
    <span className='text-center font-semibold mt-5 '>Created by <strong>Roniwilliams</strong></span>
    </>
  )
}
