import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router";

export default function Header() {

    // musicState for changing play & pause icon and play & pausing the music.
    const [musicState, setMusicState] = useState(false);
    // audioRef to hold audio time line.
    const audioRef = useRef(null);

    // searchTerm is search input tag.
    const [searchTerm, setSearchTerm] = useState('');
    // Saving information in characters usestate.
    const [characters, setCharacters] = useState([]);
    // Based on keyword the charactor will be display. FilteredCharactors usestate.
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    // To open & close menubar.
    const [Menubar, setMenubar] = useState(false)

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

    // Fetching total charactors then, After find the charactor with keyword.
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://naruto-api-rsl3.onrender.com/api/v1/characters');
                const result = await response.json();
                setCharacters(result);
                setFilteredCharacters(result);
            } catch (error) {
                console.error('Error while fetching this character data:', error);
            }
        };
        fetchCharacters();
    }, []);

    // Function to work search input tags and fetching the charactor data from keyword.
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = characters.filter((character) =>
            character.name.toLowerCase().includes(value)
        );
        setFilteredCharacters(filtered);
    };

    // Function to Open & Close Menubar.
    const OpenCloseMenu = () => {
        setMenubar(!Menubar)
    }

    return (
        <>
            {/* Div for navbar (Desktop) */}
            <div className="navbar Desktop flex justify-around items-center w-[100vw] py-4 bg-black sm:hidden lg:hidden">

                {/* div for logo. */}
                <div className="logo">
                    <NavLink to='/' end>
                        <h1 className='maintextcolor madimione text-3xl'>Naruto Uzumaki</h1>
                    </NavLink>
                </div>

                {/* Div for Search box. */}
                <div className="serachbox bg-white py-2 px-2 rounded-md flex items-center">
                    {/* Div for borderline. */}
                    <div className="borderline border-r-[0.2rem] border-black pr-2">
                        {/* Input field for search. */}
                        <input type="search" placeholder='Search' className='px-2 border-2 border-black h-[0.5rem] text-xs focus:outline-none py-3 font-semibold inter w-[20rem] rounded-md'
                            value={searchTerm}
                            onChange={handleSearch}
                        />
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

            {/* Responsive design Navbar. */}
            <div className="ResponsiveNavbar hidden sm:flex lg:flex bg-black w-[100%]  justify-around items-center flex-col px-8 py-4">

                {/* Div for Name & MenuIcon. */}
                <div className="NameMenuIcon w-[100%] flex justify-between items-center">
                    {/* div for logo. */}
                    <div className="logo">
                        <NavLink to='/' end>
                            <h1 className='maintextcolor madimione text-3xl'>Naruto Uzumaki</h1>
                        </NavLink>
                    </div>

                    {/* Div for Menu Icon. */}
                    <div className="Menuicon">
                        <img src="/Photos/Menu.png" alt="" className='h-[1rem]' onClick={OpenCloseMenu} />
                    </div>
                </div>

                {/* Div for Search. */}
                <div className="Search w-[100%] mt-3">
                    {/* Div for Search box. */}
                    <div className="serachbox bg-white py-2 px-2 rounded-md flex items-center justify-around">
                        {/* Div for borderline. */}
                        <div className="borderline border-r-[0.2rem] border-black pr-2 w-[100%]">
                            {/* Input field for search. */}
                            <input type="search" placeholder='Search' className='px-2 border-2 border-black h-[0.5rem] text-xs focus:outline-none py-3 font-semibold inter w-[100%] rounded-md'
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                        {/* Div for Search Icon. */}
                        <div className="SearchIcon">
                            <i className="bi bi-search text-base pl-2"></i>
                        </div>
                    </div>
                </div>

            </div>

            {/* Responsive Menubar. */}
            <div className={`ResponsiveMenubar hidden flex-col items-center py-5 bg-black  ${Menubar ? 'flexMenubarcss' : 'hidden'}`}>

                <button className='maincolor pb-1 px-2 text-[0.9rem] font-bold rounded-sm'>Login</button>

                <button className='border-2 bordercolor maintextcolor pb-1 px-2 text-[0.8rem] font-bold rounded-sm my-4'>SignUp</button>

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

            {/* If the search input is actived or user searching for charactor the below div will popup. */}
            {searchTerm && (
                // Div for background of cards.
                <div className="bg-white py-4 px-8 w-full h-max flex flex-col">
                    {filteredCharacters.length > 0 ? (
                        filteredCharacters.map((character, index) => (
                            <>
                                {/* Div for Search Result cards. */}
                                <div
                                    key={index}
                                    className="Card shadow-sm my-2 p-4 shadow-black flex items-center rounded-md"
                                >
                                    <img
                                        src={character.images[0]}
                                        alt=''
                                        className="Image w-[8rem] h-[10rem] object-cover rounded-md mr-4"
                                    />
                                    {/* Div for name. */}
                                    <div>
                                        <h1 className="font-bold text-lg">{character.name}</h1>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        // If no data is found on search key. The below message will show.
                        <h1 className="text-black">No results found.</h1>
                    )}
                </div>
            )}

        </>
    )
}
