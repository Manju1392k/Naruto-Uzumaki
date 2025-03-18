import React from 'react'
import { useState, useEffect, useRef } from 'react';
import '../App.css'

export default function Home() {

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
              {musicState ? (
                <i className="bi bi-pause-fill text-5xl flex mx-auto"></i>
              ) : (
                <i className="bi bi-play-fill text-5xl flex mx-auto pl-1"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Div for All age photos of Naruto. */}
      <div className="Image&Text flex justify-around items-center w-[100vw] h-max mt-5">
        {/* Div for All age photos of Naruto. */}
        <div className="Image">
          <img src="/Photos/All Age Naruto Image.png" alt="" className='h-[15rem]' />
        </div>
        {/* Div for Text. */}
        <div className="text flex flex-col items-start w-[50vw]">
          <h1 className='montserrat font-extrabold text-justify text-xl'>Naruto, a famous anime from Japan, is one of the most popular anime series in the world.</h1>
          <h1 className='inter text-justify text-sm my-4'>The story of Naruto follows the journey of Naruto Uzumaki, a young ninja who dreams of becoming the strongest ninja and the leader of his village, called the Hokage. The series explores themes of friendship, perseverance, and self discovery, which many viewers can relate to and find inspiring. The plot has many twists and turns, keeping the audience interested. The characters in Naruto are unique and memorable. Each character has their own backstory, personality, and abilities. This makes them relatable and interesting to watch. The relationships and interactions between the characters add depth to the story and keep viewers invested in their journeys. Naruto features many intense and well animated action scenes. The battles are exciting and showcase a variety of ninja techniques and powers. These action scenes are visually impressive and keep viewers on the edge of their seats. Naruto has a large and loyal fanbase. The series has been adapted into multiple forms of media, including manga, anime, movies, and video games, which have helped to expand its popularity. The merchandise, such as action figures, clothing, and accessories, also contributes to its widespread recognition.</h1>
          <a href='https://www.imdb.com/title/tt0409591/' target='_blank' className='mainbutton'>Watch Now</a>
        </div>
      </div>

      {/* Div for the creators of Naruto. */}
      <div className="NarutoCreators w-[100%] bg-black px-10 py-4 mt-5">
        {/* Div for heading. */}
        <div className="heading w-[100%] flex justify-around items-center border-b-2 border-[#FF851B]">
          <h1 className='maintextcolor font-extrabold text-2xl montserrat'>The Creators of Naruto</h1>
        </div>
        {/* Div for naruto creator image box. */}
        <div className="NarutoCreatorImage&Text w-[100%] bg-white mt-5 rounded-sm flex justify-around items-center py-5">
          {/* Div for Text. */}
          <div className="text flex flex-col items-start w-[50vw]">
            <h1 className='montserrat font-extrabold text-justify text-xl'>Masashi Kishimoto the creator Naruto Manga Series</h1>
            <h1 className='inter text-justify text-sm my-4'>The creator of the Naruto manga is Masashi Kishimoto. He was born on November 8, 1974, in Okayama Prefecture, Japan. Kishimoto showed an interest in drawing from a young age and was inspired by manga artists like Akira Toriyama, the creator of Dragon Ball. Kishimoto's Naruto manga was first serialized in Weekly Shōnen Jump magazine in 1999 and continued until 2014. The series has sold over 250 million copies worldwide and has been adapted into anime, films, video games, and other media. Kishimoto also supervised the two canonical anime films, The Last: Naruto the Movie and Boruto: Naruto the Movie.</h1>
            <a href='https://en.wikipedia.org/wiki/Masashi_Kishimoto' target='_blank' className='mainbutton'>More Details</a>
          </div>
          {/* Div for Naruto Creator. */}
          <div className="Image">
            <img src="/Photos/Naruto Creator Image.png" alt="" className='h-[13rem]' />
          </div>
        </div>
      </div>

    </>
  )
}
