import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Div for Footer. */}
            <div className="Footer bg-black w-[100%] px-10 py-3">
                {/* Div for Icons & text. */}
                <div className="Maindiv flex justify-between items-end w-[100%] border-b-2 border-white pb-1">

                    {/* Div for Icons */}
                    <div className="Icons flex">
                        <img className='h-[2rem] ml-2 cursor-pointer' src="/Photos/Facebook.png" alt="" />
                        <img className='h-[2rem] ml-2 cursor-pointer' src="/Photos/Instagram.png" alt="" />
                        <img className='h-[2rem] ml-2 cursor-pointer' src="/Photos/Twitter Bird.png" alt="" />
                        <img className='h-[2rem] ml-2 cursor-pointer' src="/Photos/YouTube.png" alt="" />
                    </div>

                    {/* Div for copyright text. */}
                    <div className='text'>
                        <h1 className='text-white madimione font-normal'>All rights reserved &copy; 2025</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
