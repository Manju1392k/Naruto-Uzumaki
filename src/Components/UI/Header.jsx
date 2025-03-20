import React from 'react'
import { useState, useRef, useEffect } from 'react';

export default function Header() {

    // musicState for changing play & pause icon and play & pausing the music.
    const [musicState, setMusicState] = useState(false);
    // audioRef to hold audio time line.
    const audioRef = useRef(null);

    // useEffect to play the music from when it is paused time line. If there is not previous time line it will play from start.
    useEffect(() => {
        audioRef.current = new Audio("/Audio/Naruto Theme.mp3");
        audioRef.current.loop = true;
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);

    // Function to play,pause the music and update the musicState, And also changing the play pause icon.
    const Playmusic = () => {
        if (musicState) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setMusicState(!musicState);
    };

    return (
        <>
            {/* Div for navbar */}
            <div className="navbar flex justify-around items-center w-[100vw] py-4 bg-black">

                {/* div for logo. */}
                <div className="logo">
                    <h1 className='maintextcolor madimione text-3xl'>Naruto Uzumaki</h1>
                </div>

                {/* Div for Search box. */}
                <div className="serachbox bg-white py-2 px-2 rounded-md flex items-center">
                    {/* Div for borderline. */}
                    <div className="borderline border-r-[0.2rem] border-black pr-2">
                        {/* Input field for search. */}
                        <input type="search" placeholder='Search' className='px-2 border-2 border-black h-[0.5rem] text-xs focus:outline-none py-3 font-semibold inter w-[20rem] rounded-md' />
                    </div>
                    {/* Div for Search Icon. */}
                    <div className="SearchIcon">
                        <i className="bi bi-search text-base pl-2"></i>
                    </div>
                </div>

                {/* Div for buttons. */}
                <div className="buttons flex items-center">
                    <button className='maincolor pb-1 px-2 text-[0.9rem] font-bold rounded-sm'>Login</button>
                    <button className='border-2 bordercolor maintextcolor pb-1 px-2 text-[0.8rem] font-bold rounded-sm ml-3 mr-6'>SignUp</button>
                    {/* Div for Playpause. */}
                    <div className="Playpausebutton maincolor rounded-full flex justify-center items-center h-[2.7rem] w-[2.7rem]">
                        <button onClick={Playmusic}>
                            {musicState ? (
                                <i className="bi bi-pause-fill text-4xl flex mx-auto"></i>
                            ) : (
                                <i className="bi bi-play-fill text-4xl flex mx-auto pl-1"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
