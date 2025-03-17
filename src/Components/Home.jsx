import React from 'react'
import '../App.css'

export default function Home() {
  return (
    <>
      {/* Div for navbar */}
      <div className="navbar flex justify-around items-center w-[100vw] py-4 bg-black">
        {/* div for logo. */}
        <div className="logo">
          <h1 className='maintextcolor madimione text-4xl'>Naruto Uzumaki</h1>
        </div>
        {/* Div for Search box. */}
        <div className="serachbox bg-white py-2 px-2 rounded-md flex items-center">
          {/* Div for borderline. */}
          <div className="borderline border-r-[0.2rem] border-black pr-2">
            {/* Input field for search. */}
            <input type="search" placeholder='Search' className='px-2 border-2 border-black h-[1rem] text-xs focus:outline-none py-3 font-semibold inter w-[20rem] rounded-md' />
          </div>
          {/* Div for Search Icon. */}
          <div className="SearchIcon">
          <i class="bi bi-search text-base pl-2"></i>
          </div>
        </div>
      </div>
    </>
  )
}
