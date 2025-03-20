import React from 'react'
import '../App.css'
import { NavLink } from "react-router";

// Importing Header & Footer.
import Footer from './UI/Footer.jsx'

export default function Home() {

  return (
    <>

      {/* Div for All age photos & text of Naruto. */}
      <div className="Image&Text flex justify-around items-center w-[100vw] h-max mt-5 sm:flex-col lg:flex-col">

        {/* Div for All age photos of Naruto. */}
        <div className="Image">
          <img src="/Photos/All Age Naruto Image.png" alt="" className='w-[35rem] sm:w-[25rem] lg:w-[25rem]' />
        </div>

        {/* Div for Text. */}
        <div className="text flex flex-col items-start w-[47vw] sm:w-[90vw] lg:w-[90vw] ">
          <h1 className='montserrat font-extrabold text-justify text-[1.2rem] sm:text-center lg:text-center'>Naruto, a famous anime from Japan, is one of the most popular anime series in the world.</h1>
          <h1 className='inter text-justify text-[0.8rem] my-3 sm:text-center lg:text-center'>The story of Naruto follows the journey of Naruto Uzumaki, a young ninja who dreams of becoming the strongest ninja and the leader of his village, called the Hokage. The series explores themes of friendship, perseverance, and self discovery, which many viewers can relate to and find inspiring. The plot has many twists and turns, keeping the audience interested. The characters in Naruto are unique and memorable. Each character has their own backstory, personality, and abilities. This makes them relatable and interesting to watch. The relationships and interactions between the characters add depth to the story and keep viewers invested in their journeys. Naruto features many intense and well animated action scenes. The battles are exciting and showcase a variety of ninja techniques and powers. These action scenes are visually impressive and keep viewers on the edge of their seats. Naruto has a large and loyal fanbase. The series has been adapted into multiple forms of media, including manga, anime, movies, and video games, which have helped to expand its popularity. The merchandise, such as action figures, clothing, and accessories, also contributes to its widespread recognition.</h1>
          <a href='https://www.imdb.com/title/tt0409591/' target='_blank' className='mainbutton sm:w-[100%] lg:w-[100%] sm:text-center lg:text-center sm:py-2 lg:py-2'>Watch Now</a>
        </div>

      </div>

      {/* Div for the creators of Naruto. */}
      <div className="NarutoCreators w-[100%] bg-black px-10 py-4 mt-5 flex flex-col">

        {/* Div for heading. */}
        <div className="heading w-[100%] flex justify-around items-center border-b-2 border-[#FF851B]">
          <h1 className='maintextcolor font-extrabold text-2xl montserrat sm:text-center lg:text-center'>The Creators of Naruto</h1>
        </div>

        {/* Div for naruto creator image white box. */}
        <div className="NarutoCreatorImage&Text w-[100%] bg-white mt-5 rounded-sm flex justify-around items-center py-5 sm:flex-col lg:flex-col">

          {/* Div for Text. */}
          <div className="text flex flex-col items-start w-[50vw] sm:w-[70vw] lg:w-[70vw]">
            <h1 className='montserrat font-extrabold text-justify  text-[1.2rem] sm:text-center lg:text-center'>Masashi Kishimoto the creator Naruto Manga Series</h1>
            <h1 className='inter text-justify text-[0.9rem] my-3 sm:text-center lg:text-center'>The creator of the Naruto manga is Masashi Kishimoto. He was born on November 8, 1974, in Okayama Prefecture, Japan. Kishimoto showed an interest in drawing from a young age and was inspired by manga artists like Akira Toriyama, the creator of Dragon Ball. Kishimoto's Naruto manga was first serialized in Weekly Shōnen Jump magazine in 1999 and continued until 2014. The series has sold over 250 million copies worldwide and has been adapted into anime, films, video games, and other media. Kishimoto also supervised the two canonical anime films, The Last: Naruto the Movie and Boruto: Naruto the Movie.</h1>
            <a href='https://en.wikipedia.org/wiki/Masashi_Kishimoto' target='_blank' className='mainbutton sm:w-[100%] lg:w-[100%] sm:text-center lg:text-center sm:py-2 lg:py-2'>More Details</a>
          </div>

          {/* Div for Naruto Creator. */}
          <div className="Image">
            <img src="/Photos/Naruto Creator Image.png" alt="" className='h-[12rem] sm:h-[9rem] lg:h-[9rem] sm:mt-5 lg:mt-5' />
          </div>
        </div>

        {/* Div for naruto anime directors image white box. */}
        <div className="NarutoDirectImage&Text w-[100%] bg-white mt-5 rounded-sm flex justify-around items-center py-5 sm:flex-col lg:flex-col">

          {/* Div for Naruto Baryon Mode. */}
          <div className="Image">
            <img src="/Photos/Baryon Mode Naruto Image.png" alt="" className='h-[13rem] sm:h-[9rem] lg:h-[9rem]' />
          </div>

          {/* Div for Text. */}
          <div className="text flex flex-col items-start w-[50vw] sm:w-[70vw] lg:w-[70vw]">
            <h1 className='montserrat font-extrabold text-justify text-[1.2rem] sm:text-center lg:text-center'>Creators behind Naruto Anime Series</h1>
            <h1 className='inter text-justify text-[0.9rem] my-3 sm:text-center lg:text-center'>The Naruto anime series was developed by Studio Pierrot and Aniplex. The first series, simply titled "Naruto," aired from 2002 to 2007 and was followed by the sequel, "Naruto: Shippuden," which aired from 2007 to 2017.</h1>
            <h1 className='inter text-justify text-[0.9rem] mb-3 sm:text-center lg:text-center'>
              <span className='font-bold'>Director:</span> Hayato Date directed both the original Naruto series and Naruto: Shippuden. <br />
              <span className='font-bold'>Series Composition:</span> Katsuyuki Sumisawa and Junki Takegami were involved in the script and series composition. <br />
              <span className='font-bold'>Character Design:</span> Tetsuya Nishio and Hirofumi Suzuki worked on character design to bring Kishimoto's characters to life in animation.</h1>
            <h1 className='inter text-justify text-[0.9rem] mb-3 sm:text-center lg:text-center'>The anime faithfully adapted Masashi Kishimoto's manga and expanded on it with additional content and story arcs. Studio Pierrot has a long history of producing successful anime, including Bleach and Tokyo Ghoul. And not only these people. There are many people who worked in Naruto Manga Series, Naruto Anime. For more information click on More Details.</h1>
            <a href='https://en.wikipedia.org/wiki/Naruto' target='_blank' className='mainbutton sm:w-[100%] lg:w-[100%] sm:text-center lg:text-center sm:py-2 lg:py-2'>More Details</a>
          </div>
        </div>
      </div>

      {/* Div for Naruto Anime, Naruto Movies, Naruto Comics section. */}
      <div className="TotalNarutoSeries w-[100%] bg-[#FF851B] px-10 py-4 flex flex-col">

        {/* Div for heading. */}
        <div className="heading w-[100%] flex justify-around items-center border-b-2 border-black">
          <h1 className='text-black font-extrabold text-2xl montserrat sm:text-center lg:text-center'>Naruto Total Anime Series, Movies, Manga Series</h1>
        </div>

        {/* Div for Cards section. */}
        <div className="Cardsection flex flex-wrap justify-between">

          {/* Card 1 Naruto Anime. */}
          <div className="NarutoAnime bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Naruto Anime.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Naruto</h1>
              <h1 className='inter text-base leading-[1.2]'>(TV Series 2002 - 2007)</h1>
              <h1 className='inter text-base leading-[1.2]'>Each Episode Duration: 24m</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://www.imdb.com/title/tt0409591/' target='_blank' className='watchbtn sm:hidden lg:hidden'>Watch Now</a>
              <a href='https://www.imdb.com/title/tt0409591/' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Watch Now</a>
            </div>
          </div>

          {/* Card 2 Naruto: Shippuden. */}
          <div className="Naruto: Shippuden bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Naruto Shippuden.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Naruto: Shippuden</h1>
              <h1 className='inter text-base leading-[1.2]'>(TV Series 2007 - 2017)</h1>
              <h1 className='inter text-base leading-[1.2]'>Each Episode Duration: 24m</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://www.imdb.com/title/tt0988824/' target='_blank' className='watchbtn sm:hidden lg:hidden'>Watch Now</a>
              <a href='https://www.imdb.com/title/tt0988824/' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Watch Now</a>
            </div>
          </div>

          {/* Card 3 Naruto Films. */}
          <div className="Naruto Films bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Naruto Films.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Naruto Films</h1>
              <h1 className='inter text-base leading-[1.2]'>Films from 2004 - 2015</h1>
              <h1 className='inter text-base leading-[1.2]'>Each Film Duration: 1hr to 1.40hr</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://www.imdb.com/list/ls078035885/' target='_blank' className='watchbtn sm:hidden lg:hidden'>Watch Now</a>
              <a href='https://www.imdb.com/list/ls078035885/' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Watch Now</a>
            </div>
          </div>

          {/* Card 4 Naruto Comics. */}
          <div className="Naruto Comics bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Naruto Comics.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Naruto Comics</h1>
              <h1 className='inter text-base leading-[1.2]'>Comics from 1999 - Present</h1>
              <h1 className='inter text-base leading-[1.2]'>Each Volume has: 180 to 200p</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://naruto-official.com/en/comics/01_83' target='_blank' className='watchbtn sm:hidden lg:hidden'>Read Now</a>
              <a href='https://naruto-official.com/en/comics/01_83' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Read Now</a>
            </div>
          </div>

          {/* Card 5 Boruto. */}
          <div className="Boruto bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Boruto.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Boruto</h1>
              <h1 className='inter text-base leading-[1.2]'>(TV Series 2017 - 2023) </h1>
              <h1 className='inter text-base leading-[1.2]'>Each Episode Duration: 23m</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://www.imdb.com/title/tt6342474/' target='_blank' className='watchbtn sm:hidden lg:hidden'>Watch Now</a>
              <a href='https://www.imdb.com/title/tt6342474/' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Watch Now</a>
            </div>
          </div>

          {/* Card 6 Boruto: Naruto the Movie. */}
          <div className="Boruto: Naruto the Movie bg-white px-8 py-6 flex flex-col justify-between h-[31rem] w-[20rem] mt-8 rounded-lg">
            {/* Div for Image. */}
            <div className="Image">
              <img src="/Photos/Boruto Movie.png" alt="" className='h-[20rem] w-max flex mx-auto' />
            </div>
            {/* Div for Text. */}
            <div className="Text">
              <h1 className='montserrat text-lg leading-[1.2] font-bold'>Boruto: Naruto the Movie</h1>
              <h1 className='inter text-base leading-[1.2]'>2015</h1>
              <h1 className='inter text-base leading-[1.2]'>Movie Duration: 1h 35m</h1>
            </div>
            {/* Div for button. */}
            <div className="button">
              <a href='https://www.imdb.com/title/tt4618398/' target='_blank' className='watchbtn sm:hidden lg:hidden'>Watch Now</a>
              <a href='https://www.imdb.com/title/tt4618398/' target='_blank' className='Reswatchbtn hidden sm:flex lg:flex'>Watch Now</a>
            </div>
          </div>

        </div>
      </div>

      {/* Naruto Main Charactors section. */}
      <div className="NarutoMainCharactors w-[100%] bg-white px-10 py-4 flex flex-col">

        {/* Div for heading. */}
        <div className="heading w-[100%] flex justify-between items-start border-b-2 border-black sm:justify-center lg:justify-center">
          <h1 className='text-black font-extrabold text-2xl montserrat'>Naruto Main Charactors</h1>
          <NavLink className='watchbtn mb-1 sm:hidden lg:hidden' to='/AllCharactors' end>More</NavLink>
        </div>

        {/* Div for Charactor Cards. */}
        <div className="CharactorsCards w-[100%] flex justify-between items-center sm:flex-col lg:flex-col">

          {/* Naruto Uzumaki card. */}
          <div className="NarutoUzumakiCard flex flex-col justify-around items-center py-4 border-[0.3rem] border-[#FF851B] px-4 rounded-lg mt-4 overflow-hidden">
            {/* Div for image. */}
            <div className="image">
              <img src="/Photos/Naruto Uzumaki.png" alt="" className='h-[16rem] w-[12rem] sm:w-[20rem] sm:h-[25rem]' />
            </div>
            {/* Div for Name. */}
            <h1 className='text-xl font-bold mt-2'>Naruto Uzumaki</h1>
          </div>

          {/* Sasuke Uchiha card. */}
          <div className="Sasuke UchihaCard flex flex-col justify-around items-center py-4 border-[0.3rem] border-[#FF851B] px-4 rounded-lg mt-4 overflow-hidden">
            {/* Div for image. */}
            <div className="image">
              <img src="/Photos/Sasuke Uchiha.png" alt="" className='h-[16rem] w-[12rem] sm:w-[20rem] sm:h-[25rem]' />
            </div>
            {/* Div for Name. */}
            <h1 className='text-xl font-bold mt-2'>Sasuke Uchiha</h1>
          </div>

          {/* Sakura card. */}
          <div className="SakuraCard flex flex-col justify-around items-center py-4 border-[0.3rem] border-[#FF851B] px-4 rounded-lg mt-4 overflow-hidden">
            {/* Div for image. */}
            <div className="image">
              <img src="/Photos/Sakura.png" alt="" className='h-[16rem] w-[12rem] sm:w-[20rem] sm:h-[25rem]' />
            </div>
            {/* Div for Name. */}
            <h1 className='text-xl font-bold mt-2'>Sakura</h1>
          </div>

          {/* Kakashi Hatake card. */}
          <div className="Kakashi HatakeCard flex flex-col justify-around items-center py-4 border-[0.3rem] border-[#FF851B] px-4 rounded-lg mt-4 overflow-hidden">
            {/* Div for image. */}
            <div className="image">
              <img src="/Photos/Kakashi Hatake.png" alt="" className='h-[16rem] w-[12rem] sm:w-[20rem] sm:h-[25rem]' />
            </div>
            {/* Div for Name. */}
            <h1 className='text-xl font-bold mt-2'>Kakashi Hatake</h1>
          </div>

        </div>

        <NavLink className='Reswatchbtn hidden sm:flex lg:flex mt-5' to='/AllCharactors' end>More</NavLink>

      </div>

      {/* Footer compoent. */}
      <Footer />

    </>
  )
}
