import React from 'react'
import { useState } from 'react';
import '../App.css'

export default function Home() {

  const [musicState, setmusicState] = useState(true);

  // Function to play or pause the music and also changing the icon.
  const Playmusic = () =>{
    setmusicState(!musicState)
  }
  
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
            <i className="bi bi-search text-base pl-2"></i>
          </div>
        </div>
        {/* Div for buttons. */}
        <div className="buttons flex items-center">
          <button className='maincolor pb-1 px-2 text-base font-bold rounded-sm'>Login</button>
          <button className='border-2 bordercolor maintextcolor pb-1 px-2 text-sm font-bold rounded-sm ml-3 mr-6'>SignUp</button>
          {/* Div for Playpause. */}
          <div className="Playpausebutton maincolor rounded-full flex justify-center items-center h-[3rem] w-[3rem]">
            <button onClick={Playmusic}>
              {musicState ? <i className="bi bi-play-fill text-5xl flex mx-auto pl-1"></i> : <i className="bi bi-pause-fill text-5xl flex mx-auto"></i>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
