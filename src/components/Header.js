import React from 'react'
import { FaSearch } from "react-icons/fa";


export const Header = ({setSearch,search}) => {
  return (
    <>
    <div className="flex items-center justify-center relative w-full  ">
        <input type="text" className='text-xl text-slate-700 font-semibold px-5 py-3 rounded-full focus:outline-none  ring-4 ring-slate-800 w-full  ' placeholder='Search City here...' defaultValue={"Coimbatore"} onChange={e=>
        {setSearch(e.target.value)
          
        }

        }/>
        <button className='bg-white absolute  right-5 '
        onClick={search} 
        ><FaSearch className='text-slate-700 text-3xl ' /></button>
    </div>
    </>
  )
}
