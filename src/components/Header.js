import React from 'react'
import { FaSearch } from "react-icons/fa";


export const Header = ({setSearch}) => {
  return (
    <>
    <div className="flex items-center justify-center relative w-full  ">
        <input type="text" className='text-xl text-slate-700 font-semibold px-5 py-3 rounded-full focus:outline-none  ring-4 ring-slate-800 w-full  ' placeholder='Search City here...' defaultValue={"Coimbatore"} onChange={e=>setSearch(e.target.value)}/>
        <span className='bg-white absolute  right-5 '><FaSearch className='text-slate-700 text-3xl ' /></span>
    </div>
    </>
  )
}
